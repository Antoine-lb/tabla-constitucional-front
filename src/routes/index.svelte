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
	import Articulo from '../components/ArticuloComponent.svelte';
	export let capitulos: RawCapitulo[];
</script>

<h1 class="text-4xl md:text-6xl pl-3 md:pl-6 font-extralight text-[#25f8b9db] my-5">
	Tabla periódica de la Nueva Constitución
</h1>

<p class="pl-3 md:pl-6 text-white text-lg">
	En esta página se encuentran todos los articulos de la <a
		href="https://www.chileconvencion.cl/"
		class="underline">nueva constitución</a
	> separado por capítulos y subcapítulos.
</p>

<img class="max-w-xl w-full mt-10 m-auto" src="./como-funciona.webp" alt="Como Funciona" />

{#each capitulos as capitulo}
	<h2 class="text-2xl md:text-3xl pl-3 md:pl-6 text-white font-bold mt-6">
		{capitulo.attributes.Nombre}
	</h2>
	{#each capitulo.attributes.sub_capitulos.data as subCapitulo}
		<div class="pl-3 md:pl-6 flex items-center mt-4 mb-2">
			<span
				class="w-7 h-7 inline-block flex-none shadow-3xl rounded-full"
				style={`background-color: #${subCapitulo.attributes.hex_color}`}
			/>
			<h3 class="text-xl md:text-2xl text-white pl-3">
				{subCapitulo.attributes.Nombre}
			</h3>
		</div>
		<div class="pl-3 md:pl-6 mb-6 md:mb-10">
			{#each subCapitulo.attributes.articulos.data as articulo}
				<Articulo {articulo} hex_color={subCapitulo.attributes.hex_color} />
			{/each}
		</div>
	{/each}
{/each}
