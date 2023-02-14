<script lang="ts">
	import { page } from '$app/stores';
	import AxFrame from '../shared/frame/core/AxFrameDrawer.svelte';
	import HeaderApp from '../shared/frame/core/header/HeaderApp.svelte';
	import LayoutBg1 from './layout/LayoutBg1.svelte';
	// ----------------------------------------------------
	let imgBg = 'N/A';
	const BG = {
		'/acceuil': { url: '/media/bg/bg-1.jpg' },
		'/la-demarche': { url: '/media/bg/bg-2.jpg' },
		'/blog': { url: '/media/bg/bg-3.jpg' },
		'/prochains-rendez-vous': { url: '/media/bg/bg-1.jpg' },
		'/newsletter': { url: '/media/bg/bg-1.jpg' }
	};
	// let prominent = false;
	// let dense = false;
	// let secondaryColor = false;
	// .....................................................
	$: {
		const menu: string = $page.url.pathname;
		const menuUrl: string = BG[menu] ? BG[menu].url : 'N/A';
		imgBg = menuUrl;
	}
	// ----------------------------------------------------
</script>

<!-- ############################################### -->
<!-- ############################################### -->
<!-- ROOT-LAYOUT -- APP -->
<!-- ############################################### -->
<!-- ############################################### -->
<LayoutBg1 {imgBg}>
	<!-- ########################################### -->
	<!-- CHASSIS -- APP (le chassis est dans le layout) -->
	<!-- ########################################### -->
	<AxFrame isAdmin={false}>
		<!-- ------------------------------------------ -->
		<!-- SLOT: NON-PREDEFINIS :: 🟨 HEADER_A 🟨 -->
		<!-- ------------------------------------------ -->
		<!-- tip: header-0 is necesary or it will put content in both slots -->
		<!-- ⬛ -->
		<slot slot="plugin--frame-header-1" name="header-0">
			<HeaderApp />
		</slot>
		<!-- ------------------------------------------ -->
		<!-- 🟨 SLOT: BODY -->
		<!-- ------------------------------------------ -->
		<!-- ⬛ -->
		<slot slot="plugin--frame-body-1">
			<!-- 🟢 🟢 🟢 🟢 🟢 🟢 🟢 -->
			<slot />
		</slot>
	</AxFrame>
</LayoutBg1>
