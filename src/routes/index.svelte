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

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Tabla Periódica Constitucional 🇨🇱</title>
	<meta name="title" content="Tabla Periódica Constitucional 🇨🇱" />
	<meta name="description" content="La nueva constitución en una tabla periódica!" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tabla-constitucional.cl/" />
	<meta property="og:title" content="Tabla Periódica Constitucional 🇨🇱" />
	<meta property="og:description" content="La nueva constitución en una tabla periódica!" />
	<meta property="og:image" content="https://tabla-constitucional.cl/como-funciona.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:site" content="@Tabla_C" />
	<meta property="twitter:url" content="https://tabla-constitucional.cl/" />
	<meta property="twitter:title" content="Tabla Periódica Constitucional 🇨🇱" />
	<meta property="twitter:description" content="La nueva constitución en una tabla periódica!" />
	<meta property="twitter:image" content="https://tabla-constitucional.cl/como-funciona.jpg" />
	<meta
		property="twitter:image:alt"
		content="Elemento de la tabla periodica que representa un articulo de la nueva constitución Chilena"
	/>
</svelte:head>

<Home {capitulos} />
