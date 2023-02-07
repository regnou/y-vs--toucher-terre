<script lang="ts">
	import { DATAJSON__PAGES } from '@app/DATA/MENUS/DATAJSON__Pages.json';
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import List, { Group, Subheader, Item, Text } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import DrawerMenuItem from '../DrawerMenuItem.svelte';

	export let open;
	export let dynVariant; // 'modal', 'dismissible'
</script>

<!--  -->
<!-- DRAWER -->
<!--  -->
<Drawer bind:variant={dynVariant} bind:open id="draweradmin--1" class="fixed">
	<!-- HEADER -->
	<Header>
		<Title>AXELO</Title>
		<Subtitle>1.0.0</Subtitle>
	</Header>
	<!-- drawer--content (les menus du drawer) -->
	<!-- WE FIXE THE DRAWER to not scroll -->
	<Content>
		<!-- Aller sur le site -->
		<!-- <Separator /> -->
		<DrawerMenuItem url={'/acceuil'} menu={'Visiter le site'} />

		<!-- <Separator /> -->
		<!-- <Group> -->
		<!-- <DrawerMenuItem url={'/admin'} menu={'Tableau de bord'} /> -->

		<Separator />
		<Subheader>Editer les pages du site</Subheader>
		<!-- <DrawerMenuItem url={'/admin/pages'} menu={'Toutes les pages'} /> -->

		<!-- QUICK LINKS PAGES EDIT -->
		{#each DATAJSON__PAGES as item (item.page)}
			<DrawerMenuItem url={'/admin/pages' + item.url} menu={item.page} />
		{/each}

		<!-- <DrawerMenuItem href={'/admin/post-new'} text={'Ajouter'} /> -->
		<!-- <DrawerMenuItem href={'/admin/pages-tag'} text={'Catégories'} /> -->
		<!-- <Accordeon /> -->

		<Separator />
		<Subheader tag="h6">Comptes</Subheader>
		<!-- <DrawerMenuItem href={'/admin/users'} text={'Tous les comptes'} /> -->
		<DrawerMenuItem url={'/admin/profile'} menu={'Profil'} />
		<!-- </Group> -->

		<Separator />
	</Content>
</Drawer>

<!-- <div class="drawer-container"> -->
<!-- <Drawer variant="dismissible" bind:open> -->
<!-- <Drawer variant="modal" fixed={false} bind:open> -->
<!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->
