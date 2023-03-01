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

	// Paste this in:
	async clearCollection<T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>) {
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
	}

	// ............... ............... ............... ...............
	async firestore__tryHelper(callback, msg: string, action: string): Promise<I_msg> {
		// ............... ............... ............... ...............
		try {
			console.debug('🐶...');
			const r = await callback(msg);
			console.debug('🚔 🎤 ');
			this.LOG_LEVEL__ON ? console.dir(r.data) : 'db-log-level--off';
			this.LOG_LEVEL__ON ? console.debug(`🚔🔥✅ db -- ${action}-ED ${r.msg}`) : '';
			this.LOG_LEVEL__ON ? console.debug('🚔') : '';
			return r;
		} catch (err) {
			this.LOG_LEVEL__ON ? console.debug(`🚔🔥❌ db -- ${action}-ING ${msg}`) : '';
			if (err instanceof Error) {
				console.log(err.message);
				console.log(err.name);
				console.log(err);
				this.LOG_LEVEL__ON ? console.error(err.message) : '';
				return { msg: err.name, data: err.message };
				// throw new Error(); // I want the app to manage this case onto the upper fction!
			} else return { msg: 'error in db request', data: '' };
		}
	}
	// ............... ............... ............... ...............
	crud__getAllCollection = async <T extends T_GLOBAL_ENTITIES>(
		// ............... ............... ............... ...............
		col: CollectionReference<T>
	): Promise<I_msg> => {
		const msg = `\x1B[35;40;4m ${col.id.toUpperCase()} \x1B[m\x1B[95;40;4m ALL\x1B[m`;
		const callback = async (msg?: string) => {
			const arr: T[] = [];
			// const { FIRESTORE } = getFirebase();
			const docSnap = await getDocs(col);
			// __________________________________
			if (docSnap.docs.length > 0) {
				docSnap.forEach((doc) => {
					const data = doc.data();
					arr.push(data);
				});
			}
			// sinon, l array est vide, et on informe qu aucun element se trouve ds la db
			msg = msg + `\n`;
			return { msg, data: arr as T[] };
		};
		// --- end
		return await this.firestore__tryHelper(callback, msg, 'GETallCollection');
	};
	// ............... ............... ............... ...............
	crud__getId = async <T extends T_GLOBAL_ENTITIES>(
		// ............... ............... ............... ...............
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
			// __________________________________
			const data = document.data(); // ceci retourne TOUTES les key:val du document
			// LIGHT LOG
			msg = msg + `\n`;
			// HEAVY LOG
			// msg = msg + `\n\x1B[42;30;4m ${JSON.stringify(data, null, 2)} \x1B[m`;
			return { msg, data: data as T };
		};
		// --- end
		return await this.firestore__tryHelper(callback, msg, 'GETid');
	};
	// --- mod soft --> juste merge the change (keep ALL unchanged !!! =>> dangerous i think)
	// serverTimestamp()
	// ............... ............... ............... ...............
	// crud__modSoft = async <T extends T_GLOBAL_ENTITIES>(col, id: string, data) => {
	// ............... ............... ............... ...............
	// 	// LIGHT LOG
	// 	// purple
	// 	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m\x1B[105;97;4m ${id}\x1B[m`;
	// 	// HEAVY LOG
	// 	// 	const msg = `\x1B[45;97;4m ${col.id.toUpperCase()} \x1B[m \x1B[105;97;4m ${id}\x1B[m
	// 	// \x1B[105;97;4m${JSON.stringify(data, null, 2)} \x1B[m`;
	// 	const callback = async () => {
	// 		// { merge: true } + setDoc<T> = SET + MERGE=TRUE permet de ne pas ecraser l existant ! AKA non-destructives writes
	// 		await updateDoc<T>(doc<T>(col, id), { ...data });
	// 		// ...............
	// 		return { msg, data: data };
	// 	};
	// 	// --- end
	// 	return await this.firestore__tryHelper(callback, msg, 'MOD');
	// };
	// ADD HARD (erase )
	// ............... ............... ............... ...............	// il faut creer l id et l ajouter a l item
	crud__addId = async <T extends T_GLOBAL_ENTITIES>(
		// ............... ............... ............... ...............
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
			// __________________________________
			return { msg, data: data };
		};
		// --- end
		return await this.firestore__tryHelper(callback, msg, 'ADDid');
	};
	// ............... ............... ............... ...............
	crud__addNew = async <T extends T_GLOBAL_ENTITIES>(col: CollectionReference<T>, data: any) => {
		// ............... ............... ............... ...............
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
	// ............... ............... ............... ...............
	firestore__del = async (col, id) => {
		// ............... ............... ............... ...............
		try {
			const { FIRESTORE } = getFirebase();
			const d = doc(FIRESTORE, col.id, id);
			await deleteDoc(d);
			// __________________________________
			this.LOG_LEVEL__ON
				? console.debug(`🚔🔥 >> ✅ DELET-ED ! >> ${col.id.toUpperCase()} -- ${id}`)
				: '';
		} catch (error) {
			this.LOG_LEVEL__ON
				? console.debug(`🚔🔥 >> ❌ DELET-ING... >> ${col.id.toUpperCase()} -- ${id}`)
				: '';
			console.error(error);
			return null;
			// throw new Error(`🔥 >> ❌ DELET-ING... >> ${col.id.toUpperCase()} -- ${id}`);
		}
	};
	// ............... ............... ............... ...............
	firestore__onSnapshot_DB = (col) => {
		// ............... ............... ............... ...............
		try {
			// --- real time
			const stream = (callback) =>
				onSnapshot(col, (snap) => {
					try {
						this.LOG_LEVEL__ON ? console.debug(`🚔🔥🟣💀 SUSCRIBE REAL TIME SNAPSHOTS`) : '';
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
	// ............... ............... ............... ...............
	firestore__q_DB = async <T>(col, P1: string, P2, P3: string) => {
		// ............... ............... ............... ...............
		try {
			const list: T[] = [];
			// help >> orderBy("state"), orderBy("population", "desc"));
			const q = query<T>(
				col,
				where(P1, P2, P3)
				// orderBy(`km`),
				// limit(LIMIT)
			);
			// __________________________________
			const d = await getDocs<T>(q);
			// ---
			d.forEach((x) => {
				list.push(x.data());
			});
			this.LOG_LEVEL__ON
				? console.debug(`🚔🔥 >> ✅ QUERY-ED ! >> ${col.id.toUpperCase()} -- ${P1} ${P2} ${P3}`)
				: '';
			return list;
		} catch (error) {
			this.LOG_LEVEL__ON
				? console.debug(`🚔🔥 >> ❌ QUERY-ING... >> ${col.id.toUpperCase()} -- ${P1} ${P2} ${P3}`)
				: '';
			console.error(error);
			return null;
		}
	};
}
// ----------------------------------------------------------
//  const query_DB = async (col, list) => {
// 	const LIMIT = 600;
// 	const l2 = list.map((itm) => itm.toLowerCase());
// 	const result_ = await mapFileds(`city`);
// 	return result_;
// 	// ---
// 	// ---
// 	// ---
// 	async  mapFileds(fieldName: string) {
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
