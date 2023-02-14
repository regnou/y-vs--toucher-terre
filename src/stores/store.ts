import { writable } from 'svelte/store';
// -------------------------------------------------------------
// STORE
// -------------------------------------------------------------
// c est le store, qui gere l etat de tous les element ui de la page affichee
// le store ne contient PAS les meta-informations de la DB, juste la liste des itms a afficher
export const STORE__PAGEITEMS = writable<T_pageItemStore[]>(/* -- */ [] /* -- */);
