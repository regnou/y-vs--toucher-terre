import {
	addDoc,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	query,
	serverTimestamp,
	setDoc,
	updateDoc,
	where
} from 'firebase/firestore';
import { getFirebase } from '../firebaseClient';

const LOG_LEVEL__ON = false;

// ---
async function dao_tryHelper(callback, msg, action) {
	try {
		const result_ = await callback();
		LOG_LEVEL__ON ? console.log(`🔥 >> ✅ >> ${action}-ED ! >> ${msg}`) : '';
		return result_;
	} catch (error) {
		LOG_LEVEL__ON ? console.log(`🔥 >> ❌ >> ${action}-ING... >> ${msg}`) : '';
		LOG_LEVEL__ON ? console.error(error) : '';
		return null;
	}
}
// ---
// --- add update delete
// ---
export const dao_add = async <T>(collection, data: T) => {
	let msg = `${collection.id} -- (new)`;
	const callback = async () => {
		const entity = {
			//Date.now() todo ?
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
			...data
		};
		// console.log("debug entity - ", entity);
		// ---
		// add also the id generated !
		const docRef = await addDoc<T>(collection, entity);
		// console.log('created new id >> ', docRef.id);
		msg = `${msg} ${docRef.id}`;
		// const entityWithId = {
		// 	...entity,
		// 	id: docRef.id
		// };
		// todo - attention tu refais requete coté CLIENT !
		// await modSoft(col, docRef.id, entityWithId);
		// ---
		return docRef.id;
	};
	// ---
	return await dao_tryHelper(callback, msg, 'ADD');
};

export const dao_add_id = async <T>(collection, id: string, data: T) => {
	let msg = `${collection.id} -- (new)`;
	const callback = async () => {
		const entity = {
			//Date.now() todo ?
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
			...data
		};
		LOG_LEVEL__ON ? console.log('debug entity - ', entity) : '';
		// ---

		// Add a new document in collection "cities"
		collection;
		LOG_LEVEL__ON ? console.log(collection) : '';
		return await setDoc(doc(collection, id), entity);
	};
	// ---
	return await dao_tryHelper(callback, msg, 'ADDid');
};
// ---
// --- put soft --> juste merge the change
// ---
export const dao_modSoft = async (col, id: string, data) => {
	try {
		const { FIRESTORE } = getFirebase();
		const d = doc(FIRESTORE, col.id, id);
		// await setDoc(docRef, { ...dto, updatedAt: serverTimestamp() } as any, { merge: true });
		// updatedAt: new Date().toISOString(),
		// todo - SET + MERGE=TRUE permet de ne pas ecraser l existant ! AKA non-destructives writes
		await updateDoc(d, {
			updatedAt: serverTimestamp(),
			...data
		});
		LOG_LEVEL__ON ? console.log(`🔥 >> ✅ UPDAT-ED ! >> ${col.id} -- ${id}`) : '';
		return true; //operation ok
	} catch (error) {
		LOG_LEVEL__ON ? console.log(`🔥 >> ❌ UPDAT-ING... >> ${col.id} -- ${id}`) : '';
		console.error(error);
		return null;
	}
};
export const dao_del = async (col, id) => {
	try {
		const { FIRESTORE } = getFirebase();
		const d = doc(FIRESTORE, col.id, id);
		await deleteDoc(d);
		LOG_LEVEL__ON ? console.log(`🔥 >> ✅ DELET-ED ! >> ${col.id} -- ${id}`) : '';
	} catch (error) {
		LOG_LEVEL__ON ? console.log(`🔥 >> ❌ DELET-ING... >> ${col.id} -- ${id}`) : '';
		console.error(error);
		return null;
		// throw new Error(`🔥 >> ❌ DELET-ING... >> ${col.id} -- ${id}`);
	}
};
// ---
// --- getOne getAll
// ---
export const dao_get = async <T>(col, id) => {
	try {
		const { FIRESTORE } = getFirebase();
		const d = doc(FIRESTORE, col.id, id);
		const item = await getDoc(d);
		LOG_LEVEL__ON ? console.log(`🔥  >> ✅ GET-ED ! >> ${col.id} -- ${id}`) : '';
		const data = item.data();
		// ---
		return data as T;
	} catch (error) {
		LOG_LEVEL__ON ? console.log(`🔥 >> ❌ GET-ING... >> ${col.id} -- ${id}`) : '';
		console.error(error);
		return null;
	}
};
export const dao_gets = async <T>(col) => {
	try {
		const d = await getDocs<T>(col);
		const list: T[] = d.docs.map((x) => x.data());
		LOG_LEVEL__ON ? console.log(`🔥 >> ✅ GET_ALL-ED ! >> ${col.id} -- [${list.length}]`) : '';
		// ---
		return list as T[];
	} catch (error) {
		LOG_LEVEL__ON ? console.log(`🔥 >> ❌ GET_ALL-ING... >> ${col.id} `) : '';
		console.error(error);
		return null;
	}
};
// ---
// --- listener
// ---
export const dao_onSnapshot_DB = (col) => {
	try {
		// --- real time
		const stream = (callback) =>
			onSnapshot(col, (snap) => {
				try {
					LOG_LEVEL__ON ? console.log(`🔥🟣💀 SUSCRIBE REAL TIME SNAPSHOTS`) : '';
					const list = snap.docs.map((x) => {
						return { ...x.data(), id: x.id };
					});
					callback(list);
				} catch (error) {
					console.error(error);
				}
			});
		return { stream };
	} catch (error) {
		console.error(error);
		return null;
	}
};
// ---
// --- query
// ---
export const dao_q_DB = async <T>(col, P1: string, P2, P3: string) => {
	try {
		const list: T[] = [];
		// help >> orderBy("state"), orderBy("population", "desc"));
		const q = query<T>(
			col,
			where(P1, P2, P3)
			// orderBy(`km`),
			// limit(LIMIT)
		);
		const d = await getDocs<T>(q);
		// ---
		d.forEach((x) => {
			list.push(x.data());
		});
		LOG_LEVEL__ON ? console.log(`🔥 >> ✅ QUERY-ED ! >> ${col.id} -- ${P1} ${P2} ${P3}`) : '';
		return list;
	} catch (error) {
		LOG_LEVEL__ON ? console.log(`🔥 >> ❌ QUERY-ING... >> ${col.id} -- ${P1} ${P2} ${P3}`) : '';
		console.error(error);
		return null;
	}
};
// export const query_DB = async (col, list) => {
// 	const LIMIT = 600;
// 	const l2 = list.map((itm) => itm.toLowerCase());
// 	const result_ = await mapFileds(`city`);
// 	return result_;
// 	// ---
// 	// ---
// 	// ---
// 	async function mapFileds(fieldName: string) {
// 		// todo  orderBy("state"), orderBy("population", "desc")); todo
// 		const q = query(
// 			//
// 			col,
// 			where(fieldName, `in`, l2),
// 			orderBy(`km`),
// 			limit(LIMIT)
// 		);
// 		const snap = await getDocs(q);
// 		const list = snap.docs.map((x) => {
// 			return {
// 				//
// 				...x.data(),
// 				id: x.id
// 			};
// 			// as Record<string, never>
// 		});
// 		return list;
// 	}
// };
