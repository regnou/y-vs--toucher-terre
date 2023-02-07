<script lang="ts">
	import { upload } from '@app/utils/tecnology/firebase/services/storageServices';
	import { page } from '$app/stores';
	import { service_modInput } from '@app/services/crudService';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import AxBtnCancel from '../../TPL/form/AxBtnCancel.svelte';
	import AxBtnOk from '../../TPL/form/AxBtnOk.svelte';
	import AxInputAll from './items/AxInputAll.svelte';
	import AxBlog from '../../TPL/blog/AxBlog.svelte';

	export let col;
	export let postId = -1; // postId, means the form edit, will only display the fields of the post
	export let GENERIC_ADD = null;
	export let GENERIC_STORE: any = [];

	$: console.log('todel::', postId);

	async function createStorageUrl() {
		$GENERIC_STORE[0].posts.forEach(async (post, ii) => {
			post.inputValues.forEach(async (ivItm) => {
				// console.log('verify it is here');
				// console.log($STORE_PROCHAINSRDV[0].posts);

				if (ivItm.type === 'file' && ivItm.blobs) {
					console.log(" (ivItm.type === 'file' && ivItm.blobs) HAS PASSED");
					// we always just have ONE FILE
					const urlStorage = await upload(ivItm.blobs[0]);

					// const urlStorage = await upload(fileList[0]);
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					ivItm.inputValue = urlStorage;

					// We unlink the blob now from the store
					delete ivItm.blobs;

					// console.log('urlStorage : ', ivItm.inputValue);
					console.log('verify it is deleted blob ');
					console.log($GENERIC_STORE[0].posts);
					console.log('________________________________');
				}
			});
		});
	}

	async function save() {
		console.log('click > onsave 1 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
		// await createStorageUrl();
		for (const post of $GENERIC_STORE[0].posts) {
			for (const ivItm of post.inputValues) {
				if (ivItm.type === 'file' && ivItm.blobs) {
					console.log(" (ivItm.type === 'file' && ivItm.blobs) HAS PASSED");
					// we always just have ONE FILE
					const urlStorage = await upload(ivItm.blobs[0]);
					// const urlStorage = await upload(fileList[0]);
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					ivItm.inputValue = urlStorage;
					// We unlink the blob now from the store
					delete ivItm.blobs;
					// console.log('urlStorage : ', ivItm.inputValue);
					console.log('verify it is deleted blob ');
					console.log($GENERIC_STORE[0].posts);
					console.log('________________________________');
				}
			}
		}
		// $GENERIC_STORE[0].posts.forEach(async (post, ii) => {
		// 	post.inputValues.forEach(async (ivItm) => {
		// 		console.log('verify it is here');
		// 		console.log($STORE_PROCHAINSRDV[0].posts);

		// 		if (ivItm.type === 'file' && ivItm.blobs) {
		// 			console.log(" (ivItm.type === 'file' && ivItm.blobs) HAS PASSED");
		// 			// we always just have ONE FILE
		// 			const urlStorage = await upload(ivItm.blobs[0]);

		// 			// const urlStorage = await upload(fileList[0]);
		// 			// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
		// 			ivItm.inputValue = urlStorage;

		// 			// We unlink the blob now from the store
		// 			delete ivItm.blobs;

		// 			// console.log('urlStorage : ', ivItm.inputValue);
		// 			console.log('verify it is deleted blob ');
		// 			console.log($GENERIC_STORE[0].posts);
		// 			debugger;
		// 			console.log('________________________________');
		// 		}
		// 	});
		// });
		console.log('click > onsave 2 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
		console.log('check the store: no blob: ', $GENERIC_STORE[0].posts);
		await service_modInput(col, 'summaryId', { data: $GENERIC_STORE });
		console.log('click < onsave 3 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
	}
</script>

<!--  -->
<!--  -->
<!--  -->

<div id="AxForm--1" class="rounded-xl border-4  bg-white p-5 uppercase text-black">
	<!-- <button on:click={injectScript}>> INJECT DATA !</button> -->
	<div class="mb-10 text-center text-2xl font-bold">
		{$page.url.pathname.replace('/admin/pages/', '').replace('-', ' ')}
	</div>
	<!--  -->
	<div class="space-y-6 p-2">
		{#if $GENERIC_STORE && $GENERIC_STORE.length}
			{#each $GENERIC_STORE as item, i}
				<!-- to del type = blog -->
				{#if item.type === 'blog'}
					<AxBlog {GENERIC_ADD} {GENERIC_STORE} />
					<!-- TODO - just a BLOG LOOP ! -->
					<!-- {:else}
					<AxInputAll {iv} bind:files={files_all[i]} /> -->
				{/if}
			{/each}
		{/if}
	</div>
	<!-- btn to submit the form -->
	<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
		<AxBtnCancel text="cancel" />
		<AxBtnOk text="ok" callback={async () => await save()} />
	</div>
</div>

<!--  -->
<!--  -->

<!--  -->
<style lang="postcss">
	* :global(.demo-small-titles .smui-accordion__header__title--with-description) {
		flex-basis: 20% !important;
		max-width: 200px !important;
	}
</style>
