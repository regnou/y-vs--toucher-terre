import { writeFile } from 'node:fs/promises';
// import * as fs from "fs";
import { Buffer } from 'node:buffer';
import { TPL_UIADMIN } from './tpl/TPL_UIADMIN';

const write = async (path, str) => {
	try {
		const controller = new AbortController();
		const { signal } = controller;
		const data = new Uint8Array(Buffer.from(`${str}`));
		const promise = writeFile(path, data, { signal });
		// const data = new Uint8Array(Buffer.from(`jojoax`));
		// const promise = writeFile("./toto.txt", data, { signal });
		// Abort the request before the promise settles.
		// controller.abort();
		await promise;
		// $$$ LOG
		console.log('ALFRED REPORT');
		console.log('☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕\n');
		console.log('(1) FILE SUCCESSFULY WRITTEN: \n', path);
		console.log('\n☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕☕');
	} catch (err) {
		// When a request is aborted - err is an AbortError
		console.error(err);
	}
};

function generate(dir, x, y) {
	// step 1
	const HOME = '/Users/axelo/0gh/vs/toucher-terre/svelte-frontend';
	const dirRoute = 'src/routes/(admin)';
	const dirToCreate1 = HOME + '/' + dirRoute + '/' + dir;
	const fileToCreate1 = HOME + '/' + dirRoute + '/' + dir + '/' + '+page.svelte';

	// step 2
	const XXX = x; // le nom du fichier representant le widget
	const YYY = y; // le nom de la collection FIRESTORE
	const tpl = TPL_UIADMIN.replaceAll('XXX', XXX).replaceAll('YYY', YYY);

	// step 3
	console.log('DEBUG > ', tpl);
	console.log('DEBUG > ', fileToCreate1);
	write(fileToCreate1, tpl);

	// step 4
	const dirJsonInitdata = 'src/components/catalog/toucherterre/admin/pagecomponent/JSON';
}

// TODO - lire les param en entree
// generate("admin-la-demarche", "LaDemarche", "LADEMARCHE")
generate('admin-prochains-rendez-vous', 'ProchainsRdv', 'PROCHAINSRDV');
