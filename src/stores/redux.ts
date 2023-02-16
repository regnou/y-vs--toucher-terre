import { writable } from 'svelte/store';

export function redux(init, reducer, devTools) {
	// donne in the compoennt
	// const devTools =
	// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__.connect();

	const { update, subscribe } = writable(init);

	function dispatch(action, value = 0) {
		update((state) => {
			// devTools.send(action, state);
			return reducer(state, action, value);
		});
		update((state) => {
			// devTools.send(action, state);
			// return reducer(state, action, value);
			devTools.send(action, state);
		});
	}

	return {
		subscribe,
		dispatch
	};
}

// export const STORE_BLOG = redux({ count: 0 }, reducer, devTool);

// {#if store}
// 	Count: {$store.count}
// 	<button on:click={(e) => store.dispatch('increment')}>Dispatch</button>
// {/if}

// <!-- end -->
