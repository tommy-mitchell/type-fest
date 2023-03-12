/* eslint-disable unicorn/prefer-module */
const fs = require('node:fs');
const {Liquid} = require('liquidjs');
const {
	resolve,
	titleCase,
	kebabCase,
	makeTsPlaygroundLink,
	getTypesFromSourceFiles,
} = require('./utils.js');

const generateReadme = () => {
	const typeCategories = getTypesFromSourceFiles('../../index.d.ts', '../../source');

	const engine = new Liquid({
		root: resolve('.'),
		extname: '.md.liquid',
	});

	engine.registerFilter('titlecase', titleCase);

	/** @type {string} */
	const renderedReadme = engine.renderFileSync('template', {
		categories: [...typeCategories.entries()].map(([categoryName, types]) => ({
			name: categoryName,
			types: [...types.values()].map(type => ({
				name: type.name,
				description: type.summary,
				source: `source/${kebabCase(type.name)}.d.ts`,
				example: {
					code: type.example,
					playground_link: makeTsPlaygroundLink(type.example), // eslint-disable-line camelcase
				},
			})),
		})),
	});

	fs.writeFileSync(resolve('../../readme.md'), renderedReadme);
};

generateReadme();
