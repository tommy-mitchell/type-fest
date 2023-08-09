/* eslint-disable unicorn/prefer-module */
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const lzstring = require('lz-string');

/** @param {string} relativePath */
const resolve = relativePath => path.resolve(__dirname, relativePath);

/** @param {string} string_ https://stackoverflow.com/a/46959528/10292952 */
const titleCase = string_ => string_.replaceAll(/\b\S/g, t => t.toUpperCase());

// https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149?permalink_comment_id=2837584#gistcomment-2837584
/** @param {string} string_ */
const kebabCase = string_ => (
	string_
		.replaceAll(/([A-Z])([A-Z])/g, '$1-$2')
		.replaceAll(/([a-z])([A-Z])/g, '$1-$2')
		.replaceAll(/[\s_]+/g, '-')
		.toLowerCase()
);

/** @param {string} example @returns {string} */
const makeTsPlaygroundLink = example => {
	const source = example.replaceAll(/^`+|`+$/g, '').trim();
	const code = lzstring.compressToEncodedURIComponent(source);

	return `https://www.typescriptlang.org/play?#code/${code}`;
};

/**
@param {ts.JSDocTagInfo[]} tags
@param {string} name
*/
const findTagsByName = (tags, name) => (
	tags
		.filter(tag => tag.name === name)
		.map(tag => ts.displayPartsToString(tag.text))
);

/**
@param {string} entryFileName
@param {string} sourceDirectoryName
@returns {import('./types').Categories}
*/
const getTypesFromSourceFiles = (entryFileName, sourceDirectoryName) => {
	const entryFile = resolve(entryFileName);
	const sourceDirectory = resolve(sourceDirectoryName);

	const sourceFileNames = fs.readdirSync(sourceDirectory).map(fileName =>
		path.resolve(sourceDirectory, fileName).replaceAll('\\', '/'),
	);

	const program = ts.createProgram([entryFile, ...sourceFileNames], {});
	const typeChecker = program.getTypeChecker();

	/** @param {string} fileName */
	const getModuleInfo = fileName => {
		const sourceFile = program.getSourceFile(fileName);
		const moduleSymbol = typeChecker.getSymbolAtLocation(sourceFile);
		const exportedSymbols = typeChecker.getExportsOfModule(moduleSymbol);
		const exportedSymbolNames = exportedSymbols.map(symbol => symbol.escapedName);

		return {sourceFile, moduleSymbol, exportedSymbols, exportedSymbolNames};
	};

	const entryModuleInfo = getModuleInfo(entryFile);
	/** @type {import('./types').Categories} */
	const typeCategories = new Map();

	for (const sourceFileName of sourceFileNames) {
		const sourceModuleInfo = getModuleInfo(sourceFileName);

		for (const symbol of sourceModuleInfo.exportedSymbols) {
			// Skip if type is not exported
			if (!entryModuleInfo.exportedSymbolNames.includes(symbol.escapedName)) {
				continue;
			}

			const symbolName = symbol.escapedName.toString();

			const documentationComment = symbol.getDocumentationComment(typeChecker);
			const documentationCommentString = ts.displayPartsToString(documentationComment);

			const [summary] = documentationCommentString.split('\n');

			const tags = symbol.getJsDocTags();

			// Get first example and filter to code inside ``` tags
			const example = findTagsByName(tags, 'example')
				.at(0)
				?.replace('```ts', '```')
				.split('```')
				.at(1) ?? '';

			/** @type {import('./types').Type} */
			const type = {name: symbolName, summary, tags, example};

			// Grab all categories
			const categoryNames = findTagsByName(tags, 'category');

			for (const categoryName of categoryNames) {
				if (typeCategories.has(categoryName)) {
					typeCategories.get(categoryName).add(type);
				} else {
					typeCategories.set(categoryName, new Set([type]));
				}
			}

			// Linting
			const deprecated = findTagsByName(tags, 'deprecated');

			if (deprecated.length === 0) {
				if (categoryNames.length === 0) {
					console.warn(`[warning] Missing category for ${symbolName} in ./source/${path.basename(sourceFileName)}`);
				}

				if (summary.length === 0) {
					console.warn(`[warning] Missing summary for ${symbolName} in ./source/${path.basename(sourceFileName)}`);
				}
			}
		}
	}

	return typeCategories;
};

module.exports = {
	resolve,
	titleCase,
	kebabCase,
	makeTsPlaygroundLink,
	getTypesFromSourceFiles,
};
