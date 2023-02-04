<script lang="ts">
	import { getFirebase } from '@app/utils/tecnology/firebase/firebaseClient';
	import { upload } from '@app/utils/tecnology/firebase/storageServices';
	import { page } from '$app/stores';
	import { service_modInput } from '@app/utils/tecnology/firebase/services/firestoreCRUDAdminServices';
	import AxInputAll from './form/AxInputAll.svelte';
	import AxBtnCancel from './form/AxBtnCancel.svelte';
	import AxBtnOk from './form/AxBtnOk.svelte';
	//
	export let col;
	export let postId = -1; // postId, means the form edit, will only display the fields of the post

	// hack-type
	export let store: any = [];

	let files_all = [null, null, null, null, null, null, null, null, null, null];

	// $: $site = data.site;
	$: console.log('files_all: ', files_all);
	$: console.log('todel::', postId);

	async function save() {
		console.log('click onsave 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨');
		console.log('🟨');
		// FAST and BAD - upload image now
		const { STORAGE } = getFirebase();
		for (let index = 0; index < files_all.length; index++) {
			const fileList = files_all[index];
			if (fileList) {
				const urlStorage = await upload(fileList[0]);
				// const urlStorage = await upload(fileList[0]);

				$store[index].inputValue = urlStorage;
				console.log('UPDATE FINAL : ', $store[index].inputValue, ' -- ', urlStorage);
				console.log('________________________________');
			}
		}

		// files_all.forEach(async (fileList, i) => {
		// 	if (fileList) {
		// 		const urlStorage = await upload(fileList[0]);
		// 		// const urlStorage = await upload(fileList[0]);

		// 		$store[i].inputValue = urlStorage;
		// 		console.log('UPDATE FINAL : ', $store[i].inputValue, ' -- ', urlStorage);
		// 		console.log('________________________________');
		// 	}
		// });
		console.log('🟨🟨');
		// SAVE LE STORE VERS FIRESTORE
		await service_modInput(col, 'summaryId', { data: $store });
	}
</script>

<div id="formedit--1" class=" rounded-xl  border-4 bg-white p-5 text-black">
	<!-- <button on:click={injectScript}>> INJECT DATA !</button> -->
	<div class="mb-10 text-center text-2xl font-bold">
		{$page.url.pathname.replace('/admin/pages/', '')}
	</div>
	<div class="space-y-6 p-2">
		<!-- {@debug $store} -->
		{#if $store && $store.length}
			<!-- {#if postId !== -1} -->
			<!-- it is a post -->
			<!-- ACCORDEON TECNIQUE -->

			<!-- {#if $store[0]}
					{#each $store[0].posts[postId].inputValues as item, i}
						<AxInputAll
							bind:files={files_all[i]}
							bind:inputValue={item.inputValue}
							bind:label={item.label}
							bind:type={item.type}
							bind:posts={item.posts}
						/>
					{/each}
				{/if} -->
			<!--  -->
			<!--  -->
			<!--  -->
			<!-- TABLE TECNIQUE -->
			<!-- {#if $store[0]}
					{#each $store[0].posts[postId].inputValues as item, i}
						<AxInputAll
							bind:files={files_all[i]}
							bind:inputValue={item.inputValue}
							bind:label={item.label}
							bind:type={item.type}
							bind:posts={item.posts}
						/>
					{/each}
				{/if} -->
			<!-- {:else} -->
			<!-- else content here -->
			{#each $store as item, i}
				<AxInputAll
					bind:files={files_all[i]}
					bind:inputValue={item.inputValue}
					bind:label={item.label}
					bind:type={item.type}
					bind:posts={item.posts}
				/>
			{/each}
			<!-- {/if} -->
			<!--  -->
		{/if}
	</div>
	<!-- btn -->
	<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
		<AxBtnCancel text="cancel" />
		<!-- <AxBtnBlue handle={save} /> -->
		<AxBtnOk text="ok" callback={async () => await save()} />
	</div>
	<!-- <button on:click={save}> > SAVE !</button> -->
</div>

<style lang="postcss">
	* :global(.demo-small-titles .smui-accordion__header__title--with-description) {
		flex-basis: 20% !important;
		max-width: 200px !important;
	}
</style>
