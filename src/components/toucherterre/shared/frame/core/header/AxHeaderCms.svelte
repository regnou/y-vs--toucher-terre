<!-- https://svelte.dev/tutorial/svelte-options -->
<!-- <svelte:options accessors={true}/> -->
<!-- HEADER CMS -->
<!-- ######################################################## -->
<!-- ######################################## -->
<!-- ######################################## -->
<!-- DIALOG                                   -->
<!-- ######################################## -->
<!-- aria-labelledby="simple-title"
	aria-describedby="simple-content" -->
<!-- AX_STORE__UI_ISOPEN_dialog.set({
		// 			title: title,
		// 			text: msg,
		// 			open: true,
		// 			answer: 'N/A'
		// 		}); -->
<!-- bind:this={dialog} -->
{#if open}
	<Dialog
		id="dialog--1"
		bind:open
	>
		<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
		<Title id="simple-title">{title}</Title>
		<Content id="simple-content--1">
			{msg}</Content
		>
		<Actions>
			<Button on:click={() => (open = false)}>
				<Label>No</Label>
			</Button>
			<Button
				on:click={async () => {
					open = false;
					await ACTION_SAVE(_M_?.conf__db, _DAB_);
				}}
			>
				<Label>Yes</Label>
			</Button>
		</Actions>
	</Dialog>
{/if}
<!-- ######################################## -->
<!-- LOGO CLIENT -->
<Section
	align="start"
	style="background:{AX_CONST__FRAME_isDebugBg ? 'gray' : 'none'}"
	class="underline"
>
	<!-- class="m-auto flex w-max items-center lg:m-0  " -->
	<a
		on:click={() => {
			$AX_STORE__UI_ISOPEN_drawer = false;
		}}
		class=" flex w-max items-center  "
		href={AX_CONST__FRAME_URL_home}
	>
		<img
			class="h-10 w-10"
			src={AX_CONST__FRAME_favicon}
			alt=""
		/>
		<!-- {#if isXxl} -->
		<div class="ml-2">Toucher Terre</div>
		<!-- {/if} -->
	</a>
	<!-- <AxDrawerMenuitem
		menu={{
			title: 'Toucher Terre',
			url: AX_CONST__FRAME_URL_home,
			img: AX_CONST__FRAME_favicon
		}}
	/> -->
</Section>
<Section
	class="hidden justify-center lg:flex"
	style="background:{AX_CONST__FRAME_isDebugBg ? 'orange' : 'none'}"
>
	<Title
		class="rounded-3xl border-b border-t border-r-8 border-yellow-400 border-t-green-300 border-b-green-400 bg-black pr-2
		">AXELO</Title
	>
</Section>
<Section
	align="end"
	style="background:{AX_CONST__FRAME_isDebugBg ? 'green' : 'none'}"
>
	<!-- SAVE -->
	<!-- callback={async () => await ACTION_SAVE(_M_?.conf__db, _DAB_)} -->
	<Button
		on:click={() => {
			open = true;
			console.debug('opened');
			// await callback();
		}}
		variant="raised"
	>
		<Label>Enregistrer</Label>
	</Button>
	<!-- <a href={AX__CONST__homeUrl} rel="prefetch"> -->
	<!-- <Fab mini> -->
	<!-- <img src="media/ax/3.jpg" alt="" /> -->
	<!-- <Icon class="material-icons">login</Icon> -->
	<!-- </Fab> -->
	<!-- </a>  -->
	<!-- FAB not used NOW -->
	<!-- <IconButton
		href={AX__CONST__homeUrl}
		class="material-icons"
		title="Dismiss">logout</IconButton
	> -->
</Section>

<script lang="ts">
	export let _M_: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	// c faux, puisque, je peux add un new item (qui n a pas d id) et du coups le tableau est fake
	// Pour simplifier, je pose une contrainte, ca doit etre des ENTITES a chaque fois
	export let _DAB_: T_GLOBAL_ENTITIES[] | undefined = undefined;
	//
	let dialog: any = undefined;
	let open = false; // dialog controler
	const title = 'ENREGISTRER';
	const msg = 'Etes vous sure ?';
	//
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'wc -- ax HEADER', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import Button, { Label } from '@smui/button';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	// Title
	import { Section } from '@smui/top-app-bar';
	import { AX_CONST__FRAME_isDebugBg } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { AX_CONST__FRAME_favicon } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { AX_CONST__FRAME_URL_home } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_urls';
	import { upload } from 'app/tecnologies/firebase/services/storageServices';
	import { isInputValue } from 'app/utils/guards';
	import AxDrawerMenuitem from '../drawer/menu-item/AxDrawerMenuitem.svelte';
	import { AX_STORE__UI_ISOPEN_drawer } from 'app/stores/AX_STORE__UI_isopen';
	import { ConfigServices } from 'app/domain/services/ConfigServices';
	$: if (dialog && open) dialog.open();
	// ------------------------------------------------
	// SAVE
	// <!-- ######################################################### -->
	async function ACTION_SAVE(conf__db, imuArr) {
		// <!-- ######################################################### -->
		if (!conf__db || !imuArr) return;
		console.debug('🌎🏎️✅ click >> on:save 1 🟡');
		// if (!confirm('Enregistrer les modifications ?')) return;
		// openDialog('ENREGISTRER LES MODIFICATIONS', 'Etes vous sure ?');
		// if (get(AX_STORE__UI_ISOPEN_dialog).answer !== 'yes') return;
		await createStorageUrl(imuArr);
		// tip: clean blob
		for await (const item of imuArr) {
			if (isInputValue(item))
				if (item.tag === 'file' && item.blobs) {
					// IMMUABLE MON CUL !!! TODO
					delete item.blobs;
				}
		}
		// axlog(store, $page.url.pathname, 'SAVE', false, 'DEBUG-AVANT-SAVE');
		await ConfigServices.getInstance().config__adds(conf__db, imuArr);
		//
		console.debug('🌎🏎️✅ click << on:save 2 🟨');
		return;
		// <!-- ######################################################### -->
		//----------------------------------------------
		// UPLOAD STORAGE ON FIREBASE
		//----------------------------------------------
		async function createStorageUrl(arr) {
			if (!arr) return;
			//
			// for await (const item of store) {
			for (let ii = 0; ii < arr.length; ii++) {
				const item = arr[ii];
				if (isInputValue(item))
					if (item.tag === 'file' && item.blobs) {
						// we always just have ONE FILE
						console.debug('🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 🟢 ');
						console.debug('Uploading your image...');
						// console.dir(item.blobs);
						// console.debug('🚔 🐶...');
						// ---------------------------------------------------
						const urlStorage = await upload(item.blobs);
						// ---------------------------------------------------
						// const urlStorage = await upload(item.blobs[0]);
						// ---------------------------------------------------
						// the inputValue of a file-type-inputValue item is the STORAGE url on firebase storage
						// IMMUABLE MON CUL !!! TODO
						item.value = urlStorage;
						// delete item.blobs;
						// console.debug('this item has no more BLOB; ', item);
						// item.exit = true; // hack-bad
						// We unlink the blob now from the store
						// delete item.blobs;
					}
			}
			//
			return;
		}
	}
</script>
