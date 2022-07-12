<!-- Popup.svelte -->
<script lang="ts">
	export let articulo: RawArticulo;
	const splited_content = articulo.attributes.contenido.split(/[0-9].\s/);
</script>

<h1 class="text-2xl font-bold">
	Artículo #{articulo.attributes.numero_de_articulo}
</h1>
<h2 class="text-xl font-bold">
	{articulo.attributes.nombre_corto}
</h2>

<ul>
	{#each splited_content as inciso, index}
		{#if index !== 0}
			<li class="mb-3"><b>{index}.</b> {inciso}</li>
		{/if}
		{#if splited_content.length === 1}
			<li>{inciso}</li>
		{/if}
	{/each}
</ul>
