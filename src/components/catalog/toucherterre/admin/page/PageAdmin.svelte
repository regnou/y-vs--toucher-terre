<script lang="ts">
	import { onMount } from 'svelte';
	import AxInput from '../formcomponent/AxInputAll.svelte';
	import AxBtnCancel from '../formcomponent/AxBtnCancel.svelte';
	import AxBtnOk from '../formcomponent/AxBtnOk.svelte';
	import Button, { Label } from '@smui/button';
	import { getFirebase } from '@app/utils/tecnology/firebase/firebaseClient';
	import {
		service_addIdInput,
		service_modInput
	} from '@app/utils/tecnology/firebase/services/adminPageServices';
	import { upload } from '@app/utils/tecnology/firebase/storageServices';
	import { Text } from '@smui/list';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';

	export let col;
	export let store;
	export let initData;
	let files_all = [null, null, null, null, null, null, null, null, null, null];
	onMount(() => {
		// menus.update((n) => data);
	});
	// $: $site = data.site;
	$: console.log(files_all);
	const injectScript = async () => {
		await service_addIdInput(col, 'summaryId', { data: initData });
	};
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

<div id="wa--page-admin" class=" bg-white p-5 text-black">
	<!-- <button on:click={injectScript}>> INJECT DATA !</button> -->
	<Button on:click={injectScript} variant="raised" class="button-shaped-round">
		<Label>INJECT DATA</Label>
	</Button>

	<Subtitle>contenu</Subtitle>

	<div class="space-y-6 p-2">
		{#if $store}
			{#each $store as item, i}
				<AxInput
					bind:files={files_all[i]}
					bind:inputValue={item.inputValue}
					bind:label={item.label}
					bind:type={item.type}
				/>
			{/each}
		{/if}
	</div>

	<!-- btn -->
	<div class="grid grid-flow-col place-items-center gap-2">
		<AxBtnCancel text="cancel" />
		<!-- <AxBtnBlue handle={save} /> -->
		<AxBtnOk text="ok" callback={async () => await save()} />
	</div>

	<!-- <button on:click={save}> > SAVE !</button> -->
</div>

<style>
	button {
		@apply m-2 border-2 border-blue-400 bg-white p-2;
	}
	button:hover {
		@apply border-blue-800 bg-green-300;
	}
</style>
