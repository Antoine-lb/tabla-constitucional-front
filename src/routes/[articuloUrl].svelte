<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	import Home from '../components/Home.svelte';
	import Articulo from '../components/Articulo.svelte';
	import data from '../data/data.json';
	let capitulos: RawCapitulo[];
	let article: RawArticuloWithColor | undefined;
	const urlSplited: string[] = $page.params.articuloUrl.split('-');

	capitulos = data.data;
	if (urlSplited[1]) {
		article = findArticle(capitulos, parseInt(urlSplited[1]));
	}

	function findArticle(capitulos: RawCapitulo[], id: number) {
		const articles = getAllArticles(capitulos);
		return articles.find((article) => article.attributes.numero_de_articulo === id);
	}

	function getAllArticles(capitulos: RawCapitulo[]) {
		let articles: RawArticuloWithColor[] = [];

		capitulos.forEach((capitulo) =>
			capitulo.attributes.sub_capitulos.data.forEach((subCapitulo) =>
				subCapitulo.attributes.articulos.data.forEach((artic) =>
					articles.push({
						id: artic.id,
						attributes: { ...artic.attributes, hex_color: subCapitulo.attributes.hex_color }
					})
				)
			)
		);
		return articles;
	}

	function redirectToIndex() {
		if (browser) {
			window?.location?.replace('/');
		}
	}

	let displayArticle: boolean = false;
	onMount(async () => {
		displayArticle = true;
	});
</script>

<svelte:head>
	{#if article !== undefined}
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
		<meta
			property="twitter:card"
			content="La nueva constitución en una tabla periódica para hacerla más didáctica"
		/>
		<meta property="twitter:url" content="https://tabla-constitucional.cl/" />
		<meta property="twitter:title" content="Tabla Periódica Constitucional 🇨🇱" />
		<meta property="twitter:description" content="La nueva constitución en una tabla periódica!" />
		<meta property="twitter:image" content="https://tabla-constitucional.cl/como-funciona.jpg" />
	{/if}
</svelte:head>

{#if article === undefined}
	<h1 class="text-white text-4xl  mt-10 ml-5">No encontramos el artículo que buscas 🫤</h1>

	<div class="flex justify-center mt-10">
		<button class="bg-white text-3xl rounded p-5" on:click={redirectToIndex}
			>⬅️ Volver al inicio</button
		>
	</div>
{:else}
	{#if displayArticle}
		<Articulo articulo={article} openModalByDefault={true} />
	{/if}
	<Home {capitulos} />
{/if}
