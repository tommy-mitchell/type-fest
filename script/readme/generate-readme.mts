import fs from 'node:fs/promises';
import formatter from 'eslint-formatter-pretty';
import {Liquid} from 'liquidjs';
import {resolve, titleCase, encodeTsPlaygroundLink, getTypesFromSourceFiles} from './utils.mjs';

const typeCategories = await getTypesFromSourceFiles('../../index.d.ts', '../../source');

const engine = new Liquid({
	root: resolve('.'),
	extname: '.md.liquid',
});

engine.registerFilter('titlecase', titleCase);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const renderedReadme: string = await engine.renderFile('template', {
	categories: [...typeCategories.entries()].map(([categoryName, types]) => ({
		name: categoryName,
		types: [...types.values()].map(type => ({
			name: type.name,
			description: type.summary,
			source: type.diagnostics.path,
			example: {
				code: type.example,
				playground_link: encodeTsPlaygroundLink(type.example),
			},
		})),
	})),
});

await fs.writeFile(resolve('../../readme.md'), renderedReadme);

const diagnostics = [...typeCategories.values()]
	.flatMap(types => [...types.values()])
	.map(type => ({name: type.name, ...type.diagnostics}));

const warningMessages = formatter(diagnostics.flatMap(({path: filePath, location, name, warnings}) => {
	const makeMessage = (warning: string) => `Missing \`${warning}\` for type \`${name}\``;

	const messages = [
		warnings.category && makeMessage('category'),
		warnings.summary && makeMessage('summary'),
		warnings.example && makeMessage('example'),
	].filter(Boolean) as string[];

	return {
		filePath,
		errorCount: 0,
		warningCount: messages.length,
		messages: messages.map(message => ({severity: 'warning', message, ...location})),
	};
}));

console.warn(warningMessages);
