<script lang="ts">
	import Post from '../widgets/Post.svelte';
	// import Slider from '../Slider.svelte--no';
	// ----------------------------------------------------------
	// DUMB (no operation to test, just display)
	// ----------------------------------------------------------
	export let store: I_ENTITY__post[] | undefined = undefined;
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: BLOG APP -->
<!-- ####################################### -->
<main id="wc-app--site-blog--1">
	{#if store && store.length}
		<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
		<!-- {#if isEntityPost(store)} -->
		{#each store as post}
			<Post {post} />
			<!-- {:else} -->
			<!-- SLIDESHOW - todo AFTER -->
			<!-- <div class="col-span-4 grid grid-rows-3 place-items-center">
					<Slider imgs={[store[i].iv]} /> </div> -->
		{/each}
		<!-- {/if} -->
	{/if}
</main>
