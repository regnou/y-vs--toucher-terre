//-----------------------------------------------------------
// GUARDS (how to have them global, with types ?)
//-----------------------------------------------------------
export const isInputValues = (test: T_GLOBALS[], log = false): test is I_ENTITY__uiinputValue[] => {
	const r = isInputValue(test[0]);
	log ? console.debug('isInputValues? : ', r) : '';
	return r;
};

export const isInputValue = (test: T_GLOBALS, log = false): test is I_ENTITY__uiinputValue => {
	const r = (test as I_ENTITY__uiinputValue).value !== undefined;
	log ? console.debug('isInputValue? : ', r) : '';
	return r;
};
export const isEntityEvent = (test: T_GLOBALS, log = false): test is I_ENTITY__event => {
	const r = (test as I_ENTITY__event).titleEvent !== undefined;
	log ? console.debug('isEntityEvent? : ', r) : '';
	return r;
};
export const isEntityPost = (test: T_GLOBALS, log = false): test is I_ENTITY__post => {
	const r = (test as I_ENTITY__post).titlePost !== undefined;
	log ? console.debug('isEntityPost? : ', r) : '';
	return r;
};

export const isEntity = (test: T_GLOBALS, log = false): test is T_GLOBAL_ENTITIES => {
	const r = (test as T_GLOBAL_ENTITIES).idDoc !== undefined;
	// if (test.idDoc)

	// 	const r = 'idDoc' in test;
	log ? console.debug('isEntity ?', r) : '';
	return r;
};
