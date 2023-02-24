//-------------------------------------------------------
// BEREOUTH -- nothing to do with crudService
//-------------------------------------------------------

import { AX_STORE__UI_ISOPEN_snack } from 'app/stores/AX_STORE__UI_isopen';

// hack - we want to open the snack when doing DB operations
export const openDialog = (type: string, msg: string) => {
	// tip: UNCOMMENT sinon c OFF - pour le moment => decommenter pour ON
	AX_STORE__UI_ISOPEN_snack.set({
		type: type,
		text: msg,
		open: true
	});
};
