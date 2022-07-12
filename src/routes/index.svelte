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

	export let capitulos: RawCapitulo[];
</script>

<h1 class="text-3xl font-extralight  text-[#25f8b9db]">Tabla periódica de la Nueva Constitución</h1>

<img class="max-w-lg w-full m-auto" src="./como-funciona.webp" alt="Como Funciona" />

{#each capitulos as capitulo}
	<h2 class="text-white text-3xl">{capitulo.attributes.Nombre}</h2>
	{#each capitulo.attributes.sub_capitulos.data as subCapitulo}
		<h2 class="text-white text-xl pl-3">{subCapitulo.attributes.Nombre}</h2>
		<!-- {#each subCapitulo.attributes.articulos.data as articulo}
			<Articulo {articulo} hex_color={subCapitulo.attributes.hex_color} />
		{/each} -->
	{/each}
{/each}
