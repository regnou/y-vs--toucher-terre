<script lang="ts">
	import { AX__CONST__homeUrl } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__homeUrl';
	import { AX__HEADERMENU_CMS } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_CMS.json';
	import Drawer, { Content, Header, Title, Subtitle } from '@smui/drawer';
	import { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import DrawerMenuItem from './menu-item/DrawermenuItem.svelte';

	export let open = false;
</script>

<!-- ########################################### -->
<!-- DRAWER CMS -->
<!-- ########################################### -->
<Drawer variant="modal" {open} class="fixed">
	<!-- HEADER -->
	<Header>
		<Title>AXELO</Title>
		<Subtitle>1.0</Subtitle>
	</Header>
	<!-- drawer--content (les menus du drawer) -->
	<!-- WE FIXE THE DRAWER to not scroll -->
	<Content>
		<!-- Aller sur le site -->
		<!-- <Separator /> -->
		<DrawerMenuItem url={AX__CONST__homeUrl} menu={'www.toucher-terre'} />

		<!-- <Separator /> -->
		<!-- <Group> -->
		<!-- <DrawerMenuItem url={'/admin'} menu={'Tableau de bord'} /> -->

		<Separator />
		<Subheader>Site</Subheader>
		<Separator />
		<!-- <DrawerMenuItem url={'/cms/site'} menu={'Toutes les pages'} /> -->

		<!-- QUICK LINKS PAGES EDIT -->
		{#each AX__HEADERMENU_CMS as item (item.title)}
			<DrawerMenuItem url={'/cms/site' + item.url} menu={item.title} />
		{/each}

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
</Drawer>
