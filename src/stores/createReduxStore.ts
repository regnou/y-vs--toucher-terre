import { writable } from 'svelte/store';

// #############################################
// REDUX
// #############################################

// type reduxStore = {
// 	subscribe: Writable<number>['subscribe'];
// 	dispatch: () => void;
// 	set: () => void;
// };

// const store = derived(a, ($a) => $a * 2);
// const storeRedux = derived(store, ($a) => $a * 2);
export type T_axStore = ReturnType<typeof createReduxStore>;
export function createReduxStore(reducer) {
	// -----------------------------------------
	// PROP
	// -----------------------------------------
	const { update, set, subscribe } = writable<T_pageItemStore[]>([]);
	// const store = writable<T_pageItemStore[]>([]);

	// [] => beacoz we do not want the UI to break on the #each, so array

	const devTools =
		// eslint-disable-next-line
		// @ts-ignore
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__.connect();
	console.log('FIRST INIT: tool : ', devTools);

	// -----------------------------------------
	// METHOD - writable sort, becoz, we call this dispatch method from outside the component
	// -----------------------------------------
	function dispatch(action: string, value: unknown) {
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
		update,
		dispatch
	};
}
