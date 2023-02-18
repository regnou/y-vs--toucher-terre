<script lang="ts">
	import { page } from '$app/stores';
	import AxFrame from '../shared/frame/core/AxFrame.svelte';
	import AxDrawerApp from '../shared/frame/core/drawer/AxDrawerApp.svelte';
	import AxDrawerCms from '../shared/frame/core/drawer/AxDrawerCms.svelte';
	import HeaderApp from '../shared/frame/core/header/AxHeaderApp.svelte';
	import LayoutBg1 from './Layoutbg1.svelte';
	// ----------------------------------------------------
	let imgBg = 'N/A';
	const BG = {
		'/acceuil': { url: '/media/bg/bg-1.jpg' },
		'/la-demarche': { url: '/media/bg/bg-2.jpg' },
		'/blog': { url: '/media/bg/bg-3.jpg' },
		'/event': { url: '/media/bg/bg-1.jpg' },
		'/newsletter': { url: '/media/bg/bg-1.jpg' }
	};
	// .....................................................
	$: {
		const menu: string = $page.url.pathname;
		const menuUrl: string = BG[menu] ? BG[menu].url : 'N/A';
		imgBg = menuUrl;
	}
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- FRAME (APP) -->
<!-- ####################################### -->
<LayoutBg1 {imgBg}>
	<AxFrame isAdmin={false}>
		<!-- slot: DRAWER -->
		<!-- ................... -->
		<slot slot="plugin--frame-drawer--1" name="drawer-0">
			<AxDrawerApp />
		</slot>

		<!-- slot: HEADER -->
		<!-- ................... -->
		<!-- tip: header-0 is necesary or it will put content in both slots -->
		<slot slot="plugin--frame-header--1" name="header-0">
			<HeaderApp />
		</slot>

		<!-- ................... -->
		<!-- slot: BODY -->
		<!-- ................... -->
		<slot slot="plugin--frame-body--1">
			<!-- 🟢 🟢 🟢 🟢 🟢 🟢 🟢 -->
			<slot />
		</slot>
	</AxFrame>
</LayoutBg1>
