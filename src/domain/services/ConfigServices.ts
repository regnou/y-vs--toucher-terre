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
	// . . . . . . . . . . .
	config__getAllCollections_Sorted = async <T extends I_ENTITY__uiinputValue>(
		col: CollectionReference<T>
	): Promise<T[]> => {
		try {
			const msg = await this.crud__getAllCollection(col);
			const arr = msg.data;
			if (arr.length > 0) {
				// TIME TO SORT
				console.debug('🚔 🧞‍♂️✅ SORT-ED 🔥 -> 🏎️');
				// sort it !
				const arrSorted = arr.sort((a, b) => {
					return a.pos >= b.pos ? 1 : -1;
				});
				return arrSorted;
			} else {
				openSnack(
					'firestore',
					`🚔 🧞‍♂️${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED :: loaded NO DATA (you could inject them) ! ✅`
				);
				return []; // => have UI working
			}
		} catch (error) {
			openSnack(
				'firestore',
				`🚔 🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED ❌`
			);
			return []; //  => have UI working
		}
	};
	// . . . . . . . . . .
	config__getAllCollection = async <T extends T_GLOBAL_ENTITIES>(
		col: CollectionReference<T>
	): Promise<T[]> => {
		try {
			const arr: T[] = [];
			//
			const docSnap = await getDocs(col);
			//
			if (docSnap.docs.length > 0) {
				docSnap.forEach((doc) => {
					const data = doc.data();
					arr.push(data);
				});
				console.debug('🚔 🧞‍♂️ CONVERT-ED 🔥 -> 🏎️ = ✅');
				return arr;
			} else {
				openSnack(
					'firestore',
					`🚔 🧞‍♂️${col.id.toUpperCase()} / FULL-COLLECTION-GETS :: loaded NO DATA (you could inject them) ! ✅`
				);
				return []; // => have UI working
			}
		} catch (error) {
			openSnack(
				'firestore',
				`🚔 🧞‍♂️ ❌ [ loaded ] GETid <<< ${col.id.toUpperCase()} / FULL-COLLECTION-GETS ❌`
			);
			return []; //  => have UI working
		}
	};

	// . . . . . . . . . .
	config__add = async <T extends T_GLOBAL_ENTITIES, U extends T_GLOBALS>(
		col: CollectionReference<T>,
		entity: U
	) => {
		try {
			const entity2 = { ...entity, dateUpdated: serverTimestamp() };
			if (isEntity(entity2)) {
				const entity3 = await this.crud__addId<T>(col, entity2.idDoc, entity2);
				openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
				return entity3.data;
			}
			// CRUD MOD-SOFT (MERGE) + T must be of type ENTITY !
			else {
				const entity3 = await this.crud__addNew<T>(col, entity2); // CRUD ADD NEW (and tag it)
				openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
				// tip -- if OK, I return the id of the newly added item
				return entity3.data;
			}
		} catch (error) {
			openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
		}
	};

	// . . . . . . . . . .
	config__adds = async <T extends T_GLOBAL_ENTITIES>(
		// . . . . . . . . . .
		col: CollectionReference<T>,
		arr: T[]
	) => {
		try {
			for (const entity of arr) {
				await this.config__add(col, entity);
			}
			openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ✅`);
		} catch (error) {
			openSnack('firestore', `🚔 🧞‍♂️ [ adds ]  ${col.id.toUpperCase()} ! ❌`);
		}
	};
}
