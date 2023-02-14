//-----------------------------------------------------------
//-----------------------------------------------------------

export const isInputValue = (test: T_pageItemStore[]): test is I_UI__inputValue[] => {
	if (test && test.length) return (test[0] as I_UI__inputValue).value !== undefined;
	else return false;
};
export const isEntityEvent = (test: T_pageItemStore[]): test is I_ENTITY__event[] => {
	if (test && test.length) {
		const r = (test[0] as I_ENTITY__event).titleEvent !== undefined;
		// r ? console.log('it is event') : console.log('not a event');
		return r;
	} else {
		console.log('tableau vide');
		return false;
	}
};
export const isEntityPost = (test: T_pageItemStore[]): test is I_ENTITY__post[] => {
	if (test && test.length) {
		const r = (test[0] as I_ENTITY__post).titlePost !== undefined;
		// r ? console.log('it is post') : console.log('not a post');
		return r;
	} else {
		console.log('tableau vide');
		return false;
	}
};
export const isEntity = (test: T_pageItemStore[]): test is T_ENTITY[] => {
	const r = isEntityEvent(test) || isEntityPost(test);
	r ? console.log('it is an entity') : console.log('not an entity');
	return r;
};
