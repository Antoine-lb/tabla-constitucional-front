<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	// export const prerender = true;

	function sanitizeCapitulos(rawCapitulos: RawCapitulo[]) {
		const cleanCapitulos: Capitulo[] = rawCapitulos.map((capitulo) => ({
			nombre: capitulo.attributes.Nombre,
			numero_del_capitulo: capitulo.attributes.numero_del_capitulo
		}));
		return cleanCapitulos;
	}
	function sanitizeSubCapitulos(rawSubCapitulos: RawSubCapitulo[]) {
		const cleanSubCapitulos: SubCapitulo[] = rawSubCapitulos.map((capitulo) => ({
			nombre: capitulo.attributes.Nombre,
			prioridad: capitulo.attributes.Prioridad,
			hex_color: capitulo.attributes.hex_color
		}));
		return cleanSubCapitulos;
	}
	function sanitizeArticulos(rawArticulos: RawArticulo[]) {
		const cleanArticulos: Articulo[] = rawArticulos.map((capitulo) => ({
			contenido: capitulo.attributes.contenido,
			nombre_corto: capitulo.attributes.nombre_corto,
			numero_de_articulo: capitulo.attributes.numero_de_articulo,
			numero_de_incisos: capitulo.attributes.numero_de_incisos,
			pagina: capitulo.attributes.pagina,
			simbolo: capitulo.attributes.simbolo
		}));
		return cleanArticulos;
	}

	const BACKEND_URL = 'https://tabla-constitucional.herokuapp.com/api';

	export async function load({ url, fetch }) {
		const res = await fetch(`${BACKEND_URL}/capitulos?populate[0]=sub_capitulos`);
		let capitulos = [];

		if (res.ok) {
			const response = await res.json();
			capitulos = response.data;
			console.log('capitulos asd', capitulos);
		} else {
			return { status: res.status, error: new Error(`Could not load ${url}`) };
		}

		const res2 = await fetch(`${BACKEND_URL}/sub-capitulos`);
		let subCapitulos = [];
		if (res2.ok) {
			const response = await res2.json();
			subCapitulos = response.data;
		} else {
			return { status: res2.status, error: new Error(`Could not load ${url}`) };
		}

		const res3 = await fetch(`${BACKEND_URL}/articulos`);
		let articulos = [];
		if (res3.ok) {
			const response = await res3.json();
			articulos = response.data;
		} else {
			return { status: res3.status, error: new Error(`Could not load ${url}`) };
		}

		return {
			props: {
				capitulos: sanitizeCapitulos(capitulos),
				subCapitulos: sanitizeSubCapitulos(subCapitulos),
				articulos: sanitizeArticulos(articulos)
			}
		};
	}
</script>

<script lang="ts">
	export let capitulos: Capitulo[];
	export let subCapitulos: SubCapitulo[];
	export let articulos: Articulo[];
</script>

<h1 class="text-3xl font-extralight  text-[#25f8b9db]">Tabla periódica de la Nueva Constitución</h1>

<img class="max-w-lg m-auto" src="./como-funciona.webp" alt="Como Funciona" />

{#each capitulos as capitulo}
	<h2 class="text-white text-xl">{capitulo.nombre}</h2>
{/each}
{#each subCapitulos as subCapitulo}
	<h2 class="text-white text-md">{subCapitulo.nombre}</h2>
{/each}
{#each articulos as articulo}
	<div
		class="bg-[#DA82B4] flex flex-col rounded-md p-2 max-w-[100px] articulo-animacion shadow m-3 cursor-pointer"
	>
		<div class="flex place-content-between">
			<span>{articulo.numero_de_articulo}({articulo.numero_de_incisos})</span>
			<span>p.{articulo.pagina}</span>
		</div>
		<div class="m-auto text-6xl">{articulo.simbolo}</div>
		<div class="m-auto text-xs">{articulo.nombre_corto}</div>
	</div>
{/each}
