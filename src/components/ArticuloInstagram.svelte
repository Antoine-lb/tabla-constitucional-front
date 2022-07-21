<script lang="ts">
	import { readHistory } from '../stores/readHistoryStore';
	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	import Contenido from './Contenido.svelte';
	const { open } = getContext('simple-modal');
	import { browser } from '$app/env';

	export let articulo: RawArticulo;
	export let hex_color: string = 'ffffff';

	let simboloIndice: string | null = null;
	let simbolo: string = articulo.attributes.simbolo;

	let contenido = articulo.attributes.contenido.replace(/(\n)/gm, ' ');
	const splited_content = contenido.split(/([0-9]+.\s)/);
	contenido = '';
	splited_content.forEach((val, index) => {
		if (index % 2) {
			contenido += val;
		} else {
			contenido += val + '\n';
		}
	});

	let verMasEnLaPagina = '';

	if (articulo.attributes.contenido.length > 1800) {
		contenido = contenido.substring(0, 1800);
		contenido += '...';
		verMasEnLaPagina = `Se nos acabo el espacio en insta, pueden ver el resto en la pagina:
tabla-constitucional.cl/articulo-${articulo.attributes.numero_de_articulo}
		`;
	}

	let instaValue = `#Artículo${articulo.attributes.numero_de_articulo}
tabla-constitucional.cl/articulo-${articulo.attributes.numero_de_articulo}

${articulo.attributes.nombre_corto} (p.${articulo.attributes.pagina})
${contenido}

${verMasEnLaPagina}
#NC #TablaConstitucional #SinArticuloNoHayDebate
`;

	// let showCopyButton = false;
	// onMount(async () => {
	// 	showCopyButton = true;
	// });
</script>

<h1 class="bg-white p-10 m-10 font-bold text-2xl">
	Artículo #{articulo.attributes.numero_de_articulo} - {articulo.attributes.nombre_corto}
</h1>

<div class="bg-white p-10 m-10">
	<!-- {instaValue} -->
	<Contenido {articulo} />
	<p class="font-bold text-md">Página: {articulo.attributes.pagina}</p>
	<a
		class="underline"
		target="blanc"
		href={`https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page=${
			articulo.attributes.pagina + 4
		}`}>Abrir página {articulo.attributes.pagina} en el PDF oficial</a
	>
	<br />
	<br />
	<a
		class="underline"
		target="blanc"
		href={`https://tabla-constitucional.cl/articulo-${articulo.attributes.pagina}`}
		>tabla-constitucional.cl/articulo-{articulo.attributes.pagina}</a
	>
	<a
		class="underline block"
		target="blanc"
		href={`https://twitter.com/search?q=%23SinArticuloNoHayDebate&src=saved_search_click`}
		>#SinArticuloNoHayDebate</a
	>
</div>

<div class="bg-white p-10 m-10">
	<div class="p-2 w-[80px] h-[80px] rounded-2xl " style={`background-color: #${hex_color};`} />
	<p class="mt-3 font-bold">#{hex_color}</p>
</div>

<div class="bg-white p-10 m-10">
	<div>
		<input type="checkbox" id="scales" name="scales" />
		<label for="scales">Add correct flair</label>
	</div>

	<div>
		<input type="checkbox" id="horns" name="horns" />
		<label for="horns">Add link in Strapi</label>
	</div>
</div>

<!-- {#if showCopyButton}
	<button
		class="p-5 bg-sky-300 hover:bg-sky-700 rounded-full m-5 font-bold"
		on:click={() => navigator.clipboard.writeText(instaValue)}>Copiar</button
	>
{/if} -->

<!-- <div class="border-solid border-2 border-purple-900 inline-block ">
	<button class="inline-block m-44" on:click={openModal}>
		<div
			class=" flex flex-col rounded-lg p-2 w-[140px] h-[140px] articulo-animacion shadow-3xl shadow-custom m-1 cursor-pointer"
			style={`background-color: #${hex_color};`}
		>
			<div class="flex place-content-between">
				<span>
					{articulo.attributes.numero_de_articulo}<span class="text-xs"
						>({articulo.attributes.numero_de_incisos})
					</span>
				</span>
				<span>p.{articulo.attributes.pagina}</span>
			</div>
			<div class="m-auto flex">
				<div class="text-5xl">{simbolo}</div>
				{#if simboloIndice}
					<div class="text-lg">{simboloIndice}</div>
				{/if}
			</div>
			<div class="m-auto leading-4 text-sm nombre_corto">{articulo.attributes.nombre_corto}</div>
		</div>
	</button>
</div> -->
