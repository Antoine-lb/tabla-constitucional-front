<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	// export const prerender = true;

	const BACKEND_URL = 'https://tabla-constitucional.herokuapp.com/api';

	export async function load({ url, fetch }) {
		const res = await fetch(
			`${BACKEND_URL}/capitulos?populate[sub_capitulos][populate][0]=articulos`
		);
		let capitulos = [];

		if (res.ok) {
			const response = await res.json();
			capitulos = response.data;
		} else {
			return { status: res.status, error: new Error(`Could not load ${url}`) };
		}

		return {
			props: {
				capitulos
			}
		};
	}
</script>

<script lang="ts">
	// import Articulo from '../components/Articulo.svelte';
	import { getContext } from 'svelte';
	import Popup from '../components/Popup.svelte';
	const { open } = getContext('simple-modal');

	const showSurprise = (articulo: RawArticulo) => open(Popup, { articulo: articulo });

	export let capitulos: RawCapitulo[];
</script>

<h1 class="text-3xl font-extralight  text-[#25f8b9db]">Tabla periódica de la Nueva Constitución</h1>

<img class="max-w-lg w-full m-auto" src="./como-funciona.webp" alt="Como Funciona" />

{#each capitulos as capitulo}
	<h2 class="text-white text-3xl">{capitulo.attributes.Nombre}</h2>
	{#each capitulo.attributes.sub_capitulos.data as subCapitulo}
		<h2 class="text-white text-xl pl-3">{subCapitulo.attributes.Nombre}</h2>
		{#each subCapitulo.attributes.articulos.data as articulo}
			<button class="inline-block" on:click={() => showSurprise(articulo)}>
				<div
					class=" flex flex-col rounded-md p-2 w-[110px] h-[140px] articulo-animacion shadow-3xl m-2 cursor-pointer"
					style={`background-color: #${subCapitulo.attributes.hex_color}`}
				>
					<div class="flex place-content-between">
						<span
							>{articulo.attributes.numero_de_articulo}({articulo.attributes
								.numero_de_incisos})</span
						>
						<span>p.{articulo.attributes.pagina}</span>
					</div>
					<div class="m-auto text-6xl">{articulo.attributes.simbolo}</div>
					<div class="m-auto text-xs">{articulo.attributes.nombre_corto}</div>
				</div>
			</button>
		{/each}
	{/each}
{/each}
