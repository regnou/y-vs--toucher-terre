import {
	CollectionReference,
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
// ..........................................................
const LOG_LEVEL__ON = true;
// const LOG_LEVEL__ON = false;
// ----------------------------------------------------------
// ---
// ---
// ---
// ----------------------------------------------------------
async function firestore__tryHelper(callback, msg: string, action: string): Promise<I_msg> {
	try {
		const r = await callback(msg);
		console.debug('🚔');
		LOG_LEVEL__ON ? console.dir(r.data) : 'no-data-??';
		LOG_LEVEL__ON ? console.debug(`🚔🔥✅ db -- ${action}-ED ${r.msg}`) : '';
		LOG_LEVEL__ON ? console.debug('🚔') : '';
		return r;
	} catch (err) {
		LOG_LEVEL__ON ? console.debug(`🚔🔥❌ db -- ${action}-ING ${msg}`) : '';
		if (err instanceof Error) {
			LOG_LEVEL__ON ? console.error(err.message) : '';
			return { msg: err.name, data: err.message };
			// throw new Error(); // I want the app to manage this case onto the upper fction!
		} else return { msg: 'error in db request', data: '' };
	}
}
// ----------------------------------------------------------
// ---
// --- getOne getAll
// ---
// ----------------------------------------------------------
export const crud__getId = async <T extends T_GLOBAL_ENTITIES>(
	col: CollectionReference<T>,
	id: string
): Promise<I_msg> => {
	// [41;93;4m red-yellow ++
	// [45;97;4m violet
	// [47;30;4m  gris
	const msg = `\x1B[35;40;4m ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m ${id}\x1B[m`;
	// const msg = `\x1B[42;97;4m ${col.id.toUpperCase()} \x1B[m\x1B[107;32;4m ${id} \x1B[m`;
	const callback = async (msg?: string) => {
		const { FIRESTORE } = getFirebase();
		const d = doc(FIRESTORE, col.id, id);
		const document = await getDoc(d);
		const data = document.data(); // ceci retourne TOUTES les key:val du document
		// LIGHT LOG
		msg = msg + `\n`;
		// HEAVY LOG
		// msg = msg + `\n\x1B[42;30;4m ${JSON.stringify(data, null, 2)} \x1B[m`;
		return { msg, data: data as T };
	};
	// --- end
	return await firestore__tryHelper(callback, msg, 'GETid');
};
// ----------------------------------------------------------
// ---
// --- mod soft --> juste merge the change
// ---
// ----------------------------------------------------------
// serverTimestamp()
export const crud__modSoft = async <T extends T_GLOBAL_ENTITIES>(col, id: string, data) => {
	// LIGHT LOG
	// purple
	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m\x1B[105;97;4m ${id}\x1B[m`;
	// HEAVY LOG
	// 	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m \x1B[105;97;4m ${id}\x1B[m
	// \x1B[105;97;4m${JSON.stringify(data, null, 2)} \x1B[m`;
	const callback = async () => {
		// { merge: true } + setDoc<T> = SET + MERGE=TRUE permet de ne pas ecraser l existant ! AKA non-destructives writes
		await updateDoc<T>(doc<T>(col, id), { ...data });
		return { msg, data: data };
	};
	// --- end
	return await firestore__tryHelper(callback, msg, 'MOD');
};
// ----------------------------------------------------------
// ---
// --- add hard
// ---
// ----------------------------------------------------------
// il faut creer l id et l ajouter a l item
export const crud__addId = async <T extends T_GLOBAL_ENTITIES>(
	col: CollectionReference<T>,
	id: string,
	data
) => {
	// LIGHT LOG
	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m\x1B[105;97;4m ${id}\x1B[m`;
	// HEAVY LOG
	// 	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m \x1B[105;97;4m ${id}\x1B[m
	// \x1B[105;97;4m${JSON.stringify(data, null, 2)} \x1B[m`;
	const callback = async () => {
		await setDoc<T>(doc<T>(col, id), { ...data }); // data as any
		return { msg, data: data };
	};
	// --- end
	return await firestore__tryHelper(callback, msg, 'ADDid');
};

// ----------------------------------------------------------
// ---
// --- add update delete
// ---
// ----------------------------------------------------------
export const crud__add = async <T extends T_GLOBAL_ENTITIES>(
	col: CollectionReference<T>,
	data: any
) => {
	// LIGHT LOG
	// \x1B[m\x1B[105;97;4m ${id}\x1B[m
	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()}`;

	const callback = async () => {
		const docRef = doc(col); // Add a new document with a generated id
		const entity = {
			idDoc: docRef,
			dateUpdated: serverTimestamp(),
			...data
		};
		await setDoc(docRef, data);
		return { msg, data: docRef.id };
	};
	// ---
	return await firestore__tryHelper(callback, msg, 'ADDnew');
};
// ----------------------------------------------------------
//
//
//
// ----------------------------------------------------------
export const firestore__del = async (col, id) => {
	try {
		const { FIRESTORE } = getFirebase();
		const d = doc(FIRESTORE, col.id, id);
		await deleteDoc(d);
		LOG_LEVEL__ON ? console.debug(`🚔🔥 >> ✅ DELET-ED ! >> ${col.id.toUpperCase()} -- ${id}`) : '';
	} catch (error) {
		LOG_LEVEL__ON
			? console.debug(`🚔🔥 >> ❌ DELET-ING... >> ${col.id.toUpperCase()} -- ${id}`)
			: '';
		console.error(error);
		return null;
		// throw new Error(`🔥 >> ❌ DELET-ING... >> ${col.id.toUpperCase()} -- ${id}`);
	}
};

// ----------------------------------------------------------
//
//
//
// ----------------------------------------------------------
// export const firestore__gets = async <T>(col) => {
// 	try {
// 		const d = await getDocs<T>(col);
// 		const list: T[] = d.docs.map((x) => x.data());
// 		LOG_LEVEL__ON ? console.debug(`🚔🔥 >> ✅ GET_ALL-ED ! >> ${col.id.toUpperCase()} -- [${list.length}]`) : '';
// 		// ---
// 		return list as T[];
// 	} catch (error) {
// 		LOG_LEVEL__ON ? console.debug(`🚔🔥 >> ❌ GET_ALL-ING... >> ${col.id.toUpperCase()} `) : '';
// 		console.error(error);
// 		return [];
// 	}
// };
// ----------------------------------------------------------
// ---
// --- listener
// ---
// ----------------------------------------------------------
export const firestore__onSnapshot_DB = (col) => {
	try {
		// --- real time
		const stream = (callback) =>
			onSnapshot(col, (snap) => {
				try {
					LOG_LEVEL__ON ? console.debug(`🚔🔥🟣💀 SUSCRIBE REAL TIME SNAPSHOTS`) : '';
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
// ----------------------------------------------------------
// ---
// --- query
// ---
// ----------------------------------------------------------
export const firestore__q_DB = async <T>(col, P1: string, P2, P3: string) => {
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
		LOG_LEVEL__ON
			? console.debug(`🚔🔥 >> ✅ QUERY-ED ! >> ${col.id.toUpperCase()} -- ${P1} ${P2} ${P3}`)
			: '';
		return list;
	} catch (error) {
		LOG_LEVEL__ON
			? console.debug(`🚔🔥 >> ❌ QUERY-ING... >> ${col.id.toUpperCase()} -- ${P1} ${P2} ${P3}`)
			: '';
		console.error(error);
		return null;
	}
};
// ----------------------------------------------------------
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
