// ---------------------------------------------
// STORE -- FRAME
// ---------------------------------------------
export const AX_STORE__FRAME_drawerIsOpen = writable(false);
export const AX_STORE__FRAME_snack = writable({
	type: 'N/A',
	text: 'N/A',
	open: false
});
import { writable } from 'svelte/store';
