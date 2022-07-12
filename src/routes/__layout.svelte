<script>
	import Modal from 'svelte-simple-modal';
	import '../app.css';
</script>

<div class="p-6">
	<Modal>
		<slot />
	</Modal>
</div>

<footer class="bg-[#ffffff57] p-10 text-lg">
	<div class="text-white">
		Inspirado del tweet de <a
			class="underline"
			href="https://twitter.com/diegotherium/status/1546310354392711168/photo/2">@diegotherium</a
		>
	</div>
	<p class="text-white">
		Para toda información con respecto a la página contactar <a
			class="underline"
			href="https://twitter.com/XCMLBG">@XCMLBG</a
		>
	</p>
	<p class="text-white">
		El código es OpenSource, siéntase libres de participar:
		<a class="underline" href="https://github.com/Antoine-lb/tabla-constitucional-back"
			>Backend (Strapi)</a
		>
		y
		<a class="underline" href="https://github.com/Antoine-lb/tabla-constitucional-front"
			>Front-end (SvelteKit)</a
		>
	</p>
	<p class="text-white pt-10">®CallateSchalper 2022</p>
</footer>
