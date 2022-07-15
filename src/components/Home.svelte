<script lang="ts">
	import Articulo from './Articulo.svelte';
	import Indice from './Indice.svelte';
	export let capitulos: RawCapitulo[];
	import { browser } from '$app/env';

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

	if (browser) {
		if (window?.location?.href.includes('netlify.app')) {
			window?.location?.replace('https://tabla-constitucional.cl/');
			console.log('window.location.href', window?.location?.href);
		}
	}
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

<br />

<img class="max-w-xl w-full mt-10 m-auto" src="./como-funciona.webp" alt="Como Funciona" />

<Indice {capitulos} />

{#each capitulos as capitulo}
	<h2
		class="text-2xl md:text-3xl pl-3 md:pl-6 text-white font-bold mt-6"
		id={`${capitulo.attributes.Nombre}-capitulo`}
	>
		{capitulo.attributes.Nombre}
	</h2>
	{#each capitulo.attributes.sub_capitulos.data as subCapitulo}
		<div
			class="pl-3 md:pl-6 flex items-center mt-4 mb-2"
			id={`${subCapitulo.attributes.Nombre}-subcapitulo`}
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
