<!-- Popup.svelte -->
<script lang="ts">
	import { browser } from '$app/env';
	export let articulo: RawArticulo;
	import { getContext } from 'svelte';

	const { close } = getContext('simple-modal');

	const splited_content = articulo.attributes.contenido.split(/[0-9].\s/);

	if (browser) {
		const url = `articulo-${articulo.attributes.numero_de_articulo}`;
		// history.pushState({}, '', url);
	}
</script>

<button
	class="w-10 absolute right-5"
	on:click={() => {
		close();
	}}
	><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
		<path
			d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"
		/></svg
	></button
>

<h1 class="text-2xl font-bold mt-3">
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

<p class="font-bold text-md mt-10">Página: {articulo.attributes.pagina}</p>
