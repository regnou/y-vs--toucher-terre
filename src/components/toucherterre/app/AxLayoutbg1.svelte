<!-- +################################### -->
<!-- ####################################### -->
<!-- LAYOUT BG -->
<!-- ####################################### -->
<!-- this is a background widget -->
<!-- tip: scroll de la page selon overflow ici -->
<div
	id="layoutbg--1"
	class="fixed inset-0 h-full w-full overflow-y-auto  bg-cover bg-fixed bg-left-bottom"
	style="background-image: url({imgBg});
	 border:{AX_CONST__FRAME_isDebugBorder ? '4px solid yellow' : 'none'}"
>
	<slot />
</div>

<!-- class=" h-full w-full border-4  bg-cover bg-fixed bg-left-bottom bg-no-repeat" -->

<!-- tuto bg: https://www.youtube.com/watch?v=ywLgqJjLUm4 -->
<script lang="ts">
	import { page } from '$app/stores';
	import { AX_CONST__FRAME_isDebugBorder } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	// -------------------------------
	export let isAdmin = false;
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
		const menu: string = isAdmin ? $page.url.pathname.replace('/cms/site', '') : $page.url.pathname;

		const imgUrl: string = BG[menu] ? BG[menu].url : 'N/A';
		imgBg = imgUrl;
		console.log('menu + BG[menu]', menu, BG[menu]);
	}
</script>
