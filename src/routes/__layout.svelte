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
	<p class="text-white mb-5">
		Para ver el documento oficial (en PDF): <a
			class="underline"
			href="https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf"
			>www.chileconvencion.cl</a
		>
	</p>
	<div class="text-white mb-5">
		La página fue inspirada del <a class="underline" href="https://bit.ly/3RGuciW">poster</a>
		diseñado por
		<a class="underline" href="https://twitter.com/diegotherium">Diego (@diegotherium)</a>
	</div>
	<p class="text-white mb-5">
		Este sitio web fue construido por
		<a class="underline" href="www.linkedin.com/in/xavier-lb">Xavier</a>
		y
		<a class="underline" href="www.linkedin.com/in/antoine-lb">Antoine</a>
	</p>
	<p class="text-white mb-5">
		Para toda información con respecto a la página contactar <a
			class="underline"
			href="https://twitter.com/XCMLBG">Xavier (@XCMLB)</a
		>
	</p>
	<p class="text-white">
		Github:
		<a class="underline" href="https://github.com/Antoine-lb/tabla-constitucional-front"
			>tabla-constitucional-front</a
		>
	</p>
</footer>
