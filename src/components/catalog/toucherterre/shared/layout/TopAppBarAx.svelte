<script>
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	let topAppBar;
	export let isAdmin = false;
	export let openApp;
	export let openAdmin;

	const toggleOpen = () => {
		if (isAdmin) openAdmin = !openAdmin;
		else openApp = !openApp;
	};
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
	class="border-4 border-blue-800 bg-transparent/40 "
	id="HEADER_APP"
>
	<Row>
		<!-- {#if !isAdmin} -->
		<!--  -->
		<!-- LEFT -->
		<!-- <slot name="headerMenusLeft-2" /> -->
		<!-- HAMBURGER - fait partis du chassi -->
		<Section class=" md:hidden">
			<IconButton
				id="hamburger"
				style="color:var(--wa-color-1)"
				class="material-icons"
				on:click={toggleOpen}
				>menu
			</IconButton>
		</Section>
		<!-- {/if} -->

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
