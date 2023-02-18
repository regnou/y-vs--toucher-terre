<script lang="ts">
	import { AX__CONST__homeUrl } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__homeUrl';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import { Content, Header, Title, Subtitle } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import DrawerMenuItem from './menu-item/AxDrawermenuItem.svelte';
	// ------------------------------------------------
</script>

<!-- DRAWER CMS -->
<!-- ######################################################## -->

<Header>
	<!-- ................. -->
	<Title>AXELO</Title>
	<Subtitle>1.0</Subtitle>
</Header>

<Content>
	<!-- ................. -->
	<DrawerMenuItem
		menu={{ title: 'www.toucher-terre', url: `${AX__CONST__homeUrl}`, img: '/media/favicon.png' }}
	/>

	<!-- <Separator /> -->
	<!-- <Group> -->
	<!-- <DrawerMenuItem url={'/admin'} menu={'Tableau de bord'} /> -->

	<Separator />
	<Subheader>Pages</Subheader>
	<Separator />
	<!-- <DrawerMenuItem url={'/cms/site'} menu={'Toutes les pages'} /> -->

	<!-- QUICK LINKS PAGES EDIT -->
	<List>
		{#each AX__HEADERMENU_APP as menu (menu.title)}
			<DrawerMenuItem menu={{ title: menu.title, url: `/cms/site${menu.url}`, img: menu.img }} />
		{/each}
	</List>

	<!-- <DrawerMenuItem href={'/site/post-new'} text={'Ajouter'} /> -->
	<!-- <DrawerMenuItem href={'/cms/site-tag'} text={'Catégories'} /> -->
	<!-- <Accordeon /> -->

	<Separator />
	<Subheader tag="h6">Comptes</Subheader>
	<!-- <DrawerMenuItem href={'/site/users'} text={'Tous les comptes'} /> -->
	<!-- TODO - remettre -->
	<!-- <DrawerMenuItem url={'/site/profile'} menu={'Profil'} /> -->
	<!-- </Group> -->

	<Separator />
</Content>
