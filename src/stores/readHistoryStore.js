import { localStore } from './localStorageStore';

export const readHistory = localStore('history', []);
