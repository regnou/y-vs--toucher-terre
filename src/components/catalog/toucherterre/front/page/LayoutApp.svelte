<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ContainerItem1 from '../ContainerItem1.svelte';
	import Header from '../Header.svelte';
	import Item1 from '../Item1.svelte';
	import { APP_HEADER_MENU } from './APP_HEADER_MENU';

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
		// console.log('-- beforeUpdate: ', menu, '--', menuUrl);
		imgBg = menuUrl;
	}
</script>

<!-- on:updateBg={onUpdateBg} -->
<Item1 {imgBg}>
	<Header h={HEADER_H} menus={APP_HEADER_MENU} />
	<ContainerItem1 hh={'space.' + HEADER_H}>
		<slot />
	</ContainerItem1>
</Item1>
