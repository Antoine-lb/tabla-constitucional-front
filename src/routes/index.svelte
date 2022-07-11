<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	// export const prerender = true;

	function sanitizeCapitulos(rawCapitulos: RawCapitulos[]) {
		const cleanCapitulos: Capitulo[] = rawCapitulos.map((capitulo) => ({
			nombre: capitulo.attributes.Nombre,
			numero_del_capitulo: capitulo.attributes.numero_del_capitulo
		}));
		return cleanCapitulos;
	}

	const BACKEND_URL = 'https://tabla-constitucional.herokuapp.com/api';

	export async function load({ url, fetch }) {
		const res = await fetch(`${BACKEND_URL}/capitulos`);
		let capitulos = [];

		if (res.ok) {
			const response = await res.json();
			capitulos = response.data;
		} else {
			return { status: res.status, error: new Error(`Could not load ${url}`) };
		}
		return { props: { capitulos: sanitizeCapitulos(capitulos) } };
	}
</script>

<script lang="ts">
	export let capitulos: Capitulo[];
	console.log('capitulos', capitulos);
</script>

<h1 class="text-3xl font-extralight  text-[#25f8b9db]">Tabla periódica de la Nueva Constitución</h1>

<img class="max-w-lg m-auto" src="./como-funciona.webp" alt="Como Funciona" />

{#each capitulos as capitulo}
	<h2 class="text-white text-xl">{capitulo.nombre}</h2>
{/each}
