import { writable } from 'svelte/store';

export const STORE_UI__SNACK_IS_OPEN = writable({
	type: 'N/A',
	text: 'N/A',
	open: false
});

export const STORE_UI__DRAWER_IS_OPEN = writable(false);