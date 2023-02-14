import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUi';
import { serverTimestamp, type CollectionReference } from 'firebase/firestore';
import {
	crud__addId,
	crud__getId,
	crud__modSoft
} from '../../tecnology/firebase/services/crudFirestore';
// firestore__add
// firestore__del,
// firestore__gets,
import { AX__CONST__idRootDoc } from '../DATA/backend/AX__CONST__idRootDoc';

//-------------------------------------------------------
// BEREOUTH -- nothing to do with crudService
//-------------------------------------------------------
// hack - we want to open the snack when doing DB operations
const openSnack = (type: string, msg: string) => {
	const o = {
		type: type,
		text: msg,
		open: true
	};
	STORE_UI__SNACK_IS_OPEN.set(o);
};

//-------------------------------------------------------
// -- get (id)
//-------------------------------------------------------
export const config__get = async <T extends T_pageItemStore>(
	col: CollectionReference<I_firestoreDoc__megaconfig_cms<T>>
): Promise<T[]> => {
	const id = AX__CONST__idRootDoc;
	try {
		const { data } = await crud__getId<I_firestoreDoc__megaconfig_cms<T>>(col, id);
		if (data) {
			// && data.pageItemsStore
			console.debug('🚔\n🚔🧞‍♂️✅ CONVERT-ED 🔥 -> 🏎️\n🚔');
			openSnack('firestore', `🚔🧞‍♂️✅ (🔥+🏎️) GETid <<< ${col.id.toUpperCase()} / ${id} >>>`);
			return data.pageItemsStore;
		} else {
			openSnack(
				'firestore',
				`🚔🧞‍♂️✅ (🔥+🏎️) GETid <<< ${col.id.toUpperCase()} / ${id} >>> NO DATA !`
			);
			return []; // => have UI working
		}
	} catch (error) {
		openSnack('firestore', `🚔🧞‍♂️❌ (🔥+🏎️) ❌❌❌ GETid <<< ${col.id.toUpperCase()} / ${id} >>>`);
		return []; //  => have UI working
	}
};
//-------------------------------------------------------
// -- add (id)
//-------------------------------------------------------
export const config__add = async <T extends T_pageItemStore>(
	col: CollectionReference<I_firestoreDoc__megaconfig_cms<T>>,
	data: T[]
) => {
	const id = AX__CONST__idRootDoc;
	try {
		const entity = {
			pageItemsStore: data,
			dateCreated: serverTimestamp(),
			dateUpdated: serverTimestamp()
		};
		await crud__addId<I_firestoreDoc__megaconfig_cms<T>>(col, id, entity);
		openSnack('firestore', `🚔🧞‍♂️✅ (🔥+🏎️) ADD (hard) (+id=${id}) > ${col.id.toUpperCase()} `);
	} catch (error) {
		openSnack('firestore', `🚔🧞‍♂️❌ (🔥+🏎️) ADD (hard) (+id=${id}) > ${col.id.toUpperCase()}`);
	}
};
//-------------------------------------------------------
// MOD (soft)
//-------------------------------------------------------
// this add WILL merge with the existing doc
export const config__mod = async <T>(col, data) => {
	const id = AX__CONST__idRootDoc;
	try {
		const entity = {
			pageItemsStore: data,
			dateUpdated: serverTimestamp()
		};

		await crud__modSoft<T>(col, id, entity);
		openSnack('firestore', `🚔🧞‍♂️✅ (🔥+🏎️) MOD (soft) (+id=${id}) > ${col.id.toUpperCase()}`);
	} catch (error) {
		openSnack('firestore', `🚔🧞‍♂️❌ (🔥+🏎️) MOD (soft) (+id=${id}) > ${col.id.toUpperCase()}`);
	}
};
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
// -- gets
// export const pageService_dbGetIds = async <T>(col) => {
// 	try {
// 		const r = await firestore__gets<T>(col);
// 		openSnack('firestore', `🚔🧞‍♂️✅ (🔥+🏎️) GET (all) ... ${col.id.toUpperCase()}`);
// 		return r;
// 	} catch (error) {
// 		openSnack('firestore', `🚔🧞‍♂️❌ (🔥+🏎️) GET (all) ... ${col.id.toUpperCase()}`);
// 	}
// };
//-------------------------------------------------------
// -- post
// this add WILL replace totally the existing doc
// export const serviceDb_add = async (col, data) => {
// 	try {
// 		// todo - attention, on modifie la source !!!
// 		// ---
// 		const r = await firestore__add(col, data);
// 		openSnack('firestore', `🚔🧞‍♂️✅ (🔥+🏎️) ADD (hard) > ${col.id.toUpperCase()}`);
// 		return r;
// 	} catch (error) {
// 		openSnack('firestore', `🚔🧞‍♂️❌ (🔥+🏎️) ADD (hard) > ${col.id.toUpperCase()}`);
// 		return [];
// 	}
// };
//-------------------------------------------------------
// export const serviceDb_del = async (col) => {
// 	console.debug(col);
// 	// try {
// 	// 	const data = (await firestore__gets<T_pageItem>(col)) || [];
// 	// 	data.forEach(async (itm) => {
// 	// 		await firestore__del(col, itm.id);
// 	// 	});
// 	// 	openSnack('firestore', `🚔🧞‍♂️✅ (🔥+🏎️) DEL (all) > ${col.id.toUpperCase()}`);
// 	// } catch (error) {
// 	// 	openSnack('firestore', `🚔🧞‍♂️❌ (🔥+🏎️) DEL (all) > ${col.id.toUpperCase()}`);
// 	// return undefined;
// 	// }
// };
