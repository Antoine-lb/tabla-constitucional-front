<script lang="ts">
	import { page } from '$app/stores';

	import Articulo from '../../components/ArticuloInstagram.svelte';
	import data from '../../data/data.json';
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
</script>

{#if article !== undefined}
	<Articulo articulo={article} hex_color={article.attributes.hex_color} />

	<div class="flex place-content-between">
		<a
			class="bg-white p-6 rounded-md text-xl font-bold text-purple-900 m-10"
			target="_self"
			href={`/i/articulo-${article.attributes.numero_de_articulo - 1}`}
		>
			Anterior</a
		>
		<a
			class="bg-white p-6 rounded-md text-xl font-bold text-purple-900 m-10"
			target="_self"
			href={`/i/articulo-${article.attributes.numero_de_articulo + 1}`}>Siguiente</a
		>
	</div>
{/if}
