<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	// --------------------------------------------------------
	// Default theme
	import '@splidejs/svelte-splide/css';
	// or other themes
	// import '@splidejs/svelte-splide/css/skyblue';
	// import '@splidejs/svelte-splide/css/sea-green';
	// or only core styles
	// import '@splidejs/svelte-splide/css/core';
	// --------------------------------------------------------
	export let items = [];
	// c la structure
	// inputValues: [
	// 				{
	// 					id: 'img-3',
	// 					index: 1,
	// 					type: 'file',
	// 					label: 'img-3',
	// 					inputValue: ''
	// 				},
	// 				{
	// 					id: 'seo-img-3',
	// 					index: 2,
	// 					type: 'text',
	// 					label: 'seo-img-3',
	// 					inputValue: ''
	// 				}
	// 			]
</script>

<Splide aria-label="My Favorite Images">
	{#each items as ivItem}
		<!-- "https://www.youtube.com/embed/dLmiog2KqpA" -->
		<SplideSlide class="h-60">
			{#if ivItem.format && ivItem.format === 'video'}
				<iframe
					width="560"
					height="315"
					src={ivItem.inputValues[1].inputValue}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			{:else}
				<img src={ivItem.inputValues[1].inputValue} alt={ivItem.inputValues[0].inputValue} />
			{/if}
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
