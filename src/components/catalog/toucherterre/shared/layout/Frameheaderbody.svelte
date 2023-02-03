<script>
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	export let isAdmin = false;
	export let openApp;
	export let openAdmin;
	let topAppBar;

	const toggleOpen = () => {
		if (isAdmin) openAdmin = !openAdmin;
		else openApp = !openApp;
	};
</script>

<!--  -->
<!-- HEADER -->
<!--  -->
<div id="frameheaderbody--1" class="">
	<TopAppBar
		bind:this={topAppBar}
		variant="fixed"
		class="border-4 border-cyan-500 bg-black/80 "
		id="frameheaderbody-header--1"
	>
		<Row>
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

			<!-- reste du header -->
			<slot name="header-2" />
		</Row>
	</TopAppBar>
	<!--  -->
	<!--  -->
	<!--  -->
	<!-- top-app-bar--content -->
	<!-- place-items-center - le centrage du body se fait ici... changer si on ve NON centre -->
	<AutoAdjust {topAppBar} class="border-4 border-cyan-500 " id="frameheaderbody-body--1">
		<main class="m-auto max-w-6xl border-4 border-black p-5">
			<slot name="content-2" />
		</main>
	</AutoAdjust>

	<!-- <Button on:click={() => console.log('p')} class="overflow-hidden">
				<Image
					class="aspect-square w-10 object-cover"
					src="/media/favicon.png"
					alt="web agency logo"
				/> -->
	<!-- <Label class="text-wa-2" title="Toucher Terre" /> -->
	<!-- <Title class="text-wa-2" title="Agence Web">Agence Web</Title> -->
	<!-- </Button> -->
</div>
