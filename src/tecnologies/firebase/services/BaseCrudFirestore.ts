import {
	collection,
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
export abstract class BaseCrudFirestore {
	LOG_LEVEL__ON = true;
	async firestore__tryHelper(callback, msg: string, action: string): Promise<I_msg> {
		try {
			console.debug('🚔 🔥🐶 ... firestore-crud');
			const r = await callback(msg);
			console.debug('🚔 🔥🎤');
			this.LOG_LEVEL__ON ? console.dir(r.data) : 'db-log-level--off';
			this.LOG_LEVEL__ON ? console.debug(`🚔 🔥✅ db -- ${action}-ED ${r.msg}`) : '';
			return r;
		} catch (err) {
			this.LOG_LEVEL__ON ? console.debug(`🚔 🔥❌ db -- ${action}-ING ${msg}`) : '';
			if (err instanceof Error) {
				console.debug(err.message);
				console.debug(err.name);
				console.debug(err);
				this.LOG_LEVEL__ON ? console.error(err.message) : '';
				return { msg: err.name, data: err.message };
				// throw new Error(); // I want the app to manage this case onto the upper fction!
			} else return { msg: 'error in db request', data: '' };
		}
	}
	//
	//
	//
	// ...............
	crud__getAllCollection = async <T extends T_GLOBAL_ENTITIES>(
		col: CollectionReference<T>
	): Promise<I_msg> => {
		const msg = `\x1B[35;40;4m crud__getAllCollection: ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m ALL\x1B[m`;
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
		// --- end
		return await this.firestore__tryHelper(callback, msg, 'GETallCollection');
	};
	// ...............
	crud__getId = async <T extends T_GLOBAL_ENTITIES>(
		col: CollectionReference<T>,
		id: string
	): Promise<I_msg> => {
		const msg = `\x1B[35;40;4m ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m ${id}\x1B[m`;
		const callback = async (msg?: string) => {
			const { FIRESTORE } = getFirebase();
			const d = doc(FIRESTORE, col.id, id);
			const document = await getDoc(d);
			// __________________________________
			const data = document.data(); // ceci retourne TOUTES les key:val du document
			// LIGHT LOG

			// HEAVY LOG
			// msg = msg + `\n\x1B[42;30;4m ${JSON.stringify(data, null, 2)} \x1B[m`;
			return { msg, data: data };
		};
		return await this.firestore__tryHelper(callback, msg, 'GETid');
	};
	// ...............	// il faut creer l id et l ajouter a l item
	crud__addId = async <T extends T_GLOBAL_ENTITIES>(
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
			await setDoc<T>(doc<T>(col, id), { ...data });
			// __________________________________
			return { msg, data: data };
		};
		// --- end
		return await this.firestore__tryHelper(callback, msg, 'ADDid');
	};
	// ...............
	crud__addNew = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>, data: any) => {
		// LIGHT LOG
		// \x1B[m\x1B[105;97;4m ${id}\x1B[m
		const msg = `\x1B[45;97;4m ${col.id.toUpperCase()}`;
		const callback = async () => {
			const docRef = doc(col); // Add a new document with a generated id
			// __________________________________
			const entity = {
				idDoc: docRef.id,
				dateUpdated: serverTimestamp(),
				...data
			};
			await setDoc(docRef, entity);
			// __________________________________
			return { msg, data: docRef.id };
		};
		// ---
		return await this.firestore__tryHelper(callback, msg, 'ADDnew');
	};
	// ...............
	crud__clearCollection = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>) => {
		// const ref = collection(col);
		// const ref = firestore.collection(path);
		// ref.
		// col.onSnapshot((snapshot) => {
		// 	snapshot.docs.forEach((doc) => {
		// 		doc(col, doc.id).delete();
		// 		// col.doc(doc.id).delete();
		// 	});
		// });
		const docsSnap = await getDocs(col);
		// __________________________________
		// await deleteDoc(doc(db, "cities", "DC"));
		// docsSnap.docs.length
		if (docsSnap.size > 0) {
			docsSnap.forEach(async (doc) => {
				// const d = await getDoc(doc);
				await deleteDoc(doc.ref);
				// const d = doc(FIRESTORE, col.id, id);
				// const document = await getDoc(d);
			});
		}
	};
	//
	//
	//
}
