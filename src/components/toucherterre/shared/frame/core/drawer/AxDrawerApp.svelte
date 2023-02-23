<!-- DRAWER APP -->
<!-- ######################################################## -->
<!-- ######################################## -->

<Header>
	<!-- ................. -->
	<Title>TOUCHER TERRE</Title>
	<!-- <Subtitle> -->
	<!-- </Subtitle> -->
</Header>
<Content style="">
	<!-- ................. -->
	<div class="underline">
		<!-- isDark={false} -->
		<AxDrawermenuItem
			menu={{ title: 'Administration', url: `${'/cms'}`, img: '/media/favicon.png' }}
		/>
	</div>
	<Separator />
	<List>
		{#each AX_CONST__FRAME_MENU_app as menu}
			<!-- isDark={false} -->
			<AxDrawerMenuItem {menu} />
		{/each}
	</List>
	<Separator />
</Content>

<script lang="ts">
	import { AX_CONST__FRAME_MENU_app } from '@app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_app.json';
	import { Content, Header, Title } from '@smui/drawer';
	import List from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import {
		default as AxDrawerMenuItem,
		default as AxDrawermenuItem
	} from './menu-item/AxDrawermenuItem.svelte';
</script>
