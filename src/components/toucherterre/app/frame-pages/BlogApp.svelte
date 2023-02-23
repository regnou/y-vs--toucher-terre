<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: BLOG APP -->
<!-- ####################################### -->
{#await promise}
	<Loader />
{:then data}
	<!-- .................. -->
	<!-- MAX WIDTH for APP -->
	<!-- .................. -->
	<main
		id="wc-app--site-blog--1"
		class="m-auto px-10 max-w-{AX_CONST__FRAME_maxBodyApp} {AX_CONST__FRAME_distanceFromHeader}"
	>
		<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
		{#if dataArrDumb && dataArrDumb.length}
			<!-- {#if isEntityPost(store)} -->
			{#each dataArrDumb as post}
				<Post {post} />
				<!-- {:else} -->
				<!-- SLIDESHOW - todo AFTER -->
				<!-- <div class="col-span-4 grid grid-rows-3 place-items-center">
					<Slider imgs={[store[i].iv]} /> </div> -->
			{/each}
			<!-- {/if} -->
			<!-- {:else}
			{openSnack('error', `❌ [ page-data ] UNDEFINED or NO-DATA ❌`)} -->
		{/if}
	</main>
{:catch error}
	<p style="">{error.message}</p>
{/await}

<script lang="ts">
	import { config__get } from '@app/domain/services/configService';
	import { onMount } from 'svelte';
	import Loader from '../widgets/Loader.svelte';
	import Post from '../widgets/Post.svelte';
	import { AX_COLLECTION__blog } from '@app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import {
		AX_CONST__FRAME_distanceFromHeader,
		AX_CONST__FRAME_maxBodyApp
	} from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	// --------------------------------------------------------
	export let dataArrDumb: I_ENTITY__post[] | undefined = undefined;
	let promise = config__get<I_ENTITY__post>(AX_COLLECTION__blog);
	// --------------------------------------------------------
	onMount(async () => {
		console.debug('...');
		dataArrDumb = await promise;
	});
</script>
