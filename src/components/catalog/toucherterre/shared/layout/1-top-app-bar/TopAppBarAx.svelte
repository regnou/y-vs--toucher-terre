<script>
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	let topAppBar;
	export let open = true;
	import Button from '@smui/button';
	import IconButton from '@smui/icon-button';
	import { Image } from '@smui/image-list';
	import ContainerItem1 from '../../../front/ContainerItem1.svelte';

	let clicked = 'nothing yet';
	const DATAJSON__HEADER_APP__HEIGHT = 16;
</script>

<!-- <Button on:click={() => console.log('p')} class="overflow-hidden">
				<Image
					class="aspect-square w-10 object-cover"
					src="/media/favicon.png"
					alt="web agency logo"
				/> -->
<!-- <Label class="text-wa-2" title="Toucher Terre" /> -->
<!-- <Title class="text-wa-2" title="Agence Web">Agence Web</Title> -->
<!-- </Button> -->

<TopAppBar bind:this={topAppBar} variant="fixed" class="bg-transparent">
	<Row>
		<Section class="demo sm:hidden">
			<IconButton
				id="hamburger"
				style="color:var(--wa-color-1)"
				class="material-icons"
				on:click={() => (open = !open)}
				>menu
			</IconButton>
		</Section>

		<slot name="headerApp2" />
		<slot name="headerAdmin2" />

		<slot name="headerRightMenus2" />
	</Row>
</TopAppBar>
<!-- top-app-bar--content -->
<AutoAdjust {topAppBar}>
	<!-- hh={'space.' + DATAJSON__HEADER_APP__HEIGHT} -->
	<ContainerItem1>
		<slot name="layout2" />
	</ContainerItem1>
</AutoAdjust>

<style style="">
	/* .demo {
		@apply hidden;
	} */
</style>
