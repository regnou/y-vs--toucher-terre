<script>
	//top-app-bar
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	// let topAppBar: TopAppBarComponentDev;
	let topAppBar;
	// new
	export let open = false;
	// export let active;
	//top app bar
	import { mdiFormatColorFill, mdiWrench, mdiCurrencyUsd } from '@mdi/js';
	import Fab from '@smui/fab';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Image } from '@smui/image-list';
	import BtnLogin from '../../../front/BtnLogin.svelte';
	import BtnCart from '../../../front/BtnCart.svelte';
	import Header from '../../../front/Header.svelte';
	import ContainerItem1 from '../../../front/ContainerItem1.svelte';
	import { APP_HEADER_MENU } from '../../../front/page/APP_HEADER_MENU';
	let clicked = 'nothing yet';
	const HEADER_H = 16;
</script>

<!-- &&&&  -->
<!-- &&&& 2 - top-app-bar -->
<!-- &&&&  -->
<!-- top-app-bar--header -->

<TopAppBar bind:this={topAppBar} variant="fixed" class="bg-transparent">
	<Row>
		<Section>
			<!--  -->
			<IconButton
				style="color:var(--wa-color-1)"
				class="material-icons"
				on:click={() => (open = !open)}
				>menu
			</IconButton>
			<!--  -->
			<Button on:click={() => console.log('p')} class="overflow-hidden">
				<Image
					class="aspect-square w-10 object-cover"
					src="/media/favicon.png"
					alt="web agency logo"
				/>
				<!-- <Label class="text-wa-2" title="Toucher Terre" /> -->
				<!-- <Title class="text-wa-2" title="Agence Web">Agence Web</Title> -->
			</Button>
			<!--  -->
		</Section>
		<Section>
			<Header h={HEADER_H} menus={APP_HEADER_MENU} />
		</Section>
	</Row>
</TopAppBar>
<!-- top-app-bar--content -->
<AutoAdjust {topAppBar}>
	<ContainerItem1 hh={'space.' + HEADER_H}>
		<slot name="layout2" />
	</ContainerItem1>
</AutoAdjust>
