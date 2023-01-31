<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Item1 from '../Item1.svelte';

	const HEADER_H = 16;
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

	import Drawer from '../../shared/layout/2-drawer/DrawerAx.svelte';
	let prominent = false;
	let dense = false;
	let secondaryColor = false;
</script>

<Item1 {imgBg}>
	<Drawer>
		<slot slot="layout1" />
	</Drawer>
</Item1>
