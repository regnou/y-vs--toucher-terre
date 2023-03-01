<!-- +################################### -->
<!-- ####################################### -->
<!-- LAYOUT BG -->
<!-- ####################################### -->
<!-- this is a background widget -->
<!-- tip: scroll de la page selon overflow ici -->
<div
	class="fixed   inset-0 h-full w-full overflow-y-auto bg-orange-800  bg-cover bg-fixed bg-left-bottom"
	style="background-image: url({imgBg});
	 border:{AX_CONST__FRAME_isDebugBorder ? '4px solid yellow' : 'none'}"
>
	<slot />
</div>

<!-- class=" h-full w-full border-4  bg-cover bg-fixed bg-left-bottom bg-no-repeat" -->

<!-- tuto bg: https://www.youtube.com/watch?v=ywLgqJjLUm4 -->
<script lang="ts">
	let imgBg = '/media/bg/bg-1.jpg'; // tip: do not flash
	// --------------------------------------------------------------------------
	onMount(() => {
		axlog('🍃', $page.url.pathname, 'wc -- axLayoutBg', false, 'MOUNT', true);
		// $AX_STORE__UI_ISOPEN_drawer = false;
	});

	import { AX_CONST__FRAME_isDebugBorder } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { axlog } from 'app/utils/axLog';
	// -------------------------------
	// const BG = {
	// 	'/acceuil': { url: '/media/bg/bg-1.jpg' }
	// 	// '/la-demarche': { url: '/media/bg/bg-2.jpg' },
	// 	// '/blog': { url: '/media/bg/bg-3.jpg' },
	// 	// '/event': { url: '/media/bg/bg-1.jpg' },
	// 	// '/newsletter': { url: '/media/bg/bg-1.jpg' }
	// };
	// $: {
	// const menu: string = isAdmin ? $page.url.pathname.replace('/cms/app', '') : $page.url.pathname;
	// const imgUrl: string = BG[menu] ? BG[menu].url : 'N/A';
	// imgBg = imgUrl;
	// console.debug('menu + BG[menu]', menu, BG[menu]);
	// }
</script>
