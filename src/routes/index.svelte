<script lang="ts">
	import { browser } from '$app/env';
	import Home from '../components/Home.svelte';

	import data from '../data/data.json';
	export let capitulos: RawCapitulo[];
	capitulos = data.data;

	if (browser) {
		if (window?.location?.href.includes('netlify.app')) {
			window?.location?.replace('https://tabla-constitucional.cl/');
			console.log('window.location.href', window?.location?.href);
		}
	}
</script>

<Home {capitulos} />
