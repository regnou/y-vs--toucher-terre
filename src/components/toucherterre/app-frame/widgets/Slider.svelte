<Splide aria-label="My Favorite Images">
	<!-- {#each items as itm} -->
	<!-- "https://www.youtube.com/embed/dLmiog2KqpA" -->
	<!-- tip: must put size or it will be original size -->
	<SplideSlide class="h-56">
		<!-- {#if itm.format && itm.format === 'video'} -->
		<!-- width="560"
		height="315" -->
		<div>
			<iframe
				width="450"
				height="260"
				src="https://www.youtube.com/embed/NUC2EQvdzmY?start=24&autoplay=1"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
		</div>
		<!-- <img
				class="m-auto h-56 object-cover"
				src={AX_CONST__FRAME__frameDir + 'logo-01.png'}
				alt=""
			/> -->
		<!-- {:else}
				<img
					src={ivItem.inputValues[1].iv}
					alt={ivItem.inputValues[0].iv}
				/> -->
		<!-- {/if} -->
	</SplideSlide>
	<!-- {/each} -->
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
<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { post_s1 } from 'app/0-config/db/datasets/AX_CONST__SLIDESHOW_LOCA';
	import { AX_CONST__FRAME__contentDir, AX_CONST__FRAME__frameDir } from 'app/0-config/frame/AX_CONST__FRAME';
	// --------------------------------------------------------
	// --------------------------------------------------------
	export let items = post_s1;
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
