// TODO - POSSIBLE store dans cette couche (couche ACTION)
// TODO - pas de crud_db call dans cette couche
// TODO - c est SERVICE qui bind la couche STORE avec la couche DB

import { AX_CONST__DB_COLLECTION__blog } from 'app/0-config/config-db/firebase/AX_CONST__DB_COLLECTIONS';
import { upload } from 'app/lib/firebase/AX_API__firebaseStorage';
import { isEntityEvents, isEntityInputValue, isEntityNotIv, isEntityPosts } from 'app/lib/utils/guards';
import { get } from 'svelte/store';
import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from './AX_BASE1__STORE_CONTENT';
import { SERVICE__add, SERVICE__adds } from './AX_BASE3__STORE_SERVICES';
import { crud__clearCollection } from './AX_BASE4__STORE_CRUD';

export const ACTION__addEntity = async () => {
	console.debug('🌎🏎️✅ click >> on:add 1 🟡');
	// if (confirm("Ajouter l'entité ?")) {
	const error = {
		pos: 0,
		tag: 'error-bro',
		label: 'error-bro',
		value: 'error-bro'
	};

	let entity;

	if (isEntityPosts(get(AX_STORE__CONTENT))) {
		const post: I_DTO__post = {
			titlePost: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[0]) ?? error,
			slug: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[1]) ?? error,
			body: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[2]) ?? error,
			createdAt: Date.now() // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
			//
			// https://github.com/firebase/snippets-web/blob/486e5c67bcb895a00ccab90f1b20cefdba6c9e3a/snippets/firestore-next/test-firestore/server_timestamp_resolution_options.js
			// createdAt: Timestamp.fromDate(new Date()).toMillis(), // => absure
			// I bypass the timestamp difficulty
			// createdAt: serverTimestamp().toMillis()
			// https://www.rowy.io/blog/firestore-timestamp
		};
		entity = post;
	} else if (isEntityEvents(get(AX_STORE__CONTENT))) {
		const event: I_DTO__event = {
			titleEvent: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[0]) ?? error,
			slug: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[1]) ?? error,
			body: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[2]) ?? error,
			date: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[3]) ?? error,
			image: structuredClone(get(AX_STORE__CONTENT_DB)?.formAdd[4]) ?? error,
			createdAt: Date.now() // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
			//
			// https://github.com/firebase/snippets-web/blob/486e5c67bcb895a00ccab90f1b20cefdba6c9e3a/snippets/firestore-next/test-firestore/server_timestamp_resolution_options.js
			// createdAt: Timestamp.fromDate(new Date()).toMillis(), // => absure
			// I bypass the timestamp difficulty
			// createdAt: serverTimestamp().toMillis()
			// https://www.rowy.io/blog/firestore-timestamp
		};
		entity = event;
	}

	// const post: I_DTO__post = {
	// 	titlePost: structuredClone(arr[0]),
	// 	slug: structuredClone(arr[1]),
	// 	body: structuredClone(arr[2]),
	// 	createdAt: Date.now() // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
	// 	//
	// 	// https://github.com/firebase/snippets-web/blob/486e5c67bcb895a00ccab90f1b20cefdba6c9e3a/snippets/firestore-next/test-firestore/server_timestamp_resolution_options.js
	// 	// createdAt: Timestamp.fromDate(new Date()).toMillis(), // => absure
	// 	// I bypass the timestamp difficulty
	// 	// createdAt: serverTimestamp().toMillis()
	// 	// https://www.rowy.io/blog/firestore-timestamp
	// };
	// we must add it in the DB, before the UI
	const postId = await SERVICE__add(AX_CONST__DB_COLLECTION__blog, entity);
	const post2 = { ...entity, idDoc: postId };

	// REMETTRE
	AX_STORE__CONTENT.set([...get(AX_STORE__CONTENT), post2]);

	// TYPE do not work !!!
	// if (isEntityEvents(get(AX_STORE__CONTENT)) || isEntityPosts(get(AX_STORE__CONTENT))) {
	// if (isEntitiesNotIv(get(AX_STORE__CONTENT))) {
	get(AX_STORE__CONTENT).sort((a, b) => {
		// if (isEntityEvent(a) && isEntityPosts(b))
		if (isEntityNotIv(a) && isEntityNotIv(b)) return a.createdAt >= b.createdAt ? -1 : 1;
		return -1;
	});
	// }

	// arr.push(post2);
	// arr = arr;
	// tip: reset form
	get(AX_STORE__CONTENT_DB)?.formAdd.forEach((itm) => {
		console.debug('reseted');
		itm.value = ''; // hack - refresh ui
	});
	// console.dir(get(AX_STORE__CONTENT_DB)?.formAdd);

	AX_STORE__CONTENT_DB.set(get(AX_STORE__CONTENT_DB)); // hack-ui -- mank refresh

	console.debug('c 🌎🏎️✅ click << on:add 2 🟨end, arr', get(AX_STORE__CONTENT_DB));
};
export const ACTION__del = async (pos) => {
	console.debug('🌎🏎️✅ click >> on:del 1 🟡', get(AX_STORE__CONTENT), pos);
	// XXX
	if (
		//
		!get(AX_STORE__CONTENT) ||
		!Array.isArray(get(AX_STORE__CONTENT)) ||
		pos === undefined
	)
		return;
	if (confirm("Supprimer l'article ?")) {
		// guard
		// if (isEntity(get(AX_STORE__CONTENT)[pos])) {
		// open = false; // tip: HACK - becoz, the click on the fab will also click on the panel->it will open the panel, and if closed, wil open another panel
		get(AX_STORE__CONTENT).splice(pos, 1);
		// refresh (can do diferently - TODO - juste genericStore)
		AX_STORE__CONTENT.set([...get(AX_STORE__CONTENT)]); // refresh ui -- becoz es-lint (essaie desactive)
		// }
	}
	console.debug('🌎🏎️✅ click << on:del 2 🟨');
};
export const ACTION__inject = async () => {
	if (get(AX_STORE__CONTENT_DB) || get(AX_STORE__CONTENT_DB)?.collection) {
		console.debug('ERROR: collection is undef');
		return;
	}
	console.debug('🌎🏎️✅ click >> on:inject 1 🟡');
	if (!confirm('Effacer toute les donnees et injecter DEFAULT ?')) return;

	await crud__clearCollection(get(AX_STORE__CONTENT_DB)!.collection);
	await SERVICE__adds(get(AX_STORE__CONTENT_DB)!.collection, get(AX_STORE__CONTENT_DB)!.dataset);
	console.debug('🌎🏎️✅ click << on:inject 2 🟨');
};
export const ACTION__save = async () => {
	if (!get(AX_STORE__CONTENT_DB)?.collection || !get(AX_STORE__CONTENT)) return;
	console.debug('🌎🏎️✅ click >> on:save 1 🟡');
	// if (!confirm('Enregistrer les modifications ?')) return;
	// openDialog('ENREGISTRER LES MODIFICATIONS', 'Etes vous sure ?');
	// if (get(AX_STORE__UI_ISOPEN_dialog).answer !== 'yes') return;
	await createStorageUrl(get(AX_STORE__CONTENT));
	// tip: clean blob
	for await (const item of get(AX_STORE__CONTENT)) {
		if (isEntityInputValue(item))
			if (item.tag === 'file' && item.blobs) {
				// IMMUABLE MON CUL !!! TODO
				delete item.blobs;
			}
	}
	// axlog(store, $page.url.pathname, 'SAVE', false, 'DEBUG-AVANT-SAVE');
	await SERVICE__adds(get(AX_STORE__CONTENT_DB)!.collection, get(AX_STORE__CONTENT));
	//
	console.debug('🌎🏎️✅ click << on:save 2 🟨');
	return;
	//----------------------------------------------
	// UPLOAD STORAGE ON FIREBASE
	//----------------------------------------------
	async function createStorageUrl(arr) {
		if (!arr) return;
		//
		// for await (const item of store) {
		for (let ii = 0; ii < arr.length; ii++) {
			const item = arr[ii];
			if (isEntityInputValue(item))
				if (item.tag === 'file' && item.blobs) {
					// we always just have ONE FILE
					console.debug('🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 ');
					console.debug('Uploading your image...');
					// console.dir(item.blobs);
					// console.debug('🚔 🐶...');
					// ---------------------------------------------------
					// TODO - A EVITER, CA DEVRAIT ALLER DS COUCHER SERVICE, CAR PLUS PROCHE DB
					const urlStorage = await upload(item.blobs);
					// ---------------------------------------------------
					// const urlStorage = await upload(item.blobs[0]);
					// ---------------------------------------------------
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					// IMMUABLE MON CUL !!! TODO
					item.value = urlStorage;
					// delete item.blobs;
					// console.debug('this item has no more BLOB; ', item);
					// item.exit = true; // hack-bad
					// We unlink the blob now from the store
					// delete item.blobs;
				}
		}
		//
		return;
	}
};
