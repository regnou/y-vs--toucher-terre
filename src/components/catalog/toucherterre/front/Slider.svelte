<script lang="js">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { onMount } from 'svelte';

	export let id = '.splide';

	onMount(() => {
		// new Splide(id).mount();
	});

	export let imgs = [
		'/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg',
		'/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg'
	];
</script>

<Splide aria-label="My Favorite Images">
	{#each imgs as url}
		<SplideSlide>
			<img src={url} alt="" />
		</SplideSlide>
	{/each}
</Splide>

<!-- <section class="splide" aria-label="Splide Basic HTML Example">
	<div class="splide__track">
		<ul class="splide__list"> -->
<!-- <li class="splide__slide">
				<img src="/media/logo-01.png" alt="" />
			</li> -->
<!-- {#each imgs as url}
				<li class="splide__slide">
					<img src={url} alt="" />
				</li>
			{/each}
		</ul>
	</div>
</section> -->
