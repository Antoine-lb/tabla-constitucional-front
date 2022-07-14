<script lang="ts">
	import { readHistory } from '../stores/readHistoryStore';

	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	const { open } = getContext('simple-modal');

	export let articulo: RawArticulo;
	export let hex_color: string;

	readHistory.subscribe((value) => {
		if (value.find((val) => val === articulo.id)) {
			if (hex_color.length <= 6) {
				hex_color = `${hex_color}88`;
			}
		}
	});

	const showSurprise = () => {
		if (!$readHistory.find((val) => val === articulo.id)) {
			$readHistory = [...$readHistory, articulo.id];
		}
		open(Popup, { articulo: articulo });
	};
</script>

<!-- style={`background-color: #${hex_color}; box-shadow: 10px 5px 5px #${hex_color};`} -->

<button class="inline-block" on:click={showSurprise}>
	<div
		class=" flex flex-col rounded-lg p-2 w-[110px] h-[140px] articulo-animacion shadow-3xl shadow-custom m-1 cursor-pointer"
		style={`background-color: #${hex_color}ef; border: 1px solid #${hex_color};`}
	>
		<div class="flex place-content-between">
			<span
				>{articulo.attributes.numero_de_articulo}
				<span class="text-xs">({articulo.attributes.numero_de_incisos})</span></span
			>
			<span>p.{articulo.attributes.pagina}</span>
		</div>
		<div class="m-auto text-5xl">{articulo.attributes.simbolo}</div>
		<div class="m-auto text-xs nombre_corto">{articulo.attributes.nombre_corto}</div>
	</div>
</button>

<style>
	.nombre_corto {
		display: -webkit-box;
		max-width: 200px;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.shadow-custom {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
</style>
