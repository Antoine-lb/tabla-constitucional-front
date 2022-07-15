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

	let meta_title = `Artículo #${article?.attributes.numero_de_articulo} - ${article?.attributes.nombre_corto}(${article?.attributes.pagina})`;
	let meta_description = `${article?.attributes.contenido}`;
	let meta_url = `https://tabla-constitucional.cl/articulo-${article?.attributes.numero_de_articulo}`;
	let met_image = `https://tabla-constitucional.cl/articulo.png`;
</script>

<svelte:head>
	{#if article !== undefined}
		<!-- Primary Meta Tags -->
		<title>{meta_title}</title>
		<meta name="title" content={meta_title} />
		<meta name="description" content={meta_description} />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website" />
		<meta property="og:url" content={meta_url} />
		<meta property="og:title" content={meta_title} />
		<meta property="og:description" content={meta_description} />
		<meta property="og:image" content={met_image} />

		<!-- Twitter -->
		<meta property="twitter:card" content={meta_description} />
		<meta property="twitter:url" content={meta_url} />
		<meta property="twitter:title" content={meta_title} />
		<meta property="twitter:description" content={meta_description} />
		<meta property="twitter:image" content={met_image} />
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
