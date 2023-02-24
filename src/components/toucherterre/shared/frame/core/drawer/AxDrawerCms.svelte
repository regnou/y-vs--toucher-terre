<!-- DRAWER CMS -->
<!-- ######################################################## -->
<!-- ######################################## -->

<Content class="    bg-red-200">
	<Subheader>Revenir sur le site</Subheader>
	<Separator />
	<AxDrawermenuItem
		menu={{ title: 'APP', url: AX_CONST__FRAME_URL_home, img: AX_CONST__FRAME_favicon }}
	/>
	<!-- ................. -->
	<Subheader>Editer le contenu du site</Subheader>
	<Separator />
	<TabBar
		tabs={['page', 'editer', 'config']}
		let:tab
		bind:active
	>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
	{#if active === 'page'}
		<!-- ---------------------------------- -->
		<!-- PAGE -->
		<!-- ---------------------------------- -->
		<List class="">
			{#each AX_CONST__FRAME_MENU_cms as menu (menu.title)}
				<!-- isDark={true} -->
				<DrawerMenuItem menu={{ title: menu.title, url: `/cms/app${menu.url}`, img: menu.img }} />
			{/each}
		</List>
	{:else if active === 'editer'}
		<!-- ---------------------------------- -->
		<!-- FORM -->
		<!-- ---------------------------------- -->
		<!-- ................. -->
		<div class="p-5">
			<AxPanelsAddEdit
				bind:dataArrDumb
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
	<!-- <DrawerMenuItem url={'/cms/app'} menu={'Toutes les pages'} /> -->
	<!-- QUICK LINKS PAGES EDIT -->
	<!-- <DrawerMenuItem href={'/site/post-new'} text={'Ajouter'} /> -->
	<!-- <DrawerMenuItem href={'/cms/app-tag'} text={'Catégories'} /> -->
	<!-- <Accordeon /> -->
	<!-- <Separator /> -->
	<!-- <Subheader tag="h6">Comptes</Subheader> -->
	<!-- <DrawerMenuItem href={'/site/users'} text={'Tous les comptes'} /> -->
	<!-- TODO - remettre -->
	<!-- <DrawerMenuItem url={'/site/profile'} menu={'Profil'} /> -->
	<!-- </Group> -->
	<!-- <Separator /> -->
</Content>

<!-- <Header> -->

<!-- <Title>
		<a
			class=" flex w-max items-center "
			href={AX_CONST__FRAME_URL_home}
		>
			<img
				class="mr-2    h-10 w-10"
				src="/media/favicon.png"
				alt=""
			/>
			Voir le site
		</a>
	</Title> -->

<!-- </Header> -->
<style>
	* :global(.mdc-drawer .fullH) {
		height: 800px !important;
	}
</style>

<!-- style="background:var(--mdc-theme-text-primary-on-background);" -->
<script lang="ts">
	import AxFormDbInjector from 'app/components/toucherterre/cms/frame-pages/widgets/form-injector/AxFormDbInjector.svelte';
	import AxPanelsAddEdit from 'app/components/toucherterre/cms/frame-pages/widgets/form/AxPanelsAddEdit.svelte';
	import { AX_CONST__FRAME_MENU_cms } from 'app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_cms';
	import { Content, Header, Title } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import DrawerMenuItem from './menu-item/AxDrawerMenuitem.svelte';
	import { AX_CONST__FRAME_URL_home } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_urls';
	import AxDrawermenuItem from './menu-item/AxDrawerMenuitem.svelte';
	import { AX_CONST__FRAME_favicon } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	// ------------------------------------------------
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let dataArrDumb: T_pageItemStore[] | undefined = undefined;
	let active = 'page'; // page | form
	// ------------------------------------------------
	// $: console.log('active', active);
	// ------------------------------------------------
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'wc -- ax Frame CMS');
	});
</script>
