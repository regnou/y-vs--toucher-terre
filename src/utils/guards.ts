//-----------------------------------------------------------
//-----------------------------------------------------------
export const isInputValue = (test: T_pageItemStore[]): test is I_UI__inputValue[] => {
	if (test && test.length) return (test[0] as I_UI__inputValue).value !== undefined;
	else return false;
};
export const isEntityEvent = (test: T_pageItemStore[]): test is I_ENTITY__event[] => {
	if (test && test.length) return (test[0] as I_ENTITY__event).titleEvent !== undefined;
	else return false;
};
export const isEntityPost = (test: T_pageItemStore[]): test is I_ENTITY__post[] => {
	if (test && test.length) return (test[0] as I_ENTITY__post).titlePost !== undefined;
	else return false;
};
export const isEntity = (test: T_pageItemStore[]) => {
	return isEntityEvent(test) || isEntityPost(test);
};
