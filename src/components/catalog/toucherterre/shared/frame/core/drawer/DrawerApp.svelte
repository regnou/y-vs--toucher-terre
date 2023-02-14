<script lang="ts">
	import Drawer, { Content, Header, Title } from '@smui/drawer';
	import Separator from '@smui/list/src/Separator.svelte';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import DrawerMenuItem from './menu-item/DrawermenuItem.svelte';

	export let open = false;
</script>

<!-- ########################################### -->
<!-- DRAWER APP -->
<!-- ########################################### -->
<!-- variant = 'modal', 'dismissible' -->
<Drawer variant="modal" {open} class="fixed">
	<Header>
		<Title>TOUCHER TERRE</Title>
	</Header>
	<Content>
		<Separator />
		{#each AX__HEADERMENU_APP as menu}
			<DrawerMenuItem url={menu.url} menu={menu.title} />
		{/each}
		<Separator />
	</Content>
</Drawer>
