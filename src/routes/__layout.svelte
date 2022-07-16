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
	<p class="text-white text-2xl font-bold">🔗 Links útiles</p>
	<p class="text-white text-">
		Para ver el documento oficial (en PDF): <a
			class="underline"
			href="https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf"
			>www.chileconvencion.cl</a
		>
	</p>
	<p class="text-white ">
		Para una version audio de la constitución (Youtube): <a
			class="underline"
			href="https://www.youtube.com/watch?v=k3IgQ4PK6hU&list=PLDASqw4uM5CE6DDg1_-yTzK-PdWGCT0JQ"
			>Momentum audiolibros</a
		>
	</p>
	<p class="text-white mb-5">
		Qué y cómo se vota (SERVEL): <a
			class="underline"
			href="https://plebiscitoconstitucional.servel.cl/">plebiscitoconstitucional.servel.cl</a
		>
	</p>

	<p class="text-white text-2xl font-bold">🙌 Créditos</p>

	<div class="text-white">
		La página fue inspirada del <a class="underline" href="https://bit.ly/3RGuciW">poster</a>
		diseñado por
		<a class="underline" href="https://twitter.com/diegotherium">Diego (@diegotherium)</a>
	</div>
	<p class="text-white mb-5">
		Este sitio web fue construido por
		<a class="underline" href="https://www.linkedin.com/in/xavier-lb/">Xavier</a>
		y
		<a class="underline" href="https://www.linkedin.com/in/antoine-lb/">Antoine</a>
	</p>

	<p class="text-white text-2xl font-bold">✉️ Contacto</p>
	<p class="text-white mb-5">
		Para toda información con respecto a la página contactar <a
			class="underline"
			href="https://twitter.com/XCMLBG">Xavier (@XCMLB)</a
		>
		o a través de nuestro
		<a class="underline" href="https://www.instagram.com/tabla_constitucional/"
			>Instagram (@tabla_constitucional)</a
		>
	</p>

	<p class="text-white text-2xl font-bold">💻 Otros</p>
	<p class="text-white">
		Github:
		<a class="underline" href="https://github.com/Antoine-lb/tabla-constitucional-front"
			>tabla-constitucional-front</a
		>
	</p>
</footer>
