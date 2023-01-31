<script>
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	let topAppBar;
	export let open = true;
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';
	import { Image } from '@smui/image-list';
	import ContainerItem1 from '../../../front/ContainerItem1.svelte';
	import Header from '../../../front/Header.svelte';
	import { APP_HEADER_MENU } from '@app/data/MENUS/HEADER_MENU__APP';
	let clicked = 'nothing yet';
	const HEADER_H = 16;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed" class="bg-transparent">
	<Row>
		<Section>
			<IconButton
				style="color:var(--wa-color-1)"
				class="material-icons"
				on:click={() => (open = !open)}
				>menu
			</IconButton>
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
			<!-- -- -->
			<!-- -- -->
			<Header h={HEADER_H} menus={APP_HEADER_MENU} />
			<!-- -- -->
			<!-- -- -->
		</Section>
	</Row>
</TopAppBar>
<!-- top-app-bar--content -->
<AutoAdjust {topAppBar}>
	<ContainerItem1 hh={'space.' + HEADER_H}>
		<slot name="layout2" />
	</ContainerItem1>
</AutoAdjust>
