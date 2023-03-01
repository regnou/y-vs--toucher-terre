<!-- DRAWER CMS -->
<!-- ######################################################## -->
<!-- ######################################## -->

<Header>
	<Title>
		<a
			rel="noreferrer"
			target="_blank"
			href="/{$page.url.pathname.replace('/cms/app/', '')}"
			>{$page.url.pathname.replace('/cms/app/', '').replace('-', ' ').toUpperCase()}</a
		>
	</Title>
	<TabBar
		tabs={['page', 'edit-add', 'inject']}
		let:tab
		bind:active
		class="mt-5"
	>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>
</Header>

<Content class="    overflow-x-hidden overflow-y-scroll bg-gray-300">
	<!-- <Subheader>Revenir sur le site</Subheader>
	<Separator />
	<AxDrawermenuItem
		menu={{ title: 'APP', url: AX_CONST__FRAME_URL_home, img: AX_CONST__FRAME_favicon }}
	/> -->
	<!-- ................. -->

	{#if active === 'page'}
		<List class="">
			{#each AX_CONST__FRAME_MENU_cms as menu (menu.title)}
				<!-- isDark={true} -->
				<DrawerMenuItem menu={{ title: menu.title, url: `/cms/app${menu.url}`, img: menu.img }} />
			{/each}
		</List>
		<!-- ................. -->
	{:else if active === 'edit-add'}
		{#if _DAB_ && _DAB_.length}
			<!-- il faut voire la nature du _DAB_ -->
			{#if isEntityEvent(_DAB_[0]) || isEntityPost(_DAB_[0])}
				<AxPanelsAddEdit
					bind:_DAB_
					{_M_}
				/>
			{:else}
				<!-- tip: possibilite de le mettre ds un pannel -->
				<!-- <Content class="space-y-5 bg-blue-800"> -->
				<!-- {#each Object.entries(item) as [key, prop], pos} -->
				{#each _DAB_ as entity, pos (entity.idDoc)}
					<!-- {#each _DAB_ as item, pos} -->
					{#if !isEntityEvent(entity) && !isEntityPost(entity)}
						<AxInputValue
							{pos}
							bind:ivItm={entity}
						/>
					{/if}
				{/each}
				<!-- </Content> -->
			{/if}
			<!-- ................. -->
		{/if}
	{:else if active === 'inject'}
		<AxFormDbInjector {_M_} />
		<!-- ................. -->
	{/if}
</Content>

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
	/* * :global(.mdc-drawer .fullH) {
		height: 800px !important;
	} */
</style>

<!-- style="background:var(--mdc-theme-text-primary-on-background);" -->
<script lang="ts">
	export let _M_: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	export let _DAB_: T_GLOBAL_ENTITIES[] | undefined = undefined;
	let active = 'page'; // page | form | inject
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'wc -- ax DRAWER', false, 'MOUNT', true);
	});

	import { page } from '$app/stores';
	import { Content, Header, Title } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import AxFormDbInjector from 'app/components/toucherterre/cms/frame-pages/widgets/form-injector/AxFormDbInjector.svelte';
	import AxInputValue from 'app/components/toucherterre/cms/frame-pages/widgets/form-inputValue/AxInputValue.svelte';
	import AxPanelsAddEdit from 'app/components/toucherterre/cms/frame-pages/widgets/form/AxPanelsAddEdit.svelte';
	import { AX_CONST__FRAME_MENU_cms } from 'app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_cms';
	import { axlog } from 'app/utils/axLog';
	import { isEntityEvent, isEntityPost } from 'app/utils/guards';
	import { onMount } from 'svelte';
	import DrawerMenuItem from './menu-item/AxDrawerMenuitem.svelte';
</script>
