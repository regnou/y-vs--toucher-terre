<!-- +################################### -->
<!-- comp-site: BLOG APP -->
<!-- ####################################### -->
<!-- .................. -->
<!-- MAX WIDTH for APP -->
<!-- .................. -->
<!-- {#await promise}
	<p>...waiting</p>
{:then data} -->
<main class="m-auto max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}">
	<!-- <main class="m-auto px-10 pb-20 max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}"> -->
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	{#if $AX_STORE__CONTENT.length && isEntityPosts($AX_STORE__CONTENT)}
		<!-- {#if isEntityPost(store)} -->
		<!-- {#each IMU_sort($AX_STORE__CONTENT) as post} -->
		{#each $AX_STORE__CONTENT as post}
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
<!-- {:catch error}
	<p style="color: red">{error.message}</p>
{/await} -->

<!-- // TODO - do it elsewhere ?
// const IMU_sort = (mutable__arr: I_ENTITY__post[]) => {
// 	mutable__arr.sort((a, b) => {
// 		return a.createdAt >= b.createdAt ? -1 : 1;
// 	});
// 	// console.debug('react-ui >> IMU_sort says: arrSorted', mutable__arr);
// 	return mutable__arr;
// }; -->

<!-- // 🔥🔥🔥 DYN
// const $AX_STORE__CONTENT__DB: I_DB_CONFIG<I_ENTITY__post, I_DTO__post> = {
// 	conf__db: AX_CONST__TEC_FIREBASE_DB__blog,
// 	conf__db_dataset: AX_CONST__DB_DATASET_JSON__blog,
// 	conf__genericAdd: AX_CONST__DB_FORM_ADD_JSON__post
// };
// let $AX_STORE__CONTENT: I_ENTITY__post[] | undefined = undefined; -->

<!-- // let promise = SERVICE__getAllCollections_Sorted<I_ENTITY__post>(AX_CONST__TEC_FIREBASE_DB__blog);
	// export let $AX_STORE__CONTENT: I_ENTITY__post[] | undefined = undefined;
	 -->
<script lang="ts">
	onMount(async () => {
		console.debug('🚔 🏎️🐶 ... -- blog');
		$AX_STORE__CONTENT = await SERVICE__getAllCollections_Sorted<I_ENTITY__post>(AX_CONST__DB_COLLECTION__blog, true);
		$AX_STORE__CONTENT_DB = {
			collection: AX_CONST__DB_COLLECTION__blog,
			dataset: AX_CONST__DATASET__blog,
			formAdd: AX_CONST__FORM_ADD__post
		};
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'wc -- ****** BLOG_APP ******', false, 'MOUNT-ED', true);
	});
	onDestroy(() => {
		$AX_STORE__CONTENT = [];
		$AX_STORE__CONTENT_DB = undefined;
	});
	import { page } from '$app/stores';
	import { AX_CONST__DATASET__blog } from 'app/0-config/config-db/datasets/AX_CONST__DATASET_blog.json';
	import { AX_CONST__FRAME__distanceFromHeader, AX_CONST__FRAME__maxBodyApp } from 'app/0-config/config-frame/AX_CONST__FRAME';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityPosts } from 'app/lib/utils/guards';
	import { SERVICE__getAllCollections_Sorted } from 'app/stores/AX_BASE3__STORE_SERVICES';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onDestroy, onMount } from 'svelte';
	import Post from '../widgets/Post.svelte';
	import { AX_CONST__DB_COLLECTION__blog } from 'app/0-config/config-db/firebase/AX_CONST__DB_COLLECTIONS';
	import { AX_CONST__FORM_ADD__post } from 'app/0-config/config-db/uiAdd/AX_CONST__FORM_ADD__post.json';
</script>
