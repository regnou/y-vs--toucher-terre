// import { TABLE_ACCEUIL, TABLE_LADEMARCHE, TABLE_NEWSLETTER, TABLE_PROCHAINSRDV, TABLE_CREATIONREALISATION as TABLE_CREATIONREALISATION } from "@app/domain/2dao/firebase/COLLECTIONS";
import { writable, type Writable } from 'svelte/store';

export const STORE_ACCEUIL = writable<any[]>([]);
export const STORE_LADEMARCHE = writable<any[]>([]);

// export const STORE_CREATIONREALISATION = writable([]);
export const STORE_CREATIONREALISATION = writable<T_storeCreationRealisation>([]);

export const STORE_PROCHAINSRDV = writable<any[]>([]);
export const STORE_NEWSLETTER = writable<any[]>([]);

// import asyncDerivedConsistent from "./utils/consistent";

// export const STORE_ACCEUIL = (async () => { return await startPageStore(TABLE_ACCEUIL) })()

// async function startInitStore($store, col) {
//     const data = await service_getInputs(col);
//     $store = data[0] ? data[0].data : []
//     console.log("startAcceuilPageStore: ", $store);
// }

// const store: Writable<TData>;
// Or extending
// interface MyWritableStore<T> extends Writable<T> {
//   getName: () => string
//   setName: (name: string) => void
// }

// export const STORE_ACCEUIL:Writable<T_storeAcceuil> = writable([]);


// export const STORE_ACCEUIL = asyncDerivedConsistent(STORE_ACCEUIL_BASE, startInitStore, [], TABLE_ACCEUIL)

// do not build
// export const STORE_ACCEUIL = await startPageStore(TABLE_ACCEUIL)
// export const STORE_LADEMARCHE = await startPageStore(TABLE_LADEMARCHE)
// export const STORE_CREATIONREALISATION = await startPageStore(TABLE_CREATIONREALISATION)
// export const STORE_PROCHAINSRDV = await startPageStore(TABLE_PROCHAINSRDV)
// export const STORE_NEWSLETTER = await startPageStore(TABLE_NEWSLETTER)

// async function startPageStore(col) {
//     console.log("startAcceuilPageStore");
//     // const data = await service_getInputs(col);
//     const data = await service_getInputs(col);

//     const initData = data[0] ? data[0].data : []
//     const { subscribe, set, update } = writable(initData)
//     // const { subscribe, set, update } = writable(0)
//     return {
//         subscribe,
//         set,
//         // set: async (values: any[]) => {
//         //   await service_delInputs()
//         //   values.forEach(async itm => {
//         //       await service_addInput(itm)
//         //   });
//         //   return set(values)
//         // },
//         update
//     }
// }
