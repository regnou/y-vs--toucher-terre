export const reducerBlog = (state, action, value = 0) => {
	// console.log(state.count, action);
	console.log('ACTION: ', action);
	switch (action) {
		case 'add':
			return { count: state.count + value };
		case 'del':
			return { count: state.count - value };
		case 'mod-hard': {
			return value;
		}
		case 'log': {
			return state;
		}
		case 'start':
			return ['start'];
		default:
			return state;
	}
};
