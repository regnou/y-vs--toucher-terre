<!-- ####################################################### -->
<!-- HEADER CMS -->
<!-- ####################################### -->
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
					await ACTION__save();
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
	style="background:{AX_CONST__FRAME__isDebugBg ? 'gray' : 'none'}"
	class="underline"
>
	<a
		on:click={() => {
			$AX_STORE__FRAME_drawerIsOpen = false;
		}}
		class=" flex w-max items-center  "
		href={AX_CONST__FRAME_URL__home}
	>
		<img
			class="h-10 w-10"
			src={AX_CONST__FRAME__favicon}
			alt=""
		/>
		<div class="ml-2">Toucher Terre</div>
	</a>
</Section>
<Section
	class="hidden justify-center lg:flex"
	style="background:{AX_CONST__FRAME__isDebugBg ? 'orange' : 'none'}"
>
	<Title
		class="rounded-3xl border-b border-t border-r-8 border-yellow-400 border-t-green-300 border-b-green-400 bg-black pr-2
		">AXELO</Title
	>
</Section>
<Section
	align="end"
	style="background:{AX_CONST__FRAME__isDebugBg ? 'green' : 'none'}"
>
	<!-- SAVE -->
	<!-- callback={async () => await ACTION_SAVE($AX_STORE__CONTENT__DB?.conf__db, $AX_STORE__CONTENT)} -->
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
</Section>
<!-- // export let $AX_STORE__CONTENT__DB: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	// export let $AX_STORE__CONTENT: T_GLOBAL_ENTITIES[] | undefined = undefined;
	 -->
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
<!-- https://svelte.dev/tutorial/svelte-options -->
<!-- <svelte:options accessors={true}/> -->
<!-- DIALOG                                   -->
<!-- aria-labelledby="simple-title"
	aria-describedby="simple-content" -->
<!-- AX_STORE__UI_ISOPEN_dialog.set({
		// 			title: title,
		// 			text: msg,
		// 			open: true,
		// 			answer: 'N/A'
		// 		}); -->

<!-- bind:this={dialog} -->
<script lang="ts">
	let dialog: any = undefined;
	let open = false; // cf. dialog
	const title = 'ENREGISTRER';
	const msg = 'Etes vous sure ?';
	//
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'wc -- ax HEADER', false, 'MOUNT', true);
	});
	$: if (dialog && open) dialog.open();
	import { page } from '$app/stores';
	import Button, { Label } from '@smui/button';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';
	import { Section } from '@smui/top-app-bar';
	import { AX_CONST__FRAME__favicon } from 'app/0-config/config-frame/AX_CONST__FRAME';
	import { AX_CONST__FRAME__isDebugBg } from 'app/0-config/config-frame/AX_CONST__FRAME__debug';
	import { AX_CONST__FRAME_URL__home } from 'app/0-config/config-frame/AX_CONST__FRAME__urls';
	import { axlog } from 'app/lib/utils/axLog';
	import { ACTION__save } from 'app/stores/AX_BASE2__STORE_ACTIONS';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { AX_STORE__FRAME_drawerIsOpen } from 'app/stores/AX_STORE__frame';
	import { onMount } from 'svelte';
</script>
