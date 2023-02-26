<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: BLOG APP -->
<!-- ####################################### -->
{#await promise}
	<!-- <Loader /> -->
{:then data}
	<!-- .................. -->
	<!-- MAX WIDTH for APP -->
	<!-- .................. -->
	<main
		class="m-auto px-10 pb-20 max-w-{AX_CONST__FRAME_maxBodyApp} {AX_CONST__FRAME_distanceFromHeader}"
	>
		<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
		{#if _DAB_ && _DAB_.length}
			<!-- {#if isEntityPost(store)} -->
			{#each IMU_sort(_DAB_) as post}
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
	import { page } from '$app/stores';
	import { AX_CONST__SCHEMA_COLLECTIONS_blog } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import {
		AX_CONST__FRAME_distanceFromHeader,
		AX_CONST__FRAME_maxBodyApp
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { config__gets } from 'app/domain/services/configService';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	import Post from '../widgets/Post.svelte';
	const IMU_sort = (_DAB_) => {
		const arrSorted = _DAB_.sort((a, b) => {
			return a.createdAt >= b.createdAt ? -1 : 1;
		});

		console.log('arrSorted', arrSorted);
		return arrSorted;
	};
	// --------------------------------------------------------
	export let _DAB_: I_ENTITY__post[] | undefined = undefined;
	let promise = config__gets<I_ENTITY__post>(AX_CONST__SCHEMA_COLLECTIONS_blog);
	// --------------------------------------------------------
	onMount(async () => {
		axlog(_DAB_, $page.url.pathname, 'BLOG (cms)');

		console.debug('...');
		_DAB_ = await promise;
	});
</script>
