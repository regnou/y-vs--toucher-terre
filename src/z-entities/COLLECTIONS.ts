import type { IInputEntity } from '@app/z-entities/IInputEntity';
import { collection, CollectionReference, type DocumentData } from 'firebase/firestore';
import { getFirebase } from '../tecnology/firebase/firebaseClient';
// ---
// --- todo - all your collections
// ---
// TODO - c est n importe quoi ce typage la ?
export const TABLE_ACCEUIL = createCollection<any>('acceuil');
export const TABLE_LADEMARCHE = createCollection<any>('la-demarche');
export const TABLE_PROCHAINSRDV = createCollection<any>('prochains-rendez-vous');
export const TABLE_CREATIONREALISATION = createCollection<any>('realisation_creation');
export const TABLE_NEWSLETTER = createCollection<any>('newsletter');
export const TABLE_IMG = createCollection<any>('img');
// ---
// --- This is just a helper to add the type to the db responses
// ---
function createCollection<T = DocumentData>(collectionName: string) {
	const { FIRESTORE } = getFirebase();
	// console.log(`💾  | [SCHEMA-TYPE] >> createCollection -- ${collectionName}`);
	return collection(FIRESTORE, collectionName) as CollectionReference<T>;
}
