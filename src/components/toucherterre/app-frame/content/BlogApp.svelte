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
	<Twocol>
		<div>
			<!-- <main class="m-auto px-10 pb-20 max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}"> -->
			<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
			{#if $AX_STORE__CONTENT.length && isEntityPosts($AX_STORE__CONTENT)}
				{#each $AX_STORE__CONTENT as post}
					<Post {post} />
				{/each}
			{/if}
		</div>
		<div
			id="slider--1"
			class="  "
		>
			<Slider arr={GALLERY_A} />
			<Slider arr={GALLERY_B} />
			<Slider arr={GALLERY_C} />
		</div>
	</Twocol>
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
		console.debug('🚔 🏎️🐶 ... -- blog-app');
		await ACTION__getallSorted<I_ENTITY__post>(AX_CONST__DB_COLLECTION__blog, AX_CONST__DATASET__post, AX_CONST__FORM_ADD__post);
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ****** BLOG_APP ******', false, 'MOUNT', true);
	});
	onDestroy(() => {
		console.log('destroy -------------------------------');
		$AX_STORE__CONTENT = [];
		$AX_STORE__CONTENT_DB = undefined;
	});
	import { page } from '$app/stores';
	import { AX_CONST__DATASET__post } from 'app/0-config/db/datasets/AX_CONST__DATASET_post.json';
	import { AX_CONST__FRAME__distanceFromHeader, AX_CONST__FRAME__maxBodyApp } from 'app/0-config/frame/AX_CONST__FRAME';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityPosts } from 'app/lib/utils/guards';
	import { SERVICE__getAllCollections_Sorted } from 'app/stores/AX_BASE3__STORE_SERVICES';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onDestroy, onMount } from 'svelte';
	import Post from '../widgets/Post.svelte';
	import { AX_CONST__DB_COLLECTION__blog } from 'app/0-config/db/firebase/AX_CONST__dbColletions';
	import { AX_CONST__FORM_ADD__post } from 'app/0-config/db/uiAdd/AX_CONST__FORM_ADD__post.json';
	import { ACTION__getallSorted } from 'app/stores/AX_BASE2__STORE_ACTIONS';
	import Twocol from '../widgets/Twocol.svelte';
	import Slider from '../widgets/Slider.svelte';
	import { GALLERY_A, GALLERY_B, GALLERY_C } from 'app/0-config/db/datasets/AX_CONST__DATASET_slideshow_local';
</script>
