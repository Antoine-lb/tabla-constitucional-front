<!-- Popup.svelte -->
<script lang="ts">
	export let articulo: RawArticulo;

	const splited_content = articulo.attributes.contenido.split(/[0-9]+.\s/);
	if (articulo.attributes.numero_de_articulo === 253) {
		// articulo.attributes.numero_de_articulo = '1 (Artículo 1)';
		console.log('splited_content', splited_content);
	}
</script>

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
