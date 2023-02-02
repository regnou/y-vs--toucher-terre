<script>
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import List, { Group, Subheader, Item, Text } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import { DATAJSON__HEADERMENU__ADMIN } from '@app/data/MENUS/HEADER_MENU__ADMIN';

	export let open;
	export let dynVariant; // 'modal', 'dismissible'

	let drawer = null;
	let active = 'acceuil';

	// UTILS
	function setActive(value) {
		active = value;
	}
</script>

<!-- <div class="drawer-container"> -->
<!-- <Drawer variant="dismissible" bind:open> -->
<!-- <Drawer variant="modal" fixed={false} bind:open> -->
<!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->

<!--  -->
<!-- DRAWER -->
<!--  -->
<!-- fixed={false} -->
<Drawer bind:this={drawer} bind:variant={dynVariant} bind:open id="wa--drawerApp">
	<!-- drawer--header -->
	<Header>
		<Title>TOUCHER TERRE</Title>
		<Subtitle>ADMIN 0.0.1</Subtitle>
	</Header>
	<!-- drawer--content (les mens du drawer) -->
	<Content>
		<Separator />
		<Group>
			<Subheader>Articles</Subheader>
			<List>
				{#each DATAJSON__HEADERMENU__ADMIN as item}
					{#if item.submenus}
						<!-- FOR THE ADMIN -->
						<!-- <SubmenuItem menu= submenus={item.submenus} /> -->
					{:else}
						<Item
							href="javascript:void(0)"
							on:click={() => setActive(item.menu)}
							activated={active === item.menu}
						>
							<a href={item.url} class="">
								<Text>{item.menu}</Text>
							</a>
						</Item>
						<!-- <MenuItem img={item.img} url={item.url} menu={item.menu} /> -->
					{/if}
				{/each}
			</List>
		</Group>

		<Separator />
		<Group>
			<Subheader tag="h6">Comptes</Subheader>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('profil')}
				activated={active === 'profil'}
			>
				<a href={'/'} class="">
					<Text>Profil</Text>
				</a>
			</Item>
		</Group>
		<Separator />
	</Content>
</Drawer>

<!-- <div class="drawer-container"> -->
<!-- <Drawer variant="dismissible" bind:open> -->
<!-- <Drawer variant="modal" fixed={false} bind:open> -->
<!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->
