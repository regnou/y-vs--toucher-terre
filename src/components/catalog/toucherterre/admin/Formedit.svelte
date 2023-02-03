<script>
	import { getFirebase } from '@app/utils/tecnology/firebase/firebaseClient';
	import { upload } from '@app/utils/tecnology/firebase/storageServices';
	import { page } from '$app/stores';
	import { service_modInput } from '@app/utils/tecnology/firebase/services/adminPageServices';
	import AxInputAll from './form/AxInputAll.svelte';
	import AxBtnCancel from './form/AxBtnCancel.svelte';
	import AxBtnOk from './form/AxBtnOk.svelte';

	export let col;
	export let store;
	export let initData;

	let files_all = [null, null, null, null, null, null, null, null, null, null];

	// $: $site = data.site;
	$: console.log(files_all);

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
		{$page.url.pathname.replace('/admin/posts/', '')}
	</div>
	<div class="space-y-6 p-2">
		{#if $store}
			{#each $store as item, i}
				<AxInputAll
					bind:files={files_all[i]}
					bind:inputValue={item.inputValue}
					bind:label={item.label}
					bind:type={item.type}
				/>
			{/each}
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
