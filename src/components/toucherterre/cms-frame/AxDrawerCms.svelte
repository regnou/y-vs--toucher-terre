<!-- ####################################################### -->
<!-- DRAWER CMS                              -->
<!-- ####################################### -->
<Header>
	<Title class=" text-center ">
		-
		<a
			class="hover:bg-black hover:text-white"
			rel="noreferrer"
			target="_blank"
			href="/{$page.url.pathname.replace('/cms/dyn/', '')}">{$page.url.pathname.replace('/cms/dyn/', '').replace('-', ' ').toUpperCase()}</a
		>
		-
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
<Content class="overflow-x-hidden overflow-y-scroll bg-gray-300">
	{#if active === 'page'}
		<!-- ................. -->
		<!-- PAGE -->
		<!-- ................. -->
		<List class="">
			{#each AX_CONST__FRAME_MENU__cms as menu (menu.title)}
				<!-- isDark={true} -->
				<DrawerMenuItem menu={{ title: menu.title, url: `/cms/dyn${menu.url}`, img: menu.img }} />
			{/each}
		</List>
	{:else if active === 'edit-add'}
		<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
		<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
		<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
		<!-- ................. -->
		<!-- EDIT-ADD  -->
		<!-- ................. -->
		{#if $AX_STORE__CONTENT && $AX_STORE__CONTENT.length}
			<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴 DYN-PAGE 🌴🌴🌴🌴🌴🌴🌴🌴 -->
			<!-- il faut voire la nature du $AX_STORE__CONTENT -->
			{#if isEntityEvents($AX_STORE__CONTENT) || isEntityPosts($AX_STORE__CONTENT)}
				<AxPanelsAddEdit />
			{:else if isEntityInputValues($AX_STORE__CONTENT)}
				<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴 STATIC-PAGE 🌴🌴🌴🌴🌴🌴🌴🌴 -->
				<!-- tip: possibilite de le mettre ds un pannel -->
				<!-- <Content class="space-y-5 bg-blue-800"> -->
				<!-- {#each Object.entries(item) as [key, prop], pos} -->
				{#each $AX_STORE__CONTENT as entity, pos (entity.idDoc)}
					<AxInputValue bind:ivItm={entity} />
				{/each}
			{/if}
		{/if}
		<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
		<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
		<!-- 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴 -->
	{:else if active === 'inject'}
		<!-- ................. -->
		<!-- INJECT  -->
		<!-- ................. -->
		<AxFormDbInjector />
	{/if}
</Content>
<!-- <Separator /> -->
<!-- <Group> -->
<!-- <DrawerMenuItem url={'/admin'} menu={'Tableau de bord'} /> -->
<!-- <Separator />
	<Subheader>Pages</Subheader>
	<Separator /> -->
<!-- <DrawerMenuItem url={'/cms/dyn'} menu={'Toutes les pages'} /> -->
<!-- QUICK LINKS PAGES EDIT -->
<!-- <DrawerMenuItem href={'/site/post-new'} text={'Ajouter'} /> -->
<!-- <DrawerMenuItem href={'/cms/dyn-tag'} text={'Catégories'} /> -->
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
<!-- // export let $AX_STORE__CONTENT__DB: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	// export let $AX_STORE__CONTENT: T_GLOBAL_ENTITIES[] | undefined = undefined;
	 -->

<!-- </Header> -->

<!-- style="background:var(--mdc-theme-text-primary-on-background);" -->
<script lang="ts">
	let active = 'page'; // page | form | inject
	onMount(() => {
		axlog(AX_STORE__CONTENT, $page.url.pathname, 'wc -- ax DRAWER', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import { Content, Header, Title } from '@smui/drawer';
	import List from '@smui/list';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import AxFormDbInjector from 'app/components/toucherterre/cms-frame/widgets/form-injector/AxFormDbInjector.svelte';
	import AxInputValue from 'app/components/toucherterre/cms-frame/widgets/form-inputValue/AxInputValue.svelte';
	import { AX_CONST__FRAME_MENU__cms } from 'app/0-config/config-frame/AX_CONST__FRAME_MENU__cms.json';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityEvents, isEntityPosts, isEntityInputValues } from 'app/lib/utils/guards';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
	import DrawerMenuItem from '../shared-frame-widgets/AxDrawerMenuitem.svelte';
	import AxPanelsAddEdit from './widgets/form-addEdit/AxPanels_AddEdit.svelte';
</script>
