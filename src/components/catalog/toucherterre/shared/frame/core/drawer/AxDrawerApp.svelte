<!-- DRAWER APP -->
<!-- ######################################################## -->
<Header>
	<!-- ................. -->
	<Title>TOUCHER TERRE</Title>
	<!-- <Subtitle> -->
	<!-- </Subtitle> -->
</Header>
<Content style="background: #212121">
	<!-- ................. -->
	<AxDrawermenuItem
		isDark={false}
		menu={{ title: 'Administration', url: `${'/cms'}`, img: '/media/favicon.png' }}
	/>
	<Separator />
	<List>
		{#each AX__HEADERMENU_APP as menu}
			<AxDrawerMenuItem
				{menu}
				isDark={false}
			/>
		{/each}
	</List>
	<Separator />
</Content>

<script lang="ts">
	import Separator from '@smui/list/src/Separator.svelte';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import AxDrawerMenuItem from './menu-item/AxDrawermenuItem.svelte';
	import { Content, Header, Subtitle, Title } from '@smui/drawer';
	import List from '@smui/list';
	import AxHeadermenuItem from '../header/menuItem/AxHeadermenuItem.svelte';
	import AxDrawermenuItem from './menu-item/AxDrawermenuItem.svelte';
</script>
