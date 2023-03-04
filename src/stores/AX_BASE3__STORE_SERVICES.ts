// TODO - pas de store dans cette couche (couche SERVICE)
// TODO - POSSIBLE crud_db call dans cette couche
// TODO - c est SERVICE qui bind la couche STORE avec la couche DB
// const LOG_LEVEL__ON = true;
// ---------------------------------------------
// GET SORTED
// ---------------------------------------------
export const SERVICE__getAllCollections_Sorted = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>, isSorted = false): Promise<T[]> => {
	try {
		const msg = await crud__getAllCollection(col);
		const arr = msg.data;
		if (arr.length > 0) {
			// TIME TO SORT
			console.debug('🚔 🧞‍♂️✅ SORT-ing... 🔥 -> 🏎️');
			// sort it !
			if (isSorted) {
				let arrSorted;
				// logique de tri pour STATIC
				if (isEntityInputValues(arr))
					arrSorted = arr.sort((a, b) => {
						return a.pos >= b.pos ? 1 : -1;
					});
				else isEntity(arr);
				arrSorted = arr.sort((a, b) => {
					return a.createdAt >= b.createdAt ? -1 : 1;
				});
				// logique de tri pour BLOG
				return arrSorted;
			}
			return arr;
		} else {
			ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED :: loaded NO DATA (you could inject them) ! ✅`);
			return []; // => have UI working
		}
	} catch (error) {
		ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED ❌`);
		return []; //  => have UI working
	}
};
// ---------------------------------------------
// ADD
// ---------------------------------------------
export const SERVICE__add = async <T extends T_GLOBAL_ENTITIES, U extends T_GLOBALS>(col: CollectionReference<T>, entity: U) => {
	try {
		const entity2 = { ...entity, dateUpdated: serverTimestamp() };
		if (isEntity(entity2)) {
			const entity3 = await crud__addId<T>(col, entity2.idDoc, entity2);
			ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ add ]  ${col.id.toUpperCase()} ! ✅`);
			return entity3.data;
		}
		// CRUD MOD-SOFT (MERGE) + T must be of type ENTITY !
		else {
			const entity3 = await crud__addNew<T>(col, entity2); // CRUD ADD NEW (and tag it)
			ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ add ]  ${col.id.toUpperCase()} ! ✅`);
			// tip -- if OK, I return the id of the newly added item
			return entity3.data;
		}
	} catch (error) {
		ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
	}
};
// ---------------------------------------------
// ADDS
// ---------------------------------------------
export const SERVICE__adds = async <T extends T_GLOBAL_ENTITIES, U extends T_GLOBALS>(col: CollectionReference<T>, arr: U[]) => {
	try {
		for (const entity of arr) {
			await SERVICE__add(col, entity);
		}
		ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
	} catch (error) {
		ACTION__STORE_FRAME__openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
	}
};
import { ACTION__STORE_FRAME__openSnack } from 'app/components/toucherterre/shared-frame-widgets/AxSnackController';
import { isEntity, isEntityInputValues } from 'app/lib/utils/guards';
import { crud__addId, crud__addNew, crud__getAllCollection } from 'app/stores/AX_BASE4__STORE_CRUD';
import { serverTimestamp, type CollectionReference } from 'firebase/firestore';
