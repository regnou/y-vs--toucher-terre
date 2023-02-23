import { writable } from 'svelte/store';

export const AX_STORE__UI_ISOPEN_drawer = writable(false);

export const AX_STORE__UI_ISOPEN_snack = writable({
	type: 'N/A',
	text: 'N/A',
	open: false
});

export const AX_STORE__UI_ISOPEN_dialog = writable({
	type: 'N/A',
	text: 'N/A',
	open: false
});
