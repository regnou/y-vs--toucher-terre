<!-- DRAWER CMS -->
<!-- ######################################################## -->

<Header>
	<!-- ................. -->
	<Title>AXELO</Title>
	<Subtitle>1.0</Subtitle>
</Header>
<Content class="w-96 bg-red-400">
	<!-- ................. -->
	<DrawerMenuItem
		isDark={true}
		menu={{ title: 'www.toucher-terre', url: `${AX__CONST__homeUrl}`, img: '/media/favicon.png' }}
	/>

	<Separator />

	<TabBar
		tabs={['page', 'form', 'autre']}
		let:tab
		bind:active
	>
		<Tab {tab}>
			<Label>{tab}</Label>
		</Tab>
	</TabBar>

	{#if active === 'page)'}
		<!-- content here -->
		<List>
			{#each AX__HEADERMENU_APP as menu (menu.title)}
				<DrawerMenuItem
					isDark={true}
					menu={{ title: menu.title, url: `/cms/site${menu.url}`, img: menu.img }}
				/>
			{/each}
		</List>
	{:else if active === 'form'}
		<!-- else if content here -->
	{:else if active === 'autre'}
		<!-- else content here -->
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

	<Separator />
	<Subheader tag="h6">Comptes</Subheader>
	<!-- <DrawerMenuItem href={'/site/users'} text={'Tous les comptes'} /> -->
	<!-- TODO - remettre -->
	<!-- <DrawerMenuItem url={'/site/profile'} menu={'Profil'} /> -->
	<!-- </Group> -->

	<Separator />
</Content>

<script lang="ts">
	import { AX__CONST__homeUrl } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__homeUrl';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import { Content, Header, Title, Subtitle } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import DrawerMenuItem from './menu-item/AxDrawermenuItem.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Button from '@smui/button';

	let active = 'page'; // page | form
	// ------------------------------------------------
</script>
