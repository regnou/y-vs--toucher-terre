<script lang="ts">
	import { getFirebase } from '@app/utils/tecnology/firebase/firebaseClient';
	import { upload } from '@app/utils/tecnology/firebase/storageServices';
	import { page } from '$app/stores';
	import { service_modInput } from '@app/utils/tecnology/firebase/services/firestoreCRUDAdminServices';
	import AxBtnCancel from '../form/AxBtnCancel.svelte';
	import AxBtnOk from '../form/AxBtnOk.svelte';
	import AxInputAll from './3-AxInputAll.svelte';
	import AxBlog from '../tpl/blog/AxBlog.svelte';
	//
	export let col;
	export let postId = -1; // postId, means the form edit, will only display the fields of the post

	// hack-type
	export let GENERIC_STORE: any = [];

	let files_all = [null, null, null, null, null, null, null, null, null, null];

	// $: $site = data.site;
	$: console.log('files_all: ', files_all);
	$: console.log('todel::', postId);

	async function save() {
		console.log('click > onsave 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
		console.log('🟨 (1/2)');
		// FAST and BAD - upload image now
		const { STORAGE } = getFirebase();
		for (let index = 0; index < files_all.length; index++) {
			const fileList = files_all[index];
			if (fileList) {
				const urlStorage = await upload(fileList[0]);
				// const urlStorage = await upload(fileList[0]);
				$GENERIC_STORE[index].inputValue = urlStorage;
				console.log('UPDATE FINAL : ', $GENERIC_STORE[index].inputValue, ' -- ', urlStorage);
				console.log('________________________________');
			}
		}
		console.log('🟨 (2/2)');
		// SAVE LE STORE VERS FIRESTORE
		await service_modInput(col, 'summaryId', { data: $GENERIC_STORE });
		console.log('click < onsave 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
	}
</script>

<!--  -->
<!--  -->
<!--  -->

<div id="AxForm--1" class=" rounded-xl  border-4 bg-white p-5 text-black">
	<!-- <button on:click={injectScript}>> INJECT DATA !</button> -->
	<div class="mb-10 text-center text-2xl font-bold">
		{$page.url.pathname.replace('/admin/pages/', '')}
	</div>
	<!--  -->
	<div class="space-y-6 p-2">
		<!-- {@debug $store} -->
		{#if $GENERIC_STORE && $GENERIC_STORE.length}
			{#each $GENERIC_STORE as item, i}
				{#if item.type === 'blog'}
					<AxBlog {item} />
				{:else}
					<AxInputAll {item} bind:files={files_all[i]} />
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
