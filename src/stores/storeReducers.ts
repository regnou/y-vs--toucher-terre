export const reducerStatic = (state, action, value = 0) => {
	console.debug('ACTION: ', action); // console.debug(state.count, action);
	switch (action) {
		case 'mod-hard': {
			return value;
		}
		default:
			return state;
	}
};

export const reducerBlog = (state, action, value = 0) => {
	// console.debug(state.count, action);
	console.debug('ACTION: ', action);
	switch (action) {
		// case 'add':
		// 	return { count: state.count + value };
		// case 'del':
		// 	return { count: state.count - value };
		// case 'log': {
		// 	return state;
		// }
		case 'mod-hard': {
			return value;
		}
		default:
			return state;
	}
};

export const reducerEvent = (state, action, value = 0) => {
	console.debug('ACTION: ', action);
	switch (action) {
		case 'mod-hard': {
			return value;
		}
		default:
			return state;
	}
};
