// import AxPanelsAddEdit from './AxPanelsAddEdit.svelte';
//----------------------------------------------
// IMMUABLE -> faire operation, ne pas changer les datas en entrees
// change pas le STATE du system
//----------------------------------------------

//----------------------------------------------
// SAVE
//----------------------------------------------
export async function save(conf__db, store) {
	if (!conf__db || !store) return;
	console.debug('🌎🏎️✅ click >> on:save 1 🟡');
	//
	await createStorageUrl(store);
	// tip: clean blob
	for await (const item of store) {
		if (isInputValue(item))
			if (item.tag === 'file' && item.blobs) {
				// IMMUABLE MON CUL !!! TODO
				delete item.blobs;
			}
	}
	// axlog(store, $page.url.pathname, 'SAVE', false, 'DEBUG-AVANT-SAVE');
	await config__mod(conf__db, store);
	//
	console.debug('🌎🏎️✅ click << on:save 2 🟨');
	return;

	//----------------------------------------------
	// UPLOAD STORAGE ON FIREBASE
	//----------------------------------------------
	async function createStorageUrl(store) {
		if (!store) return;
		//
		// for await (const item of store) {
		for (let ii = 0; ii < store.length; ii++) {
			const item = store[ii];
			if (isInputValue(item))
				if (item.tag === 'file' && item.blobs) {
					// we always just have ONE FILE
					console.log('🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 ');
					console.log('Uploading your image...');
					// console.dir(item.blobs);
					// console.debug('...');
					// ---------------------------------------------------
					const urlStorage = await upload(item.blobs);
					// ---------------------------------------------------
					// const urlStorage = await upload(item.blobs[0]);
					// ---------------------------------------------------
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					// IMMUABLE MON CUL !!! TODO
					item.value = urlStorage;
					// delete item.blobs;
					// console.log('this item has no more BLOB; ', item);
					// item.exit = true; // hack-bad
					// We unlink the blob now from the store
					// delete item.blobs;
				}
		}
		//
		return;
	}
}
