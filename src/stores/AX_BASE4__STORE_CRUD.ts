// TODO - pas de store dans cette couche (couche CRUD)
// TODO - POSSIBLE crud_db call dans cette couche
// TODO - c est SERVICE qui bind la couche STORE avec la couche DB

// export abstract class BaseCrudFirestore {
//
const LOG_LEVEL__ON = true;
//
const firestore__tryHelper = async (callback, msg: string, action: string): Promise<I_msg> => {
	try {
		console.debug('🚔 🔥🐶 ... -- firestore-crud');
		const r = await callback(msg);
		console.debug('🚔 🔥🎤');
		LOG_LEVEL__ON ? console.dir(r.data) : 'db-log-level--off';
		LOG_LEVEL__ON ? console.debug(`🚔 🔥✅ db -- ${action}--ED ${r.msg}`) : '';
		return r;
	} catch (err) {
		LOG_LEVEL__ON ? console.debug(`🚔 🔥❌ db -- ${action}--ING ${msg}`) : '';
		if (err instanceof Error) {
			console.debug(err.message);
			console.debug(err.name);
			console.debug(err);
			LOG_LEVEL__ON ? console.error(err.message) : '';
			return { msg: err.name, data: err.message };
			// throw new Error(); // I want the app to manage this case onto the upper fction!
		} else return { msg: 'error in db request', data: '' };
	}
};

export const crud__getAllCollection = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>): Promise<I_msg> => {
	const msg = `\x1B[35;40;4m  ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m ALL\x1B[m`;
	const callback = async (msg?: string) => {
		const arr: T[] = [];
		const docSnap = await getDocs(col);
		if (docSnap.docs.length > 0) {
			docSnap.forEach((doc) => {
				const data = doc.data();
				arr.push(data);
			});
		}
		return { msg, data: arr };
	};
	return await firestore__tryHelper(callback, msg, 'GET-allCollection-Sort');
};

export const crud__getId = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>, id: string): Promise<I_msg> => {
	const msg = `\x1B[35;40;4m ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m ${id}\x1B[m`;
	const callback = async (msg?: string) => {
		const { FIRESTORE } = getFirebase();
		const d = doc(FIRESTORE, col.id, id);
		const document = await getDoc(d);
		const data = document.data(); // ceci retourne TOUTES les key:val du document
		return { msg, data: data };
	};
	return await firestore__tryHelper(callback, msg, 'GET-id');
};

export const crud__addId = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>, id: string, data) => {
	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m\x1B[105;97;4m ${id}\x1B[m`;
	const callback = async () => {
		await setDoc<T>(doc<T>(col, id), { ...data });
		return { msg, data: data };
	};
	return await firestore__tryHelper(callback, msg, 'ADD-id');
};

export const crud__addNew = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>, data: any) => {
	let msg = `\x1B[35;40;4m  ${col.id.toUpperCase()} \x1B[m`;
	const callback = async () => {
		const docRef = doc(col); // Add a new document with a generated id
		msg = msg + `\x1B[95;40;4m ${docRef.id} \x1B[m`;
		const entity = {
			idDoc: docRef.id,
			dateUpdated: serverTimestamp(),
			...data
		};
		await setDoc(docRef, entity);
		return { msg, data: docRef.id };
	};
	return await firestore__tryHelper(callback, msg, 'ADD-new');
};

// TODO - faire en form callback pour gestion error => DANGEROUS TO PUT THIS CLIENT SITDE
export const crud__clearCollection = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>) => {
	const docsSnap = await getDocs(col);
	if (docsSnap.size > 0) {
		docsSnap.forEach(async (doc) => {
			await deleteDoc(doc.ref);
		});
	}
};

import { CollectionReference, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore';
import { getFirebase } from '../lib/firebase/AX_API__firebaseClient';
