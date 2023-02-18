import { writable } from 'svelte/store';

// #############################################
// REDUX
// #############################################
export function redux(reducer) {
	// -----------------------------------------
	// PROP
	// -----------------------------------------
	const { update, set, subscribe } = writable([]);
	// [] => beacoz we do not want the UI to break on the #each, so array

	const devTools =
		// @ts-ignore
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__.connect();
	console.log('FIRST INIT: tool : ', devTools);

	// -----------------------------------------
	// METHOD
	// -----------------------------------------
	function dispatch(action, value = 0) {
		update((state) => {
			return reducer(state, action, value);
		});
		update((state) => {
			devTools.send(action, state);
			return state;
		});
	}

	// -----------------------------------------
	// RETURN
	// -----------------------------------------
	return {
		set,
		subscribe,
		dispatch
	};
}
