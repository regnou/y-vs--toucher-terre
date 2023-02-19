<script lang="ts">
	import { page } from '$app/stores';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import { config__mod } from '@app/domain/services/configService';
	import { upload } from '@app/tecnology/firebase/services/storageServices';
	import { axlog } from '@app/utils/axLog';
	import { isInputValue } from '@app/utils/guards';
	import TopAppBar, { Row } from '@smui/top-app-bar';
	import Section from '@smui/top-app-bar/src/Section.svelte';
	import AxBtnCancel from '../form-inputValue/AxBtnCancel.svelte';
	import AxBtnOk from '../form-inputValue/AxBtnOk.svelte';
	import AxPanelsAddEdit from './AxPanelsAddEdit.svelte';
	//----------------------------------------------
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;
	//----------------------------------------------
	// SAVE
	//----------------------------------------------
	async function save() {
		if (!megaconfig || !store) return;
		console.debug('🌎🏎️✅ click >> on:save 1 🟡');

		await createStorageUrl();

		// clean blob
		for await (const item of store) {
			if (isInputValue(item))
				if (item.tag === 'file' && item.blobs) {
					delete item.blobs;
				}
		}

		axlog(store, $page.url.pathname, 'SAVE', false, 'DEBUG-AVANT-SAVE');
		// debugger;
		await config__mod(megaconfig.conf__db, store);
		console.debug('🌎🏎️✅ click << on:save 2 🟨');
	}
	//----------------------------------------------
	// UPLOAD STORAGE ON FIREBASE
	//----------------------------------------------
	async function createStorageUrl() {
		if (!store) return;
		// for await (const item of store) {

		for (let ii = 0; ii < store.length; ii++) {
			const item = store[ii];
			if (isInputValue(item))
				if (item.tag === 'file' && item.blobs) {
					// we always just have ONE FILE
					console.log('🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 ');
					console.log('Uploading your image...');
					// console.dir(item.blobs);
					// ---------------------------------------------------
					// console.debug('...');
					const urlStorage = await upload(item.blobs[0]);
					debugger;
					// ---------------------------------------------------
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					item.value = urlStorage;

					// delete item.blobs;
					// console.log('this item has no more BLOB; ', item);
					// debugger;
					//
					// item.exit = true; // hack-bad
					// We unlink the blob now from the store
					// delete item.blobs;
				}
		}
	}
</script>

<!-- ####################################################### -->
<!-- ####################################### -->
<!--  -->
<!-- ####################################### -->

<div id="axformedit--1" class="rounded-xl  bg-gray-200 p-5 uppercase text-black">
	<!-- +#################################### -->
	<!-- HEADER -->
	<!-- +#################################### -->
	<!-- variant="fixed" -->

	<!-- +#################################### -->
	<!-- BODY -->
	<!-- +#################################### -->

	<TopAppBar
		variant="static"
		style="border:{AX__UI__CONST_isDebugBorder ? '4px solid red' : 'none'}"
		class="bg-black/80 "
	>
		<Row>
			<Section class="mdc-top-app-bar__section--align-start ">
				<!-- prev btn -->
				<!-- on:click={console.log('todo')} -->
				<!-- <IconButton style="color:var(--wa-color-1)" class="material-icons">arrow_back	</IconButton> -->

				<!-- title of this section of admin (collection you will handle) -->
				{$page.url.pathname.replace('/cms/site/', '').replace('-', ' ')}
			</Section>
		</Row>
	</TopAppBar>

	<!-- POUR CHAQUE PAGE-ITEM -->
	<!-- ................ -->
	<AxPanelsAddEdit bind:store {megaconfig} />

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
				<Slider imgs={[store[i].iv]} /> </div> -->
