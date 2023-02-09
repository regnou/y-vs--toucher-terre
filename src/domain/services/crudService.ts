import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUi';
import {
	dao_add,
	dao_add_id,
	dao_del,
	dao_get,
	dao_gets,
	dao_modSoft
} from '../../tecnology/firebase/services/firestoreServices';
//#######################################################
// export const getInputByFirebaseUserId = async (fbauthuserId: string) => {
// 	const list = await q_DB<IInputEntity>(TABLE_AUTHOR, 'FK_fb_auth_user_id', '==', fbauthuserId);
// 	if (!list) return null;
// 	else if (!list.length) return null;
// 	else return list[0];
// };
//-------------------------------------------------------
// BEREOUTH -- nothing to do with crudService
//-------------------------------------------------------
// hack - we want to open the snack when doing DB operations
const openSnack = (type: string, msg: string) => {
	const o = {
		type: type,
		text: msg,
		open: true
	};
	STORE_UI__SNACK_IS_OPEN.set(o);
};
//#######################################################
// -- gets
export const service_getInputs = async (col) => {
	try {
		const r = await dao_gets(col);
		openSnack('firestore', `🔥 ✅ GET (all) ... ${col.id.toUpperCase()}`);
		return r;
	} catch (error) {
		openSnack('firestore', `🔥 ❌ GET (all) ... ${col.id.toUpperCase()}`);
	}
};
//-------------------------------------------------------
// -- get
export const service_getInput = async (col, id: string) => {
	try {
		const r = await dao_get(col, id);
		openSnack('firestore', `🔥 ✅ GET (one) > ${col.id.toUpperCase()}`);
		return r;
	} catch (error) {
		openSnack('firestore', `🔥 ❌ GET (one) > ${col.id.toUpperCase()}`);
	}
};
//-------------------------------------------------------
// -- post
// this add WILL replace totally the existing doc
export const service_addInput = async (col, data) => {
	try {
		// todo - attention, on modifie la source !!!
		// ---
		const r = await dao_add(col, data);
		openSnack('firestore', `🔥 ✅ ADD (hard) > ${col.id.toUpperCase()}`);
		return r;
	} catch (error) {
		openSnack('firestore', `🔥 ❌ ADD (hard) > ${col.id.toUpperCase()}`);
	}
};
//-------------------------------------------------------
export const service_addIdInput = async (col, id, data) => {
	try {
		// todo - attention, on modifie la source !!!
		// ---
		const r = await dao_add_id(col, id, data);
		openSnack('firestore', `🔥 ✅ ADD (hard) (with-id: ${id}) > ${col.id.toUpperCase()} `);
		return r;
	} catch (error) {
		openSnack('firestore', `🔥 ❌ ADD (hard) (with-id: ${id}) > ${col.id.toUpperCase()}`);
	}
};
//-------------------------------------------------------
// this add WILL merge with the existing doc
export const service_modInput = async (col, id: string, data) => {
	try {
		const r = await dao_modSoft(col, id, data);
		openSnack('firestore', `🔥 ✅ ADD (soft) (with-id: ${id}) > ${col.id.toUpperCase()}`);
		return r;
	} catch (error) {
		openSnack('firestore', `🔥 ❌ ADD (soft) (with-id: ${id}) > ${col.id.toUpperCase()}`);
	}
};
//-------------------------------------------------------
export const service_delInputs = async (col) => {
	try {
		const data = (await dao_gets(col)) || [];
		data.forEach(async (itm) => {
			await dao_del(col, itm.id);
		});
		openSnack('firestore', `🔥 ✅ DEL (all) > ${col.id.toUpperCase()}`);
	} catch (error) {
		openSnack('firestore', `🔥 ❌ DEL (all) > ${col.id.toUpperCase()}`);
	}
};
