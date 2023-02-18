/**
 * C est le store, qui gere l etat de tous les element ui de la page affichee
 * le store ne contient PAS les meta-informations de la DB, juste la liste des itms a afficher
 */
import { writable } from 'svelte/store';

// -------------------------------------------------------------
// STORE PRIMITIF
// -------------------------------------------------------------
//

// -------------------------------------------------------------
// STORE DERIVED = c l aggregat des plus petits stores ... (validation, call firebase)
// -------------------------------------------------------------
// dyn
export const STORE__BLOG = writable<I_ENTITY__post[]>(/* -- */ [] /* -- */);
export const STORE__EVENT = writable<I_ENTITY__event[]>(/* -- */ [] /* -- */);

// static
// export const STORE__acceuil = writable<I_UI__inputValue[]>(/* -- */ [] /* -- */);
export const STORE__lademarche = writable<I_UI__inputValue[]>(/* -- */ [] /* -- */);
// store-user

// export const STORE__REDUX = STORE_BLOG;