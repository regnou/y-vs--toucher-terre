// See https://kit.svelte.dev/docs/types#app

import type { Writable } from 'svelte/store';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		// type dynvar = 'dismissible' | 'modal' | undefined;
	}

	// export enum Filter {
	// 	ALL = 'all',
	// 	ACTIVE = 'active',
	// 	COMPLETED = 'completed',
	//   }

	type T_dynvar = 'dismissible' | 'modal' | undefined;

	type T_headerMenuApp = {
		img: string;
		url: string;
		menu: string;
	}[];

	// type T_storeAcceuil = {
	// 	subscribe: Writable<never[]>["subscribe"]
	// }

	type T_storeAcceuil = {};

	// -----------------------------------------
	// type mixed = T_blog | T_inputValue
	// type T_storeCreationRealisation = Array<mixed>
	// 	type T_storeCreationRealisation = (
	// 		{
	// 		T_inputValue | T_blog
	// }
	// 	)[]
	// function isBlog(item: T_inputValue | T_blog): item is T_blog {
	// 	// return (item as T_blog).swim !== undefined;
	// 	return typeof item === T_blog;
	// }
	//   function isA(param: C): param is A {
	// 	return param.type === A;
	// }
	// type T_storeCreationRealisation = (T_inputValue | T_blog)[] | null

	// -----------------------
	type T_storeCreationRealisation = Array<T_blog | T_inputValue>;

	type T_blog = {
		id: string;
		index: number;
		type: string;
		posts: T_post[];
	};
	type T_post = {
		id: number;
		page: string;
		url: string;
		date_created: string;
		date_modified: string;
		inputValues: T_inputValue[];
	};
	// -----------------------
	// form fields
	type T_inputValue = {
		id: string;
		index: number;
		type: string;
		label: string;
		inputValue: string;
	};
	// -----------------------------------------
}

export {};
