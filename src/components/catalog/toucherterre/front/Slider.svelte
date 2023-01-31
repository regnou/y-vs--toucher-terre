<script lang="js">
	import Splide from '@splidejs/splide';
	import { onMount } from 'svelte';

	export let id;

	onMount(() => {
		// content here
		new Splide(id).mount();
	});

	export let imgs = [
		'/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg',
		'/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg'
	];
</script>

<section class="splide" aria-label="Splide Basic HTML Example">
	<div class="splide__track">
		<ul class="splide__list">
			<!-- <li class="splide__slide">
				<img src="/media/logo-01.png" alt="" />
			</li> -->
			{#each imgs as url}
				<li class="splide__slide">
					<img src={url} alt="" />
				</li>
			{/each}
		</ul>
	</div>
</section>
