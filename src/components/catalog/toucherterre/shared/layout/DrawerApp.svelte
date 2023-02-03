<script>
	import { browser } from '$app/environment';
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import List, { Group, Subheader, Item, Text } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import { DATAJSON__HEADERMENU__APP } from '@app/data/MENUS/HEADER_MENU__APP';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import DrawerMenuItem from '../DrawerMenuItem.svelte';

	export let open = false;
	export let dynVariant = 'N/A'; // 'modal', 'dismissible'

	let drawer = null;
	let active = $page.url.pathname;

	//
	onMount(() => {
		console.log('mount -- ' + $page.url.pathname);
	});

	// UTILS
	function setActive(value) {
		active = value;
	}
</script>

<!-- <div class="drawer-container"> -->
<!-- <Drawer variant="dismissible" bind:open> -->
<!-- <Drawer variant="modal" fixed={false} bind:open> -->
<!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->

<!--  -->
<!-- DRAWER -->
<!--  -->
<!-- variant="{dynVariant}" -->
<Drawer bind:this={drawer} bind:variant={dynVariant} bind:open id="drawer-app">
	<!-- drawer--header -->
	<Header>
		<Title>TOUCHER TERRE</Title>
	</Header>
	<!-- drawer--content (les mens du drawer) -->
	<Content>
		<Separator />
		<!-- <Group> -->
		<!-- <Subheader>Sommaire</Subheader> -->
		<!-- <List> -->
		{#each DATAJSON__HEADERMENU__APP as item}
			<DrawerMenuItem url={item.url} menu={item.menu} />

			<!-- <Item
						href="javascript:void(0)"
						on:click={() => setActive(item.url)}
						activated={active === item.url}
					>
						<a href={item.url} class="w-full">
							<Text>{item.menu}</Text>
						</a>
					</Item> -->
			<!-- <MenuItem img={item.img} url={item.url} menu={item.menu} /> -->
		{/each}
		<!-- </List> -->
		<!-- </Group> -->

		<Separator />
	</Content>
</Drawer>
