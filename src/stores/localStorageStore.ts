import { writable } from 'svelte/store';

export const localStore = (key: string, initial: any) => {
	// only run localStorage in the browser
	if (typeof window !== 'undefined') {
		let saved = '';
		const toString = (value) => JSON.stringify(value, null, 2); // helper function
		const toObj = JSON.parse; // helper function

		if (localStorage.getItem(key) === null) {
			localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
		} else {
			saved = toObj(localStorage.getItem(key)); // convert to object
		}

		const { subscribe, set, update } = writable(saved); // create the underlying writable store

		return {
			subscribe,
			set: (value) => {
				localStorage.setItem(key, toString(value)); // save also to local storage as a string
				return set(value);
			},
			update
		};
	}
	// if running in server just keep basic functionality (without storing)
	else {
		const { subscribe, set, update } = writable(initial); // create the underlying writable store
		return {
			subscribe,
			set,
			update
		};
	}
};
