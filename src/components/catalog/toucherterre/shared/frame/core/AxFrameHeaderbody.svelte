<script lang="ts">
	import TopAppBar, { Row, Section, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	// --------------------------------------------
	export let open;
	// ............................................
	const toggleOpen = () => {
		open = !open;
		console.log('hamburger pressed; open: ', open);
	};
	let topAppBar;
	// --------------------------------------------
</script>

<!-- #######################################################  -->
<!-- #######################################################  -->
<!-- FRAME HEADER+BODY -->
<!-- #######################################################  -->
<!-- #######################################################  -->

<!-- ####################################################### -->
<!-- HEADER -->
<!-- ####################################################### -->
<TopAppBar bind:this={topAppBar} variant="fixed" class="border-4 border-red-500 bg-black/80 ">
	<Row>
		<!-- =========== -->
		<!-- HAMBURGER - fait partis du chassi -->
		<!-- =========== -->
		<Section class="mdc-top-app-bar__section--align-start md:hidden">
			<IconButton style="color:var(--wa-color-1)" class="material-icons" on:click={toggleOpen}
				>menu
			</IconButton>
		</Section>

		<!-- ------------------------------------------ -->
		<!-- SLOT: HEADER 2 (HeaderApp/Cms s injecte ici)-->
		<!-- ------------------------------------------ -->
		<!-- reste du header -->
		<!-- END SLOTTING... -->
		<slot name="plugin--frame-header-2" />
	</Row>
</TopAppBar>

<!-- ####################################################### -->
<!-- BODY -->
<!-- ####################################################### -->
<!-- top-app-bar--content -->
<!-- place-items-center - le centrage du body se fait ici... changer si on ve NON centre -->
<!-- le conteneur root du content -->
<AutoAdjust {topAppBar} class="border-4 border-cyan-500 ">
	<!-- en purple, il s agit de la max largeur... -->
	<main class="m-auto max-w-6xl border-4 border-purple-500 ">
		<!-- ------------------------------------------ -->
		<!-- SLOT: BODY 2 -->
		<!-- ------------------------------------------ -->
		<!-- 🔴 -->
		<slot name="plugin--frame-body-2" />
		<!-- 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 -->
	</main>
</AutoAdjust>

<!-- <Button on:click={() => console.debug('🚔')} class="overflow-hidden">
				<Image
					class="aspect-square w-10 object-cover"
					src="/media/favicon.png"
					alt="web agency logo"
				/> -->
<!-- <Label class="text-wa-2" title="Toucher Terre" /> -->
<!-- <Title class="text-wa-2" title="Agence Web">Agence Web</Title> -->
<!-- </Button> -->
