// import { localStore } from './localStorageStore';
// export const readHistory = localStore('history', []);

import { writable } from 'svelte/store';
export const readHistory = writable([]);
