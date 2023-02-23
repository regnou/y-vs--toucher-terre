<!-- DRAWER CMS -->
<!-- ######################################################## -->
<!-- ######################################## -->

<Header>
	<!-- <Title>AXELO</Title> -->
	<Title>
		<a
			class=" flex w-max items-center "
			href={AX_CONST__FRAME_homeUrl}
		>
			<img
				class="mr-2    h-10 w-10"
				src="/media/favicon.png"
				alt=""
			/>
			www.toucher-terre
		</a>
	</Title>
</Header>
<Content class="w-96 ">
	<!-- ................. -->

	<TabBar
		tabs={['page', 'editer', 'config']}
		let:tab
		bind:active
	>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
	<!-- {@debug active} -->
	{#if active === 'page'}
		<!-- ---------------------------------- -->
		<!-- PAGE -->
		<!-- ---------------------------------- -->
		<List class="">
			{#each AX_CONST__FRAME_MENU_cms as menu (menu.title)}
				<!-- isDark={true} -->
				<DrawerMenuItem menu={{ title: menu.title, url: `/cms/site${menu.url}`, img: menu.img }} />
			{/each}
		</List>
	{:else if active === 'editer'}
		<!-- ---------------------------------- -->
		<!-- FORM -->
		<!-- ---------------------------------- -->
		<!-- ................. -->
		<div class="p-5">
			<AxPanelsAddEdit
				bind:store
				{megaconfig}
			/>
		</div>
		<!-- ................. -->
	{:else if active === 'config'}
		<!-- ---------------------------------- -->
		<!-- CONFIG -->
		<!-- ---------------------------------- -->
		<AxFormDbInjector {megaconfig} />
	{/if}
	<!-- <Separator /> -->
	<!-- <Group> -->
	<!-- <DrawerMenuItem url={'/admin'} menu={'Tableau de bord'} /> -->
	<!-- <Separator />
	<Subheader>Pages</Subheader>
	<Separator /> -->
	<!-- <DrawerMenuItem url={'/cms/site'} menu={'Toutes les pages'} /> -->
	<!-- QUICK LINKS PAGES EDIT -->
	<!-- <DrawerMenuItem href={'/site/post-new'} text={'Ajouter'} /> -->
	<!-- <DrawerMenuItem href={'/cms/site-tag'} text={'Catégories'} /> -->
	<!-- <Accordeon /> -->
	<!-- <Separator /> -->
	<Subheader tag="h6">Comptes</Subheader>
	<!-- <DrawerMenuItem href={'/site/users'} text={'Tous les comptes'} /> -->
	<!-- TODO - remettre -->
	<!-- <DrawerMenuItem url={'/site/profile'} menu={'Profil'} /> -->
	<!-- </Group> -->
	<Separator />
</Content>

<script lang="ts">
	import AxFormDbInjector from '@app/components/catalog/toucherterre/cms/frame-pages/widgets/form-injector/AxFormDbInjector.svelte';
	import AxPanelsAddEdit from '@app/components/catalog/toucherterre/cms/frame-pages/widgets/form/AxPanelsAddEdit.svelte';
	import { AX_CONST__FRAME_homeUrl } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_homeUrl';
	import { AX_CONST__FRAME_MENU_cms } from '@app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_cms';
	import { Content, Header, Title } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import DrawerMenuItem from './menu-item/AxDrawermenuItem.svelte';
	let active = 'page'; // page | form
	$: console.log('active', active);
	// ------------------------------------------------
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;
</script>
