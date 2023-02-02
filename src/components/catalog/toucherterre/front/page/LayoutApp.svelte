<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import LayoutBg1 from '../LayoutBg1.svelte';
	import DrawerFrame from '../../shared/layout/DrawerFrame.svelte';
	import HeaderApp from '../../shared/layout/HeaderApp.svelte';

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
		imgBg = menuUrl;
	}

	let prominent = false;
	let dense = false;
	let secondaryColor = false;
</script>

<!--  -->
<LayoutBg1 {imgBg}>
	<!--  -->
	<DrawerFrame isAdmin={false}>
		<slot slot="header-1" name="header-0">
			<HeaderApp />
		</slot>

		<slot slot="content-1">
			<slot />
		</slot>
	</DrawerFrame>
	<!--  -->
</LayoutBg1>
