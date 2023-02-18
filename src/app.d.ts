import type { CollectionReference } from 'firebase/firestore';
declare global {
	// ###############################################
	// namespace
	// ###############################################
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		// type dynvar = 'dismissible' | 'modal' | undefined;
	}

	// ###############################################
	// DOMAIN
	// ###############################################
	// le store contient un tableau, soit de ces entities...
	// la collection aussi, est un tableau, soit de ces entities...

	// SCHEMA: UI
	interface I_megaconfig__cms<T extends T_pageItemStore> {
		conf__db: CollectionReference<I_firestoreDoc__megaconfig_cms<T>>;
		conf__db_dataset: T[];
		conf__genericAdd?: I_UI__inputValue[]; // do not add in static page...
		// conf__store: Writable<T[]>;
	}
	// SCHEMA: DB
	interface I_firestoreDoc__megaconfig_cms<T extends T_pageItemStore> {
		pageItemsStore: T[];
		dateCreated: any;
		dateUpdated: any;
	}

	// ................................................
	// DOMAIN ENTITIES
	// ................................................
	type T_pageItemStore = I_UI__inputValue | T_ENTITY;
	type T_ENTITY = I_ENTITY__post | I_ENTITY__event;

	interface I_ENTITY__post {
		titlePost: I_UI__inputValue;
		slug: I_UI__inputValue; // discriminant G2
		body: I_UI__inputValue;
	}
	interface I_ENTITY__event {
		titleEvent: I_UI__inputValue;
		slug: I_UI__inputValue; // discriminant G2
		date: I_UI__inputValue;
		body: I_UI__inputValue;
		image: I_UI__inputValue;
	}
	interface I_UI__inputValue extends I_UI__factoryItem {
		label: string;
		value: string; // discriminant G1 // the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
		blobs?: any[]; // on l ajoute et puis on le supprime pour l upload
		format?: AX__ENUM__formatMedia; // TODO - enum => pour differencierimge/video du slideshow
	}
	interface I_UI__factoryItem {
		id: string;
		pos?: number;
		tag?: string; // cf. tag (I_UI__inputValue) => le type de input = file, image, text, area, ....
		dateCreated?: string;
		dateEdited?: string;
	}

	// ................................................
	// UI
	// ................................................
	type T_ui__dynvariant = 'modal' | 'dismissible' | undefined;

	interface I_ui__menu {
		title: string;
		url: string;
		img?: string; // c est l icon-img a cote du menu-name
	}

	// ................................................
	// z
	// ................................................
	interface I_dto {
		msg: string;
		data: any;
	}
}

export {};

// type Spread<Type> = { [Key in keyof Type]: Type[Key] };
// [key: number]: I_UI__inputValue;
