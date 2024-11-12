import { writable } from 'svelte/store';

const pageStore = writable<Page>('');

export default pageStore;
