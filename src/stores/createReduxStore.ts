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
	const { update, set, subscribe } = writable<I_ENTITY[]>([]);
	// const store = writable<I_BASE_ENTITY[]>([]);

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

// HOW TO USE
// onMount(async () => {
// 	axlog(_DAB_, $page.url.pathname, 'ACCEUIL (cms)');
// 	// fetch data
// 	console.debug('...');
// 	const r = await promise; // les types MATCH donc le biding devrait etre bon
// 	// create _DAB_ connected to Redux & init it with data fetched (x1 time, becoz in mount)
// 	_DAB_ = createReduxStore(reducerStatic);
// 	_DAB_.dispatch('mod-hard', r);
// 	// console.dir(_DAB_);
// 	// axlog(_DAB_, $page.url.pathname, 'ACCEUIL (cms)');
// });
