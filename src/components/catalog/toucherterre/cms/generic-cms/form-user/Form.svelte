<script lang="ts">
	// import { upload } from '@app/tecnology/firebase/services/storageServices';
	import { page } from '$app/stores';
	import { config__mod } from '@app/domain/services/configService';
	import { upload } from '@app/tecnology/firebase/services/storageServices';
	import AxBtnCancel from './widgets/form-inputValue/AxBtnCancel.svelte';
	import AxBtnOk from './widgets/form-inputValue/AxBtnOk.svelte';
	import AxPanelsAddEdit from './widgets/form-list/AxPanelsAddEdit.svelte';
	// .............................................
	export let megaconfig;
	const hackStore = megaconfig.conf__store; // pur hack le $ qui marche pas sur .
	//----------------------------------------------
	async function save() {
		console.debug('🌎🏎️✅ click >> on:save 1 🟡');
		await createStorageUrl();
		await config__mod(megaconfig.conf__db, $hackStore);
		console.debug('🌎🏎️✅ click << on:save 2 🟨');
	}
	// ---------------------------------------------
	//----------------------------------------------
	// UPLOAD STORAGE ON FIREBASE
	//----------------------------------------------
	async function createStorageUrl() {
		for (const item of $hackStore) {
			// if (item.posts) {
			// for (const post of item.posts) {
			// for (const ivItm of item.inputValues) {
			if (item.tag === 'file' && item.blobs) {
				// we always just have ONE FILE
				const urlStorage = await upload(item.blobs[0]);
				// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
				item.value = urlStorage;
				//
				// and update the ui
				// post.url = urlStorage;
				//
				// We unlink the blob now from the store
				delete item.blobs;
			}
			// }
			// }
			// }
		}
	}
</script>

<!-- ######################## -->
<!-- POUR x1 ADMIN (x1 COLLECTION) -->
<!-- ######################## -->
<div id="axformedit-1" class="rounded-xl  bg-gray-200 p-5 uppercase text-black">
	<!-- ---------------------- -->
	<!-- title of this section of admin (collection you will handle) -->
	<!-- ---------------------- -->
	<div class="mb-10 min-w-min text-4xl font-bold ">
		{$page.url.pathname.replace('/cms/site/', '').replace('-', ' ')}
	</div>

	<!-- <div> -->
	<!-- ######################## -->
	<!-- POUR CHAQUE PAGE-ITEM -->
	<!-- ######################## -->
	<!-- {#each $hackStore as pageItem, pos_pi} -->
	<!-- {#if 'listItems' in pageItem} -->
	<!-- megaconfig, juste pour le PanelAdd qui a besoin d'avoir le form ADD -->
	<!-- NON => je me base sur le store, pas sur la modularite du component -->
	<!-- JE COUPLE le component au STORE pour l instant -->
	<!-- bind:listItems={pageItem.listItems} -->
	<AxPanelsAddEdit {megaconfig} />
	<!-- pos_pageItem={pos_pi} -->
	<!-- {/if} -->
	<!-- TODO - elese - inputValue -->
	<!-- {/each} -->
	<!-- </div> -->
	<!-- ---------------------- -->
	<!-- SUBMIT BTNs -->
	<!-- ---------------------- -->
	<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
		<AxBtnCancel text="cancel" />
		<AxBtnOk text="ok" callback={async () => await save()} />
	</div>
</div>

<!-- BRANCH: I_UI__inputValue -->
<!-- <AxInputValue ivItm={pageItem} /> -->
<!-- {:else} -->
<!-- SLIDESHOW - todo AFTER -->
<!-- <div class="col-span-4 grid grid-rows-3 place-items-center">
				<Slider imgs={[$STORE[i].iv]} /> </div> -->
