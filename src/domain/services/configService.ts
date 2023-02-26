import { openSnack } from 'app/components/toucherterre/shared/frame/popup/openSnack';
import { getDocs, serverTimestamp, type CollectionReference } from 'firebase/firestore';
import { crud__add, crud__modSoft } from '../../tecnologies/firebase/services/crudFirestore';
import { AX__CONST__DB_idRootDoc } from '../DATACONST/config-db/AX_CONST__DB_idRootDoc';

//-------------------------------------------------------
// -- get (id)
//-------------------------------------------------------
export const config__gets = async <T extends T_GLOBAL_ENTITIES>(
	col: CollectionReference<T>
): Promise<T[]> => {
	try {
		const arr: T[] = [];
		const docSnap = await getDocs(col);
		if (docSnap.docs.length > 0) {
			docSnap.forEach((doc) => {
				const data = doc.data();
				// console.log(doc.data());
				// console.log(doc.id);
				// const { data } = await crud__getId<T>(col, id);
				arr.push(data);
				// && data.pageItemsStore
				// console.dir(data.pageItemsStore);
				// tip: qd le loader s arrete et que ca s affiche alors c OK !
				// openSnack('firestore', `🧞‍♂️ [ loaded ] ${col.id.toUpperCase()} ✅`);
			});
			console.debug('🧞‍♂️✅ CONVERT-ED 🔥 -> 🏎️\n🚔');
			return arr;
		} else {
			openSnack(
				'firestore',
				`🧞‍♂️${col.id.toUpperCase()} / FULL-COLLECTION-GETS :: loaded NO DATA (you could inject them) ! ✅`
			);
			return []; // => have UI working
		}
	} catch (error) {
		openSnack(
			'firestore',
			`🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / FULL-COLLECTION-GETS ❌`
		);
		return []; //  => have UI working
	}
};
//-------------------------------------------------------
// -- add (id)
//-------------------------------------------------------
// data: T[]
export const config__adds = async <T extends T_GLOBAL_ENTITIES>(
	col: CollectionReference<T>,
	arr: T[]
) => {
	try {
		for (const entity of arr) {
			// if ('idDoc' in entityOrDto)
			// if (isEntity(entityOrDto))
			if (entity.idDoc === 'MUST-INIT')
				//
				await crud__modSoft<T>(col, entity.idDoc, entity);
			// CRUD MOD-SOFT (MERGE) + T must be of type ENTITY !
			//
			else await crud__add<T>(col, entity); // CRUD ADD NEW
		}
		openSnack('firestore', `🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
	} catch (error) {
		openSnack('firestore', `🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
	}
};
//-------------------------------------------------------
// MOD (soft)
//-------------------------------------------------------
// this add WILL merge with the existing doc
export const config__mod = async <T extends T_GLOBAL_ENTITIES>(col, data) => {
	const id = AX__CONST__DB_idRootDoc;
	try {
		const entity = {
			pageItemsStore: data,
			dateUpdated: serverTimestamp()
		};

		await crud__modSoft<T>(col, id, entity);
		openSnack('firestore', `🧞‍♂️ [ saved ] ${col.id.toUpperCase()} ✅`);
	} catch (error) {
		openSnack('firestore', `🧞‍♂️ [ saved ] ${col.id.toUpperCase()} ❌`);
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

// ################## TO DEL
// ################## TO DEL
// ################## TO DEL
// ################## TO DEL
// ################## TO DEL

// ################## TO DEL
//  OLD model
// const id = AX__CONST__DB_idRootDoc;
// try {
// 	const entity = {
// 		pageItemsStore: arr,
// 		dateCreated: serverTimestamp(),
// 		dateUpdated: serverTimestamp()
// 	};
// 	await crud__addId<T>(col, id, entity);
// 	openSnack('firestore', `🧞‍♂️ [ injected ]  ${col.id.toUpperCase()} ! ✅`);
// } catch (error) {
// 	openSnack('firestore', `🧞‍♂️ [ injected ]  ${col.id.toUpperCase()} ! ❌`);
// }
//
//
// const id = AX__CONST__DB_idRootDoc;
// try {
// 	const { data } = await crud__getId<T>(col, id);
// 	if (data) {
// 		// && data.pageItemsStore
// 		console.dir(data.pageItemsStore);
// 		console.debug('🧞‍♂️✅ CONVERT-ED 🔥 -> 🏎️\n🚔');
// 		// OK - qd le loader s arrete et que ca s affiche alors c OK !
// 		// openSnack('firestore', `🧞‍♂️ [ loaded ] ${col.id.toUpperCase()} ✅`);
// 		return data.pageItemsStore;
// 	} else {
// 		openSnack(
// 			'firestore',
// 			`🧞‍♂️${col.id.toUpperCase()} / ${id} loaded NO DATA (you could inject them) ! ✅`
// 		);
// 		return []; // => have UI working
// 	}
// } catch (error) {
// 	openSnack('firestore', `🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / ${id} ❌`);
// 	return []; //  => have UI working
// }
