import { openSnack } from 'app/components/toucherterre/shared/frame/popup/openSnack';
import { serverTimestamp, type CollectionReference } from 'firebase/firestore';
import {
	crud__addId,
	crud__getId,
	crud__modSoft
} from '../../tecnologies/firebase/services/crudFirestore';
// firestore__add
// firestore__del,
// firestore__gets,
import { AX__CONST__DB_idRootDoc } from '../DATACONST/config-db/AX_CONST__DB_idRootDoc';

//-------------------------------------------------------
// -- get (id)
//-------------------------------------------------------
export const config__get = async <T extends T_pageItemStore>(
	col: CollectionReference<I_firestoreDoc__megaconfig_cms<T>>
): Promise<T[]> => {
	const id = AX__CONST__DB_idRootDoc;
	try {
		const { data } = await crud__getId<I_firestoreDoc__megaconfig_cms<T>>(col, id);
		if (data) {
			// && data.pageItemsStore
			console.dir(data.pageItemsStore);
			console.debug('🧞‍♂️✅ CONVERT-ED 🔥 -> 🏎️\n🚔');
			// OK - qd le loader s arrete et que ca s affiche alors c OK !
			// openSnack('firestore', `🧞‍♂️ [ loaded ] ${col.id.toUpperCase()} ✅`);
			return data.pageItemsStore;
		} else {
			openSnack(
				'firestore',
				`🧞‍♂️${col.id.toUpperCase()} / ${id} loaded NO DATA (you could inject them) ! ✅`
			);
			return []; // => have UI working
		}
	} catch (error) {
		openSnack('firestore', `🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / ${id} ❌`);
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
	const id = AX__CONST__DB_idRootDoc;
	try {
		const entity = {
			pageItemsStore: data,
			dateCreated: serverTimestamp(),
			dateUpdated: serverTimestamp()
		};
		await crud__addId<I_firestoreDoc__megaconfig_cms<T>>(col, id, entity);
		openSnack('firestore', `🧞‍♂️ [ injected ]  ${col.id.toUpperCase()} ! ✅`);
	} catch (error) {
		openSnack('firestore', `🧞‍♂️ [ injected ]  ${col.id.toUpperCase()} ! ❌`);
	}
};
//-------------------------------------------------------
// MOD (soft)
//-------------------------------------------------------
// this add WILL merge with the existing doc
export const config__mod = async <T>(col, data) => {
	const id = AX__CONST__DB_idRootDoc;
	try {
		const entity = {
			pageItemsStore: data,
			dateUpdated: serverTimestamp()
		};

		await crud__modSoft<T>(col, id, entity);
		openSnack('firestore', `🧞‍♂️ [ SAVED ] ${col.id.toUpperCase()} ✅`);
	} catch (error) {
		openSnack('firestore', `🧞‍♂️ [ SAVED ] ${col.id.toUpperCase()} ❌`);
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
