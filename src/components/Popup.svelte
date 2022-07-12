<!-- Popup.svelte -->
<script lang="ts">
	// import SvelteMarkdown from 'svelte-markdown';
	export let articulo: RawArticulo;
</script>

<h1 class="text-2xl font-bold">
	Artículo #{articulo.attributes.numero_de_articulo} - {articulo.attributes.nombre_corto}
</h1>

<!-- <ul>
	<SvelteMarkdown source{articulo.attributes} />
</ul> -->

<p>{articulo.attributes.contenido}</p>
