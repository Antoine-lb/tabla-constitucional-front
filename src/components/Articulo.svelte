<script lang="ts">
	import { onMount } from 'svelte';
	import { readHistory } from '../stores/readHistoryStore';
	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	const { open } = getContext('simple-modal');
	import { browser } from '$app/env';

	export let openModalByDefault: boolean = false; //dont add article and open modal by default
	export let articulo: RawArticulo;
	export let hex_color: string = 'ffffff';

	readHistory.subscribe((value) => {
		if (value.find((val) => val === articulo.id)) {
			if (hex_color.length <= 6) {
				hex_color = `${hex_color}88`;
			}
		}
	});

	const openModal = () => {
		if (!$readHistory.find((val) => val === articulo.id)) {
			$readHistory = [...$readHistory, articulo.id];
		}
		open(
			Popup,
			{ articulo: articulo },
			{ closeButton: false },
			{
				onClose: () => {
					if (browser) {
						history.pushState({}, '', '/');
					}
				}
			}
		);
	};

	// had to add two onMount (in Articulo.svelte and [articleUrl].svlete page) so that the modal could open, not clean, but works
	onMount(async () => {
		if (openModalByDefault) {
			openModal();
		}
	});

	function isNumber(char: string) {
		if (typeof char !== 'string') {
			return false;
		}

		if (char.trim() === '') {
			return false;
		}

		return !isNaN(char);
	}

	let simboloIndice: string | null = null;
	let simbolo: string = articulo.attributes.simbolo;
	if (isNumber(simbolo[simbolo.length - 1])) {
		simboloIndice = articulo.attributes.simbolo[simbolo.length - 1];
		simbolo = simbolo.slice(0, -1);
	}
</script>

{#if !openModalByDefault}
	<button class="inline-block" on:click={openModal}>
		<div
			class=" flex flex-col rounded-lg p-2 w-[110px] h-[140px] articulo-animacion shadow-3xl shadow-custom m-1 cursor-pointer"
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
			<div class="m-auto text-xs nombre_corto">{articulo.attributes.nombre_corto}</div>
		</div>
	</button>
{/if}

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
