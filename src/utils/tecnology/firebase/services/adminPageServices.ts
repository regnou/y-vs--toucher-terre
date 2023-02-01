import { TABLE_ACCEUIL as col } from '../../../../entities/COLLECTIONS';
import type { IInput } from '../../../../entities/IInput';
import type { IInputEntity } from '../../../../entities/IInputEntity';
import { dao_add, dao_add_id, dao_del, dao_get, dao_gets, dao_modSoft } from './firestoreServices';
// -- gets
export const service_getInputs = async (col) => {
	return await dao_gets(col);
};
// -- get
export const service_getInput = async (col, id: string) => {
	return await dao_get(col, id);
};
// export const getInputByFirebaseUserId = async (fbauthuserId: string) => {
// 	const list = await q_DB<IInputEntity>(TABLE_AUTHOR, 'FK_fb_auth_user_id', '==', fbauthuserId);
// 	if (!list) return null;
// 	else if (!list.length) return null;
// 	else return list[0];
// };
// -- post
export const service_addInput = async (col, data) => {
	// todo - attention, on modifie la source !!!
	// ---
	return await dao_add(col, data);
};
export const service_addIdInput = async (col, id, data) => {
	// todo - attention, on modifie la source !!!
	// ---
	return await dao_add_id(col, id, data);
};

// -- put
export const service_modInput = async (col, id: string, data) => {
	return await dao_modSoft(col, id, data);
};

export const service_delInputs = async (col) => {
	const data = (await dao_gets<IInputEntity>(col)) || [];
	data.forEach(async (itm) => {
		await dao_del(col, itm.id);
	});
};
