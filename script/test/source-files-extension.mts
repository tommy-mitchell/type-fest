import fs from 'node:fs/promises';
import process from 'node:process';

try {
	const files = await fs.readdir('source');

	let hasIncorrectFileExtension = false;
	for (const file of files) {
		if (!file.endsWith('.d.ts')) {
			hasIncorrectFileExtension = true;
			console.error(`source/${file} extension should be \`.d.ts\`.`);
		}
	}

	if (hasIncorrectFileExtension) {
		process.exitCode = 1;
	}
} catch (error) {
	console.error(error);
	process.exitCode = 1;
}
