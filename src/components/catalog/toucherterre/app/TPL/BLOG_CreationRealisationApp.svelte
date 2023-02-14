<script lang="ts">
	import { STORE__BLOG } from '@app/stores/store';
	import { AX__COLLECTION__BLOG } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { onMount } from 'svelte';
	import { isEntityPost } from '@app/utils/guards';
	import Loader from '../widgets/Loader.svelte';
	import Post from '../widgets/Post.svelte';
	import { axlog } from '@app/utils/axLog';
	import { page } from '$app/stores';
	// import Slider from '../Slider.svelte--no';
	// ----------------------------------------------------------
	// .............................................
	let promise = config__get<I_ENTITY__post>(AX__COLLECTION__BLOG);
	// ----------------------------------------------------------
	onMount(async () => {
		$STORE__BLOG = await promise; // les types MATCH donc le bding devrait etre bon
		axlog($STORE__BLOG, $page.url.pathname, 'BLOG');
	});
</script>

<!-- 🟩 -->
{#await promise}
	<Loader />
{:then data}
	<main id="page-blog-1">
		{#if $STORE__BLOG && $STORE__BLOG.length}
			{#if isEntityPost($STORE__BLOG)}
				{#each $STORE__BLOG as post}
					<Post {post} />
					<!-- {:else} -->
					<!-- SLIDESHOW - todo AFTER -->
					<!-- <div class="col-span-4 grid grid-rows-3 place-items-center">
					<Slider imgs={[$STORE[i].iv]} /> </div> -->
				{/each}
			{/if}
		{/if}
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
