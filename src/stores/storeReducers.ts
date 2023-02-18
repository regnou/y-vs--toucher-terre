export const reducerStatic = (state, action, value = 0) => {
	console.log('ACTION: ', action); // console.log(state.count, action);
	switch (action) {
		case 'mod-hard': {
			return value;
		}
		default:
			return state;
	}
};

export const reducerBlog = (state, action, value = 0) => {
	// console.log(state.count, action);
	console.log('ACTION: ', action);
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
	console.log('ACTION: ', action);
	switch (action) {
		case 'mod-hard': {
			return value;
		}
		default:
			return state;
	}
};
