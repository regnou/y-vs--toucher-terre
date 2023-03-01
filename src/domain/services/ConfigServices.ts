import { openSnack } from 'app/components/toucherterre/shared/frame/popup/openSnack';
import { isEntity } from 'app/utils/guards';
import { getDocs, serverTimestamp, type CollectionReference } from 'firebase/firestore';
import { BaseCrudFirestore } from '../../tecnologies/firebase/services/BaseCrudFirestore';
import { AX__CONST__DB_idRootDoc } from '../DATACONST/config-db/AX_CONST__DB_idRootDoc';
export class ConfigServices extends BaseCrudFirestore {
	private static instance: ConfigServices;
	/**
	 * The ConfigServices's constructor should always be private to prevent direct
	 * construction calls with the `new` operator.
	 */
	// private constructor() { }
	/**
	 * The static method that controls the access to the ConfigServices instance.
	 *
	 * This implementation let you subclass the ConfigServices class while keeping
	 * just one instance of each subclass around.
	 */
	public static getInstance(): ConfigServices {
		if (!ConfigServices.instance) {
			ConfigServices.instance = new ConfigServices();
		}
		return ConfigServices.instance;
	}
	/**
	 * LOGIC
	 */
	// . . . . . . . . . . . . . . . . . . . .
	config__getsSorted = async <T extends I_ENTITY__uiinputValue>(
		// . . . . . . . . . . . . . . . . . . . .
		col: CollectionReference<T>
	): Promise<T[]> => {
		try {
			const msg = await this.crud__getAllCollection(col);
			const arr = msg.data;
			if (arr.length > 0) {
				// TIME TO SORT
				console.debug('🧞‍♂️✅ CONVERT-ED 🔥 -> 🏎️\n🚔');
				const arrSorted = arr.sort((a, b) => {
					return a.pos >= b.pos ? 1 : -1;
				});
				return arrSorted;
			} else {
				openSnack(
					'firestore',
					`🧞‍♂️${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED :: loaded NO DATA (you could inject them) ! ✅`
				);
				return []; // => have UI working
			}
		} catch (error) {
			openSnack(
				'firestore',
				`🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED ❌`
			);
			return []; //  => have UI working
		}
	};
	// . . . . . . . . . . . . . . . . . . . .
	config__gets = async <T extends T_GLOBAL_ENTITIES>(
		// . . . . . . . . . . . . . . . . . . . .
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
					// const { data } = await this.crud__getId<T>(col, id);
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

	// . . . . . . . . . . . . . . . . . . . .
	config__add = async <T extends T_GLOBAL_ENTITIES, U extends T_GLOBALS>(
		// . . . . . . . . . . . . . . . . . . . .
		col: CollectionReference<T>,
		entity: U
	) => {
		try {
			const entity2 = { ...entity, dateUpdated: serverTimestamp() };
			// if ('idDoc' in entity2)

			// if (entity.idDoc === 'MUST-INIT')
			// BEFORE i use mod
			// await this.crud__modSoft<T>(col, entity2.idDoc, entity2);
			// tip -- NOW i do not use it => SHOULD REPLACE EVERYTHING

			if (isEntity(entity2)) {
				const entity3 = await this.crud__addId<T>(col, entity2.idDoc, entity2);
				openSnack('firestore', `🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
				return entity3.data;
			}
			// CRUD MOD-SOFT (MERGE) + T must be of type ENTITY !
			//
			else {
				const entity3 = await this.crud__addNew<T>(col, entity2); // CRUD ADD NEW (and tag it)
				openSnack('firestore', `🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
				// tip -- if OK, I return the id of the newly added item
				return entity3.data;
			}

			return;
		} catch (error) {
			openSnack('firestore', `🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
		}
	};

	// . . . . . . . . . . . . . . . . . . . .
	config__adds = async <T extends T_GLOBAL_ENTITIES>(
		// . . . . . . . . . . . . . . . . . . . .
		col: CollectionReference<T>,
		arr: T[]
	) => {
		try {
			for (const entity of arr) {
				await this.config__add(col, entity);
				// const entity2 = { ...entity, dateUpdated: serverTimestamp() };
				// if ('idDoc' in entity)
				// 	// if (isEntity(entityOrDto))
				// 	// if (entity.idDoc === 'MUST-INIT')
				// 	await this.crud__modSoft<T>(col, entity2.idDoc, entity2);
				// // CRUD MOD-SOFT (MERGE) + T must be of type ENTITY !
				// //
				// else await this.crud__add<T>(col, entity2); // CRUD ADD NEW (and tag it)
			}
			openSnack('firestore', `🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
		} catch (error) {
			openSnack('firestore', `🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
		}
	};
	// // . . . . . . . . . . . . . . . . . . . .
	// PAS DE SYSTEME optimise de 'tu changes juste les chps qui ont changés)
	// // this add WILL merge with the existing doc
	// private config__mod = async <T extends T_GLOBAL_ENTITIES>(
	// 	// . . . . . . . . . . . . . . . . . . . .
	// 	col: CollectionReference<T>,
	// 	data: T
	// ) => {
	// 	const id = AX__CONST__DB_idRootDoc;
	// 	try {
	// 		const entity = {
	// 			// OBSOLETE !!!!!!!!!!!!!!!!!!!!!
	// 			pageItemsStore: data,
	// 			dateUpdated: serverTimestamp()
	// 		};
	// 		await this.crud__modSoft<T>(col, id, entity);
	// 		openSnack('firestore', `🧞‍♂️ [ saved ] ${col.id.toUpperCase()} ✅`);
	// 	} catch (error) {
	// 		openSnack('firestore', `🧞‍♂️ [ saved ] ${col.id.toUpperCase()} ❌`);
	// 	}
	// };
}
// . . . . . . . . . . . . . . . . . . . .
// -- gets
//  const pageService_dbGetIds = async <T>(col) => {
// 	try {
// 		const r = await firestore__gets<T>(col);
// 		openSnack('firestore', `🚔🧞‍♂️✅ (🔥+🏎️) GET (all) ... ${col.id.toUpperCase()}`);
// 		return r;
// 	} catch (error) {
// 		openSnack('firestore', `🚔🧞‍♂️❌ (🔥+🏎️) GET (all) ... ${col.id.toUpperCase()}`);
// 	}
// };
// . . . . . . . . . . . . . . . . . . . .
// -- post
// this add WILL replace totally the existing doc
//  const serviceDb_add = async (col, data) => {
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
// . . . . . . . . . . . . . . . . . . . .
//  const serviceDb_del = async (col) => {
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
// 	await this.crud__addId<T>(col, id, entity);
// 	openSnack('firestore', `🧞‍♂️ [ injected ]  ${col.id.toUpperCase()} ! ✅`);
// } catch (error) {
// 	openSnack('firestore', `🧞‍♂️ [ injected ]  ${col.id.toUpperCase()} ! ❌`);
// }
//
//
// const id = AX__CONST__DB_idRootDoc;
// try {
// 	const { data } = await this.crud__getId<T>(col, id);
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
