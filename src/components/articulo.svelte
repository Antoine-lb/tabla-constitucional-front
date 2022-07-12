<script lang="ts">
	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	const { open } = getContext('simple-modal');

	const showSurprise = () => open(Popup, { articulo: articulo });

	export let articulo: RawArticulo;
	export let hex_color: string;
</script>

<!-- <p><button on:click={showSurprise}>Show me a surprise!</button></p> -->

<button class="inline-block" on:click={showSurprise}>
	<div
		class=" flex flex-col rounded-lg p-2 w-[110px] h-[140px] articulo-animacion shadow-3xl m-1 cursor-pointer"
		style={`background-color: #${hex_color}`}
	>
		<div class="flex place-content-between">
			<span>{articulo.attributes.numero_de_articulo}({articulo.attributes.numero_de_incisos})</span>
			<span>p.{articulo.attributes.pagina}</span>
		</div>
		<div class="m-auto text-6xl">{articulo.attributes.simbolo}</div>
		<div class="m-auto text-xs">{articulo.attributes.nombre_corto}</div>
	</div>
</button>
