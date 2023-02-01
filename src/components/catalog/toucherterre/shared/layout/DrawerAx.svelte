<script>
	import { browser } from '$app/environment';
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import Scrim from '@smui/drawer/src/Scrim.svelte';
	import TopAppBarAx from './TopAppBarAx.svelte';
	import List, { Group, Subheader, Item, Text } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import { DATAJSON__HEADERMENU__APP } from '@app/data/MENUS/HEADER_MENU__APP';

	let open = false;
	let active = 'acceuil';
	let dynVariant = 'dismissible'; // 'modal', 'dismissible'
	function setActive(value) {
		active = value;
	}
	//sm 640 | md 768   |    lg 1024 | xl 1280 | 2xl 1536
	const xs = '(max-width: 639px)';
	const sm = '(min-width: 640px) and (max-width: 767px)';
	const md = '(min-width: 768px) and (max-width: 1023px)';
	const lg = '(min-width: 1024px) and (max-width: 1079px)';
	const xl = '(min-width: 1080px) and (max-width: 1535px)';
	const xxl = '(min-width: 1536px) ';
	let isXs = matches(xs);
	let isSm = matches(sm);
	let isMd = matches(md);
	let isLg = matches(lg);
	let isXl = matches(xl);
	let isXxl = matches(xxl);
	let drawer;
	// annexe reactive 1
	$: {
		console.log('open: ', open);
		console.log('$1:', dynVariant);
		if (isXs) {
			dynVariant = 'modal';
		} else {
			dynVariant = 'dismissible';
		}
		console.log('$2:', dynVariant);
	}
	function handleResize(e) {
		isXs = matches(xs);
		isSm = matches(sm);
		isMd = matches(md);
		isLg = matches(lg);
		isXl = matches(xl);
		isXxl = matches(xxl);
	}
	function matches(query) {
		if (browser) {
			return window.matchMedia(query).matches;
		}
	}
	//press esc TO open/close drawer
	function handleNavWithKey(e) {
		if (e.code === 'Escape') {
			open = !open;
		}
	}

	const DATAJSON__HEADER_APP__HEIGHT = 16;
</script>

<svelte:window on:resize={handleResize} on:keydown={handleNavWithKey} />
<!-- <div class="drawer-container"> -->
<!-- <Drawer variant="dismissible" bind:open> -->
<!-- <Drawer variant="modal" fixed={false} bind:open> -->
<!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->

<!--  -->
<!-- DRAWER -->
<!--  -->
<Drawer bind:this={drawer} variant={dynVariant} bind:open id="wa--drawerAx">
	<!-- drawer--header -->
	<Header>
		<Title>TOUCHER TERRE</Title>
		<Subtitle>version 0.0.1</Subtitle>
	</Header>
	<!-- drawer--content (les mens du drawer) -->
	<Content>
		<Separator />
		<Group>
			<!-- <Subheader>Sommaire</Subheader> -->
			<List>
				{#each DATAJSON__HEADERMENU__APP as item}
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
	</Content>
</Drawer>

<!--  -->
<!-- scrim -->
<!--  -->
{#if isXs}
	<Scrim fixed={true} class="opacity-90 backdrop-blur-sm" />
{/if}

<!-- transition:fade={{ duration: 200 }} class="blur-panel z-40" -->

<!--  -->
<!-- MAIN CONTENT -->
<!--  -->
<AppContent class="">
	<main>
		<!--  -->
		<!-- HEADER + APP -->
		<!--  -->
		<TopAppBarAx bind:active bind:open>
			<!--  -->
			<!-- HEADER -->
			<slot slot="headerMenusCenter-2" name="headerMenusCenter-1" />
			<slot slot="headerMenusRight-2" name="headerMenusRight-1" />

			<!--  -->
			<!-- APP -->
			<slot name="layoutMainContent-1" slot="layoutMainContent-2" />

			<!--  -->
			<!-- <Footer /> -->
		</TopAppBarAx>
	</main>
</AppContent>
