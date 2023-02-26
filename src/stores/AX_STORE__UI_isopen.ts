import { writable } from 'svelte/store';

export const AX_STORE__UI_ISOPEN_drawer = writable(false);

export const AX_STORE__UI_ISOPEN_snack = writable({
	type: 'N/A',
	text: 'N/A',
	open: false
});

// simple modal YES / NO
// export const AX_STORE__UI_ISOPEN_dialog = writable({
// 	title: 'N/A',
// 	text: 'N/A',
// 	open: false,
// 	answer: false
// });
