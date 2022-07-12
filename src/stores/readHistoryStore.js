import { writable } from 'svelte/store';
// import { persist, localStorage } from '@macfja/svelte-persistent-store';

// export const readHistory = persist(writable([]), localStorage(), 'readHistory');
export const readHistory = writable([]);
