import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUi';
import {
	dao_add,
	dao_add_id,
	dao_del,
	dao_get,
	dao_gets,
	dao_modSoft
} from '../utils/tecnology/firebase/services/firestoreServices';

// export const getInputByFirebaseUserId = async (fbauthuserId: string) => {
// 	const list = await q_DB<IInputEntity>(TABLE_AUTHOR, 'FK_fb_auth_user_id', '==', fbauthuserId);
// 	if (!list) return null;
// 	else if (!list.length) return null;
// 	else return list[0];
// };

const openSnack = (type: string, msg: string) => {
	const o = {
		type: type,
		text: msg,
		open: true
	}
	STORE_UI__SNACK_IS_OPEN.set(o);

	// o.open = false
	// STORE_UI__SNACK_IS_OPEN.set(o);
	// STORE_UI__SNACK_IS_OPEN.update((n) => {
}
// -- gets
export const service_getInputs = async (col) => {
	try {
		const r = await dao_gets(col);
		openSnack('success', `🔥 > ✅ > GET (all) > ${col.id}`)
		return r;
	} catch (error) {
		openSnack('success', `🔥 > ❌ > GET (all) > ${col.id}`)
	}
};
// -- get
export const service_getInput = async (col, id: string) => {
	try {
		const r = await dao_get(col, id);
		openSnack('success', `🔥 > ✅ > GET (one) > ${col.id}`)
		return r;
	} catch (error) {
		openSnack('success', `🔥 > ❌ > GET (one) > ${col.id}`)
	}



};
// -- post
// this add WILL replace totally the existing doc
export const service_addInput = async (col, data) => {


	try {
		// todo - attention, on modifie la source !!!
		// ---
		const r = await dao_add(col, data);
		openSnack('success', `🔥 > ✅ > ADD (hard) > ${col.id}`)
		return r;
	} catch (error) {
		openSnack('success', `🔥 > ❌ > ADD (hard) > ${col.id}`)
	}

};
export const service_addIdInput = async (col, id, data) => {
	try {
		// todo - attention, on modifie la source !!!
		// ---
		const r = await dao_add_id(col, id, data);
		openSnack('success', `🔥 > ✅ > ADD (hard) (with-id) > ${col.id} > ${id}`)
		return r;
	} catch (error) {
		openSnack('success', `🔥 > ❌ > ADD (hard) (with-id) > ${col.id}`)
	}


};
// this add WILL merge with the existing doc
export const service_modInput = async (col, id: string, data) => {
	try {
		const r = await dao_modSoft(col, id, data);
		openSnack('success', `🔥 > ✅ > ADD (soft) (with-id) > ${col.id}`)
		return r;
	} catch (error) {
		openSnack('success', `🔥 > ❌ > ADD (soft) (with-id) > ${col.id}`)
	}
};
export const service_delInputs = async (col) => {
	try {
		const data = (await dao_gets(col)) || [];
		data.forEach(async (itm) => {
			await dao_del(col, itm.id);
		});
		openSnack('success', `🔥 > ✅ > DEL (all) > ${col.id}`)
	} catch (error) {
		openSnack('success', `🔥 > ❌ > DEL (all) > ${col.id}`)
	}
};
