<script lang="ts">
	export let capitulos: RawCapitulo[];
</script>

<h2 class="text-2xl md:text-3xl pl-3 md:pl-6 text-white font-bold mt-6 inline-block">Index</h2>
<span class="text-white text-sm italic">(link clickables)</span>
<br />
{#each capitulos as capitulo}
	<div class="mb-4">
		<a
			class="text-lg md:text-lg pl-3 md:pl-6 text-white  mt-2"
			href={`#${capitulo.attributes.Nombre}-capitulo`}
		>
			{capitulo.attributes.Nombre}
		</a>
		{#each capitulo.attributes.sub_capitulos.data as subCapitulo}
			<a
				class="pl-3 md:pl-6 flex items-center mt-1"
				href={`#${subCapitulo.attributes.Nombre}-subcapitulo`}
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
