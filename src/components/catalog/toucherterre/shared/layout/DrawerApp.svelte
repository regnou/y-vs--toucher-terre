<script lang="ts">
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import Separator from '@smui/list/src/Separator.svelte';
	import { DATAJSON__HEADERMENU__APP } from '@app/DATA/MENUS/DATAJSON__HeaderMenuApp.json';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import DrawerMenuItem from '../DrawerMenuItem.svelte';

	export let open = false;
	export let dynVariant: T_dynvar; // 'modal', 'dismissible'
	let drawer;
	let active = $page.url.pathname;
</script>

<!--  -->
<!-- DRAWER -->
<!--  -->
<Drawer bind:this={drawer} bind:variant={dynVariant} bind:open id="drawer-app" class="fixed">
	<Header>
		<Title>TOUCHER TERRE</Title>
	</Header>
	<Content>
		<Separator />
		{#each DATAJSON__HEADERMENU__APP as item}
			<DrawerMenuItem url={item.url} menu={item.menu} />
		{/each}
		<Separator />
	</Content>
</Drawer>
