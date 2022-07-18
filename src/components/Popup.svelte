<!-- Popup.svelte -->
<script lang="ts">
	import { browser } from '$app/env';
	export let articulo: RawArticulo;
	import { getContext } from 'svelte';

	let hasBeenCopied: boolean = false;
	const { close } = getContext('simple-modal');
	const splited_content = articulo.attributes.contenido.split(/[0-9]+.\s/);

	let url: string;
	url = `articulo-${articulo.attributes.numero_de_articulo}`;
	if (browser) {
		history.pushState({}, '', url);
	}
	const fullTitle = `Artículo #${articulo.attributes.numero_de_articulo} - ${articulo.attributes.nombre_corto} 
https://tabla-constitucional.cl/${url}
`;
	const fullTitleUrl = `Artículo %23${articulo.attributes.numero_de_articulo} - ${articulo.attributes.nombre_corto}%0Ahttps://tabla-constitucional.cl/${url}%0A`;

	function copyToClipboard() {
		if (browser) {
			navigator.clipboard.writeText(fullTitle);
			hasBeenCopied = true;
		}
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

<p class="font-bold text-md">Página: {articulo.attributes.pagina}</p>
<a
	class="underline"
	target="blanc"
	href={`https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=${
		articulo.attributes.pagina + 4
	}`}>Abrir página {articulo.attributes.pagina} en el PDF oficial</a
>

<p class="text-lg font-bold mt-10">Comparte el link de este artículo:</p>
<div class="mt-5 ">
	<!-- TWITTER -->
	<div class="inline-block">
		<a
			href={`https://twitter.com/intent/tweet?text=${fullTitleUrl}`}
			target="blanc"
			class="inline-flex text-sm text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
		>
			<svg
				class="mr-2 -ml-1 w-4 h-4"
				aria-hidden="true"
				focusable="false"
				data-prefix="fab"
				data-icon="twitter"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				><path
					fill="currentColor"
					d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
				/></svg
			>
			Twitter: Artículo #{articulo.attributes.numero_de_articulo}
		</a>
	</div>

	<!-- WHATSAPP -->
	<div class="inline-block">
		<a
			href={`https://wa.me/?text=${fullTitleUrl}`}
			target="blanc"
			class="inline-flex text-sm text-white bg-[#59CE72] hover:bg-[#59CE72]/90 focus:ring-4 focus:outline-none focus:ring-[#59CE72]/50 font-medium rounded-lg px-5 py-2.5 text-center items-center dark:focus:ring-[#59CE72]/55 mr-2 mb-2"
		>
			<svg
				class="mr-2 -ml-1 w-4 h-4"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path
					d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
				/>
			</svg>
			Whatsapp: Artículo #{articulo.attributes.numero_de_articulo}
		</a>
	</div>

	<!-- COPIAR -->
	<div class="inline-block">
		<button
			on:click={copyToClipboard}
			type="button"
			class=" inline-flex  text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-0"
		>
			Copiar Artículo #{articulo.attributes.numero_de_articulo}
		</button>
	</div>

	{#if hasBeenCopied}
		<p>Copiado! difunde para combatir las fake news 📢</p>
	{/if}
</div>
