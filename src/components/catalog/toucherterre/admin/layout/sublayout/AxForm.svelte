<script lang="ts">
	import { upload } from '@app/utils/tecnology/firebase/services/storageServices';
	import { page } from '$app/stores';
	import { service_modInput } from '@app/services/crudService';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import AxBtnCancel from '../../TPL/form/AxBtnCancel.svelte';
	import AxBtnOk from '../../TPL/form/AxBtnOk.svelte';
	import AxInputAll from './items/AxInputAll.svelte';
	import AxBlog from '../../TPL/blog/AxBlog.svelte';

	export let isStaticPage = false;
	export let col;
	export let postId = -1; // postId, means the form edit, will only display the fields of the post
	export let GENERIC_ADD = null;
	export let GENERIC_STORE: any = [];

	$: console.log('todel::', postId);

	async function createStorageUrl() {
		for (const post of $GENERIC_STORE[0].posts) {
			for (const ivItm of post.inputValues) {
				if (ivItm.type === 'file' && ivItm.blobs) {
					console.log(" (ivItm.type === 'file' && ivItm.blobs) HAS PASSED");
					// we always just have ONE FILE
					const urlStorage = await upload(ivItm.blobs[0]);
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					ivItm.inputValue = urlStorage;
					// We unlink the blob now from the store
					delete ivItm.blobs;
					console.log('________________________________');
				}
			}
		}
	}

	async function save() {
		console.log('click > onsave 1 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
		await createStorageUrl();
		await service_modInput(col, 'summaryId', { data: $GENERIC_STORE });
		console.log('click < onsave 2 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
	}
</script>

<!--  -->
<!--  -->
<!--  -->

<div id="AxForm--1" class="rounded-xl border-4  bg-white p-5 uppercase text-black">
	<!-- title -->
	<div class="mb-10 text-2xl font-bold">
		{$page.url.pathname.replace('/admin/pages/', '').replace('-', ' ')}
	</div>
	<!--  -->
	<div class="space-y-6 p-2">
		{#if $GENERIC_STORE && $GENERIC_STORE.length}
			{#each $GENERIC_STORE as item, i}
				<!-- to del type = blog -->
				{#if item.type === 'blog'}
					<AxBlog {isStaticPage} {GENERIC_ADD} {GENERIC_STORE} />
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
