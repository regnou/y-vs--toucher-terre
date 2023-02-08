<script lang="ts">
	import { upload } from '@app/utils/tecnology/firebase/services/storageServices';
	import { page } from '$app/stores';
	import { service_modInput } from '@app/services/crudService';
	import AxBtnCancel from '../../TPL/form/AxBtnCancel.svelte';
	import AxBtnOk from '../../TPL/form/AxBtnOk.svelte';
	import AxBlog from '../../TPL/blog/AxBlog.svelte';

	export let col;
	export let GENERIC_STORE: any = [];
	export let GENERIC_ADD = null;

	// -------------------------------------
	async function createStorageUrl() {
		for (const blog of $GENERIC_STORE) {
			for (const post of blog.posts) {
				for (const ivItm of post.inputValues) {
					if (ivItm.type === 'file' && ivItm.blobs) {
						// console.log(" (ivItm.type === 'file' && ivItm.blobs) HAS PASSED");
						// we always just have ONE FILE
						const urlStorage = await upload(ivItm.blobs[0]);
						// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
						ivItm.inputValue = urlStorage;
						//
						// and update the ui
						post.url = urlStorage;

						// $GENERIC_STORE = $GENERIC_STORE;

						// src={item.inputValues[1].inputValue}
						//
						//
						// We unlink the blob now from the store
						delete ivItm.blobs;
					}
				}
			}
		}
	}
	// -------------------------------------
	async function save() {
		console.log('click > onsave 1 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
		await createStorageUrl();
		await service_modInput(col, 'summaryId', { data: $GENERIC_STORE });
		console.log('click < onsave 2 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
	}
	// -------------------------------------
</script>

<div id="AxForm--1" class="rounded-xl border-4  bg-white p-5 uppercase text-black">
	<!-- title -->
	<div class="mb-10 text-2xl font-bold">
		{$page.url.pathname.replace('/admin/pages/', '').replace('-', ' ')}
	</div>
	<!--  -->
	<div class="space-y-6 p-2">
		{#if $GENERIC_STORE && $GENERIC_STORE.length}
			{#each $GENERIC_STORE as item, pos_blog}
				<AxBlog type={item.type} {pos_blog} {GENERIC_ADD} {GENERIC_STORE} />
			{/each}
		{/if}
	</div>
	<!-- btn to submit the form -->
	<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
		<AxBtnCancel text="cancel" />
		<AxBtnOk text="ok" callback={async () => await save()} />
	</div>
</div>
