import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import ts, {type JSDocTagInfo} from 'typescript';
import lzstring from 'lz-string';
import {getProperty} from 'dot-prop';

export const resolve = (relativePath: string) => path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	...relativePath.split('/'),
);

// https://stackoverflow.com/a/46959528/10292952
export const titleCase = (string_: string) => string_.replaceAll(/\b\S/g, t => t.toUpperCase());

export const encodeTsPlaygroundLink = (example: string): string => {
	const source = example.replaceAll(/^`+|`+$/g, '').trim();
	const code = lzstring.compressToEncodedURIComponent(source);

	return `https://www.typescriptlang.org/play?#code/${code}`;
};

const findTagsByName = (tags: ts.JSDocTagInfo[], name: string) => tags
	.filter(tag => tag.name === name)
	.map(tag => ts.displayPartsToString(tag.text));

export type DiagnosticInfo = {
	path: string;
	location: {
		line: number;
		column: number;
	};
	warnings: {
		category: boolean;
		summary: boolean;
		example: boolean;
	};
};

type Type = {
	name: string;
	summary: string;
	tags: JSDocTagInfo[];
	example: string;
	diagnostics: DiagnosticInfo;
};

type Categories = Map<string, Set<Type>>;

export const getTypesFromSourceFiles = async (entryFileName: string, sourceDirectoryName: string): Promise<Categories> => {
	const entryFile = resolve(entryFileName);
	const sourceDirectory = resolve(sourceDirectoryName);

	// eslint-disable-next-line unicorn/no-await-expression-member
	const sourceFileNames = (await fs.readdir(sourceDirectory)).map(fileName =>
		path.resolve(sourceDirectory, fileName).replaceAll('\\', '/'),
	);

	const program = ts.createProgram([entryFile, ...sourceFileNames], {});
	const typeChecker = program.getTypeChecker();

	const getModuleInfo = (fileName: string) => {
		const sourceFile = program.getSourceFile(fileName)!;
		const moduleSymbol = typeChecker.getSymbolAtLocation(sourceFile)!;
		const exportedSymbols = typeChecker.getExportsOfModule(moduleSymbol);
		const exportedSymbolNames = exportedSymbols.map(symbol => symbol.escapedName);

		return {sourceFile, moduleSymbol, exportedSymbols, exportedSymbolNames};
	};

	const entryModuleInfo = getModuleInfo(entryFile);
	const typeCategories: Categories = new Map();

	for (const sourceFileName of sourceFileNames) {
		const sourceModuleInfo = getModuleInfo(sourceFileName);

		for (const symbol of sourceModuleInfo.exportedSymbols) {
			// Skip if type is not exported
			if (!entryModuleInfo.exportedSymbolNames.includes(symbol.escapedName)) {
				continue;
			}

			const location = sourceModuleInfo.sourceFile.getLineAndCharacterOfPosition(getProperty(symbol, 'declarations[0].name.pos', -1)!);

			const symbolName = symbol.escapedName.toString();

			const documentationComment = ts.displayPartsToString(symbol.getDocumentationComment(typeChecker));

			const [summary] = documentationComment.split('\n') as [string, ...string[]];

			const tags = symbol.getJsDocTags();

			// Get first example and filter to code inside ``` tags
			const example = findTagsByName(tags, 'example')
				.at(0)
				?.replace('```ts', '```')
				.split('```')
				.at(1) ?? '';

			// Grab all categories
			const categoryNames = findTagsByName(tags, 'category');

			// Linting
			const isDeprecated = findTagsByName(tags, 'deprecated').length > 0;

			const diagnostics: DiagnosticInfo = {
				path: `./source/${path.basename(sourceFileName)}`,
				location: {
					line: location.line + 1,
					column: location.character + 2,
				},
				warnings: {
					category: !isDeprecated && categoryNames.length === 0,
					summary: !isDeprecated && summary.length === 0,
					example: !isDeprecated && example.length === 0,
				},
			};

			const type: Type = {name: symbolName, summary, tags, example, diagnostics};

			for (const categoryName of categoryNames) {
				if (typeCategories.has(categoryName)) {
					typeCategories.get(categoryName)!.add(type);
				} else {
					typeCategories.set(categoryName, new Set([type]));
				}
			}
		}
	}

	return typeCategories;
};
