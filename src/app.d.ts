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

	// ................................................
	// DOMAIN ENTITIES
	// ................................................
	interface I_DB_CONFIG<T extends T_GLOBAL_ENTITIES, U extends T_GLOBAL_DTOS> {
		conf__db: CollectionReference<T>;
		conf__db_dataset: U[]; // firebase will ADD the ID to all theses elements
		conf__genericAdd?: I_DTO__uiinputValue[]; // it is always a form here, so iv + do not add in static page...
	}

	type T_GLOBALS = T_GLOBAL_ENTITIES | T_GLOBAL_DTOS;
	type T_GLOBAL_ENTITIES = I_ENTITY__post | I_ENTITY__event | I_ENTITY__uiinputValue;
	type T_GLOBAL_DTOS = I_DTO__uiinputValue | I_DTO__event | I_DTO__post;

	interface I_ENTITY {
		idDoc: string;
	}
	interface I_ENTITY__post extends I_ENTITY, I_DTO__post {}
	interface I_ENTITY__event extends I_ENTITY, I_DTO__event {}
	interface I_ENTITY__uiinputValue extends I_ENTITY, I_DTO__uiinputValue {}
	interface I_DTO__post {
		titlePost: I_DTO__uiinputValue;
		slug: I_DTO__uiinputValue;
		body: I_DTO__uiinputValue;
		createdAt: number; // timestamp
	}
	interface I_DTO__event {
		titleEvent: I_DTO__uiinputValue;
		slug: I_DTO__uiinputValue;
		date: I_DTO__uiinputValue;
		body: I_DTO__uiinputValue;
		image: I_DTO__uiinputValue;
		createdAt: number;
	}
	interface I_DTO__uiinputValue {
		pos?: number;
		tag?: string; // si il n y a pas de tag, ca sera TYPE par default
		label: string;
		value: string; // (value  = storageUrl (in the case of tag=file)
		blobs?: any[]; // on l ajoute et puis on le supprime pour l upload
		format?: AX_CONST__formatMedia; // TODO - enum => pour differencierimge/video du slideshow
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
	// firestore-crud use it to return a msg
	interface I_msg {
		msg: string;
		data: any;
	}
}
export {};
// type Spread<Type> = { [Key in keyof Type]: Type[Key] };
// [key: number]: I_ENTITY__uiinputValue;
