//-----------------------------------------------------------
// GUARDS (how to have them global, with types ?)
//-----------------------------------------------------------
export const isInputValues = (test: T_pageItemStore[], log = false): test is I_UI__inputValue[] => {
	const r = isInputValue(test[0]);
	log ? console.log('isInputValues? : ', r) : '';
	return r;
};

export const isInputValue = (test: T_pageItemStore, log = false): test is I_UI__inputValue => {
	const r = (test as I_UI__inputValue).value !== undefined;
	log ? console.log('isInputValue? : ', r) : '';
	return r;
};
export const isEntityEvent = (test: T_pageItemStore, log = false): test is I_ENTITY__event => {
	const r = (test as I_ENTITY__event).titleEvent !== undefined;
	log ? console.log('isEntityEvent? : ', r) : '';
	return r;
};
export const isEntityPost = (test: T_pageItemStore, log = false): test is I_ENTITY__post => {
	const r = (test as I_ENTITY__post).titlePost !== undefined;
	log ? console.log('isEntityPost? : ', r) : '';
	return r;
};

export const isEntity = (test: T_pageItemStore, log = false): test is T_ENTITY => {
	const r = isEntityEvent(test, false) || isEntityPost(test, false);
	log ? console.log('isEntity ?', r) : '';
	return r;
};
