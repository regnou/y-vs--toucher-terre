<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ContainerItem1 from '../ContainerItem1.svelte';
	import Header from '../Header.svelte';
	import Item1 from '../Item1.svelte';
	import { APP_HEADER_MENU } from './APP_HEADER_MENU';

	const HEADER_H = 16;
	let imgBg = 'N/A';
	const GALLERY: any = {
		'/acceuil': { url: '/media/bg/bg-1.jpg' },
		'/la-demarche': { url: '/media/bg/bg-2.jpg' },
		'/creation-realisation': { url: '/media/bg/bg-3.jpg' },
		'/prochains-rendez-vous': { url: '/media/bg/bg-1.jpg' },
		'/newsletter': { url: '/media/bg/bg-1.jpg' }
	};

	$: {
		const menu: string = $page.url.pathname.replace(base, '');
		const menuUrl = GALLERY[menu] ? GALLERY[menu].url : base;
		// console.log('-- beforeUpdate: ', menu, '--', menuUrl);
		imgBg = menuUrl;
	}

	import IconButton from '@smui/icon-button';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	let prominent = false;
	let dense = false;
	let secondaryColor = false;
</script>

<!-- on:updateBg={onUpdateBg} -->
<Item1 {imgBg}>
	<div class="top-app-bar-container flexor">
		<TopAppBar
			variant="static"
			{prominent}
			{dense}
			color={secondaryColor ? 'secondary' : 'primary'}
		>
			<Row>
				<Section>
					<IconButton class="material-icons">menu</IconButton>
					<Title>Login</Title>
				</Section>
				<!-- <Section align="end" toolbar>
					<IconButton class="material-icons" aria-label="Download">file_download</IconButton>
					<IconButton class="material-icons" aria-label="Print this page">print</IconButton>
					<IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
				</Section> -->
			</Row>
		</TopAppBar>
		<!-- <div class="flexor-content"> -->
		<!-- * -->
		<!-- <main class="main-content"> -->
		<slot />
		<!-- </main> -->
		<!-- * -->
		<!-- </div> -->
	</div>
	<Header h={HEADER_H} menus={APP_HEADER_MENU} />
	<ContainerItem1 hh={'space.' + HEADER_H}>
		<slot />
	</ContainerItem1>
</Item1>
