import { derived } from 'svelte/store';

export default function asyncDerivedConsistent(stores, callback, initial_value, param) {
	console.log('asyncDerivedConsistent');
	let guard;
	return derived(
		stores,
		($stores, set) => {
			console.log('a');
			const inner = (guard = {});
			set(initial_value);
			Promise.resolve(callback($stores, param)).then((value) => {
				console.log('b');
				if (guard === inner) {
					set(value);
				}
			});
		},
		initial_value
	);
}
