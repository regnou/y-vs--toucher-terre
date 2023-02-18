<script lang="ts">
	import Separator from '@smui/list/src/Separator.svelte';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import DrawerMenuItem from './menu-item/AxDrawermenuItem.svelte';
	import { Content, Header, Title } from '@smui/drawer';
	import List from '@smui/list';
</script>

<!-- DRAWER APP -->
<!-- ######################################################## -->

<Header>
	<!-- ................. -->
	<Title>TOUCHER TERRE</Title>
	<!-- Subtitle -->
</Header>
<Content>
	<!-- ................. -->
	<Separator />
	<List>
		{#each AX__HEADERMENU_APP as menu}
			<DrawerMenuItem {menu} />
		{/each}
	</List>
	<Separator />
</Content>
