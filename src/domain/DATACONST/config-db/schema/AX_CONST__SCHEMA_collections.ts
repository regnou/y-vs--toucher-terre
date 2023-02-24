/**
 * https://javascript.plainenglish.io/using-firestore-with-typescript-in-the-v9-sdk-cf36851bb099
 */
import { collection, CollectionReference, type DocumentData } from 'firebase/firestore';
import { getFirebase } from '../../../../tecnologies/firebase/firebaseClient';
// static
export const AX_CONST__SCHEMA_COLLECTIONS_acceuil =
	createCollection<I_firestoreDoc__megaconfig_cms<I_UI__inputValue>>('acceuil');
export const AX_CONST__SCHEMA_COLLECTIONS_lademarche =
	createCollection<I_firestoreDoc__megaconfig_cms<I_UI__inputValue>>('la-demarche');

// dyn
export const AX_CONST__SCHEMA_COLLECTIONS_blog =
	createCollection<I_firestoreDoc__megaconfig_cms<I_ENTITY__post>>('blog');
export const AX_CONST__SCHEMA_COLLECTIONS_event =
	createCollection<I_firestoreDoc__megaconfig_cms<I_ENTITY__event>>('event');

// Z
export const AX_CONST__SCHEMA_COLLECTIONS_img = createCollection<any>('z-img');

// -------------------------------------------------------------
// This is just a helper to add the type to the db responses
// -------------------------------------------------------------
function createCollection<T = DocumentData>(collectionName: string) {
	const { FIRESTORE } = getFirebase();
	// console.debug(`🚔💾  | [SCHEMA-TYPE] >> createCollection -- ${collectionName}`);
	return collection(FIRESTORE, collectionName) as CollectionReference<T>;
}
