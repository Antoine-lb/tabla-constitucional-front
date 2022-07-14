<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	// export const prerender = true;

	// const BACKEND_URL = 'https://tabla-constitucional.herokuapp.com/api';

	export async function load({ url, fetch }) {
		// const res = await fetch(
		// 	`${BACKEND_URL}/capitulos?populate[sub_capitulos][populate][0]=articulos`
		// );
		const res = await fetch(`./data.json`);
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

	function sortedArticulos(articulos: RawArticulo[]) {
		return articulos.sort((a, b) => {
			if (a.attributes.numero_de_articulo < b.attributes.numero_de_articulo) {
				return -1;
			}
			if (a.attributes.numero_de_articulo > b.attributes.numero_de_articulo) {
				return 1;
			}
			return 0;
		});
	}

	// if (window?.location?.href) {
	// 	console.log('window.location.href', window?.location?.href);
	// } else {
	// 	console.log('dio falso para: window?.location?.href', window?.location?.href);
	// }
</script>

<h1 class="text-4xl md:text-6xl pl-3 md:pl-6 font-extralight text-[#25f8b9db] my-5">
	Tabla periódica de la Nueva Constitución Chilena 🇨🇱
</h1>

<p class="pl-3 md:pl-6 text-white text-lg">
	En esta página se encuentran todos los artículos de la <a
		href="https://www.chileconvencion.cl/"
		class="underline">nueva constitución</a
	> separados por capítulos y subcapítulos. Está animado como una tabla periódica y separada en colores
	para hacerla mas entretenida.
</p>

<h1 class="text-3xl md:text-4xl pl-3 md:pl-6 font-extralight text-[#25f8b9db] my-5">
	#SinArticuloNoHayDebate
</h1>
<p class="pl-3 md:pl-6 text-white text-lg">
	Exijamos un debate constructivo, criticar la constitución sin citar artículos no sirve de gran
	cosa.
</p>
<p class="pl-3 md:pl-6 text-white text-lg">
	<strong>#SinArticuloNoHayDebate</strong>, no se caliente la cabeza.
</p>
<!-- <h1 class="text-3xl md:text-4xl pl-3 md:pl-6 font-extralight text-[#25f8b9db] my-5">
	Cómo funciona
</h1>
<p class="pl-3 md:pl-6 text-white text-lg">Cada artículo es un elemento en la tabla periodica.</p> -->
<br />

<img class="max-w-xl w-full mt-10 m-auto" src="./como-funciona.webp" alt="Como Funciona" />

<h2 class="text-2xl md:text-3xl pl-3 md:pl-6 text-white font-bold mt-6 inline-block">Index</h2>
<span class="text-white text-sm italic">(link clickables)</span>
<br />
{#each capitulos as capitulo}
	<div class="mb-4 inline-block align-top md:w-[350px]">
		<a
			class="text-lg md:text-lg pl-3 md:pl-6 text-white  mt-2"
			href={`#cat${capitulo.attributes.Nombre}`}
		>
			{capitulo.attributes.Nombre}
		</a>
		{#each capitulo.attributes.sub_capitulos.data as subCapitulo}
			<a
				class="pl-3 md:pl-6 flex items-center mt-1"
				href={`#subcat${subCapitulo.attributes.Nombre}`}
			>
				<span
					class="w-4 h-4 inline-block flex-none shadow-3xl rounded-full"
					style={`background-color: #${subCapitulo.attributes.hex_color}`}
				/>
				<h3 class="text-md md:text-md text-white pl-3">
					{subCapitulo.attributes.Nombre}
				</h3>
			</a>
		{/each}
	</div>
{/each}

{#each capitulos as capitulo}
	<h2
		class="text-2xl md:text-3xl pl-3 md:pl-6 text-white font-bold mt-6"
		id={`cat${capitulo.attributes.Nombre}`}
	>
		{capitulo.attributes.Nombre}
	</h2>
	{#each capitulo.attributes.sub_capitulos.data as subCapitulo}
		<div
			class="pl-3 md:pl-6 flex items-center mt-4 mb-2"
			id={`subcat${subCapitulo.attributes.Nombre}`}
		>
			<span
				class="w-7 h-7 inline-block flex-none shadow-3xl rounded-full"
				style={`background-color: #${subCapitulo.attributes.hex_color}`}
			/>
			<h3 class="text-xl md:text-2xl text-white pl-3">
				{subCapitulo.attributes.Nombre}
			</h3>
		</div>
		<div class="pl-3 md:pl-6 mb-6 md:mb-10">
			{#each sortedArticulos(subCapitulo.attributes.articulos.data) as articulo}
				<Articulo {articulo} hex_color={subCapitulo.attributes.hex_color} />
			{/each}
		</div>
	{/each}
{/each}
