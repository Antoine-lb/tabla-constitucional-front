<script>
	import Modal from 'svelte-simple-modal';
	import '../app.css';
</script>

<div>
	<Modal>
		<slot />
	</Modal>
</div>

<footer class="bg-[#ffffff57] p-10 text-lg mt-20">
	<div class="text-white">
		Inspirado del tweet de <a
			class="underline"
			href="https://twitter.com/diegotherium/status/1546310354392711168/photo/2">@diegotherium</a
		>
	</div>
	<p class="text-white">
		Para ver el documento oficial (en PDF): <a
			class="underline"
			href="https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf"
			>www.chileconvencion.cl</a
		>
	</p>
	<p class="text-white">
		Para toda información con respecto a la página contactar <a
			class="underline"
			href="https://twitter.com/XCMLBG">@XCMLBG</a
		>
	</p>
	<p class="text-white">
		Github:
		<a class="underline" href="https://github.com/Antoine-lb/tabla-constitucional-front"
			>tabla-constitucional-front</a
		>
	</p>
	<p class="text-white pt-10">®CallateSchalper 2022</p>
</footer>
