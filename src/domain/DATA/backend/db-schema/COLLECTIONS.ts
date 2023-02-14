/**
 * https://javascript.plainenglish.io/using-firestore-with-typescript-in-the-v9-sdk-cf36851bb099
 */
import { collection, CollectionReference, type DocumentData } from 'firebase/firestore';
import { getFirebase } from '../../../../tecnology/firebase/firebaseClient';

// -------------------------------------------------------------
// DB
// -------------------------------------------------------------
// dyn
export const AX__COLLECTION__BLOG =
	createCollection<I_firestoreDoc__config_cms<I_ENTITY__post>>('blog');
export const AX__COLLECTION__EVENT =
	createCollection<I_firestoreDoc__config_cms<I_ENTITY__event>>('prochains-rdv');

// static
export const AX__COLLECTION__ACCEUIL =
	createCollection<I_firestoreDoc__config_cms<I_UI__inputValue>>('acceuil');
export const AX__COLLECTION__LADEMARCHE =
	createCollection<I_firestoreDoc__config_cms<I_UI__inputValue>>('la-demarche');

//
export const AX__COLLECTION__NEWSLETTER =
	createCollection<I_firestoreDoc__config_cms<any>>('newsletter');
// TODO
export const AX__COLLECTION__IMG = createCollection<any>('z-img');

// -------------------------------------------------------------
// This is just a helper to add the type to the db responses
// -------------------------------------------------------------
function createCollection<T = DocumentData>(collectionName: string) {
	const { FIRESTORE } = getFirebase();
	// console.debug(`🚔💾  | [SCHEMA-TYPE] >> createCollection -- ${collectionName}`);
	return collection(FIRESTORE, collectionName) as CollectionReference<T>;
}
