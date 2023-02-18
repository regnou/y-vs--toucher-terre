<script lang="ts">
	import { page } from '$app/stores';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import { config__mod } from '@app/domain/services/configService';
	import type { T_axStore } from '@app/stores/createReduxStore';
	import { upload } from '@app/tecnology/firebase/services/storageServices';
	import TopAppBar, { Row } from '@smui/top-app-bar';
	import Section from '@smui/top-app-bar/src/Section.svelte';
	import AxBtnCancel from '../form-inputValue/AxBtnCancel.svelte';
	import AxBtnOk from '../form-inputValue/AxBtnOk.svelte';
	import AxPanelsAddEdit from './AxPanelsAddEdit.svelte';
	//----------------------------------------------

	let topAppBar;
	//----------------------------------------------
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	// let store: T_axStore | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;

	// .....................................................................
	// $: store = megaconfig ? megaconfig.conf__store : undefined;
	//----------------------------------------------
	// SAVE
	//----------------------------------------------
	async function save() {
		if (!megaconfig) return;
		console.debug('🌎🏎️✅ click >> on:save 1 🟡');
		// TODO
		// await createStorageUrl();
		await config__mod(megaconfig.conf__db, store);
		console.debug('🌎🏎️✅ click << on:save 2 🟨');
	}
	//----------------------------------------------
	// UPLOAD STORAGE ON FIREBASE
	//----------------------------------------------
	async function createStorageUrl() {
		if (!store && !Array.isArray(store)) return;

		for (const item of store) {
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
		bind:this={topAppBar}
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
