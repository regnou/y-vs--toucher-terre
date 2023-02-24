<!-- DRAWER APP -->
<!-- ######################################################## -->
<!-- ######################################## -->

<!-- <Header> -->
<!-- ................. -->
<!-- <Title>TOUCHER TERRE</Title> -->
<!-- <Subtitle> -->
<!-- </Subtitle> -->
<!-- </Header> -->
<Content class="bg-orange-200">
	<!-- ................. -->
	<!-- <div class="underline"> -->
	<!-- isDark={false} -->
	<Subheader>Mon compte</Subheader>
	<Separator />
	<AxDrawermenuItem
		menu={{ title: 'CMS', url: AX_CONST__FRAME_URL_homeCms, img: AX_CONST__FRAME_favicon }}
	/>
	<!-- <Separator /> -->
	<Subheader>Menu</Subheader>
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
	import { AX_CONST__FRAME_MENU_app } from 'app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_app.json';
	import { Content, Header, Subtitle, Title } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import {
		default as AxDrawerMenuItem,
		default as AxDrawermenuItem
	} from './menu-item/AxDrawerMenuitem.svelte';
	import { AX_CONST__FRAME_URL_homeCms } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_urls';
	import { AX_CONST__FRAME_favicon } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
</script>
