import { derived } from 'svelte/store';

export default function asyncDerivedConsistent(stores, callback, initial_value, param) {
	console.debug('🚔asyncDerivedConsistent');
	let guard;
	return derived(
		stores,
		($stores, set) => {
			console.debug('🚔a');
			const inner = (guard = {});
			set(initial_value);
			Promise.resolve(callback($stores, param)).then((value) => {
				console.debug('🚔b');
				if (guard === inner) {
					set(value);
				}
			});
		},
		initial_value
	);
}
