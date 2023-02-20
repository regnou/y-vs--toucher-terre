<!-- ####################################################### -->
<!-- ####################################### -->
<!--  -->
<!-- ####################################### -->
<!-- .................. -->
<!-- tip responsive: cf. gsite, both app et cms -->
<!-- .................. -->
<!-- {AX__UI__CONST_responsiveHambergerShow} -->
<div
	id="axformedit--1"
	style=" "
	class="w-full bg-red-300 lg:w-72"
>
	<!-- ####################################### -->
	<!-- BODY                                  -->
	<!-- ####################################### -->
	<!-- ---------------------- -->
	<!-- SUBMIT BTNs            -->
	<!-- ---------------------- -->
	<!-- <AxBtnCancel text="Annuler" /> -->
	<div class=" grid grid-flow-col place-items-center gap-2 p-10">
		<AxBtnOk
			text="Enregistrer"
			callback={async () => await save()}
		/>
	</div>
	<!-- ---------------------- -->
	<!-- POUR CHAQUE PAGE-ITEM  -->
	<!-- ---------------------- -->
	<!-- ................ -->
	<AxPanelsAddEdit
		bind:store
		{megaconfig}
	/>
</div>
<!-- BRANCH: I_UI__inputValue          -->
<!-- <AxInputValue ivItm={pageItem} /> -->
<!-- {:else} -->
<!-- SLIDESHOW - todo AFTER -->

<!-- <div class="col-span-4 grid grid-rows-3 place-items-center">
				<Slider imgs={[store[i].iv]} /> </div> -->
<script lang="ts">
	import { page } from '$app/stores';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import { AX__UI__CONST_responsiveHambergerShow } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_responsiveHambergerShow';
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
					// console.debug('...');
					// ---------------------------------------------------
					const urlStorage = await upload(item.blobs);
					// ---------------------------------------------------
					// const urlStorage = await upload(item.blobs[0]);
					// ---------------------------------------------------
					// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
					item.value = urlStorage;
					// delete item.blobs;
					// console.log('this item has no more BLOB; ', item);
					// item.exit = true; // hack-bad
					// We unlink the blob now from the store
					// delete item.blobs;
				}
		}
	}
</script>
