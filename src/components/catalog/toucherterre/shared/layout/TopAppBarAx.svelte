<script>
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	let topAppBar;
	export let open = true;
	import Button from '@smui/button';
	import IconButton from '@smui/icon-button';
	import { Image } from '@smui/image-list';

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

<!--  -->
<!-- HEADER -->
<!--  -->
<TopAppBar
	bind:this={topAppBar}
	variant="fixed"
	class="
border-4
border-blue-800 bg-transparent/40 "
	id="APP_HEADER"
>
	<Row>
		<!--  -->
		<!-- LEFT -->
		<!-- HAMBURGER - fait partis du chassi -->
		<Section class="sm:hidden">
			<IconButton
				id="hamburger"
				style="color:var(--wa-color-1)"
				class="material-icons"
				on:click={() => (open = !open)}
				>menu
			</IconButton>
		</Section>

		<!-- CENTER -->
		<slot name="headerMenusCenter-2" />

		<!-- RIGHT -->
		<slot name="headerMenusRight-2" />
	</Row>
</TopAppBar>
<!--  -->
<!--  -->
<!--  -->
<!-- top-app-bar--content -->
<AutoAdjust {topAppBar} class="border-4 border-blue-800" id="APP_BODY">
	<slot name="layoutMainContent-2" />
</AutoAdjust>
