<!-- +################################### -->
<!-- ####################################### -->
<!-- LAYOUT BG                               -->
<!-- ####################################### -->
<!-- this is a background widget             -->
<!-- tip: scroll de la page selon overflow ici -->
<div
	class="fixed   inset-0 h-full w-full overflow-y-auto bg-orange-800  bg-cover bg-fixed bg-left-bottom"
	style="background-image: url({imgBg});
	 border:{AX_CONST__FRAME__isDebugBorder ? '4px solid yellow' : 'none'}"
>
	<slot />
</div>
<!-- class=" h-full w-full border-4  bg-cover bg-fixed bg-left-bottom bg-no-repeat" -->
<!-- // -------------------------------
// const BG = {
// 	'/acceuil': { url: '/media/bg/bg-1.jpg' }
// 	// '/la-demarche': { url: '/media/bg/bg-2.jpg' },
// 	// '/blog': { url: '/media/bg/bg-3.jpg' },
// 	// '/event': { url: '/media/bg/bg-1.jpg' },
// 	// '/newsletter': { url: '/media/bg/bg-1.jpg' }
// };
// $: {
// const menu: string = isAdmin ? $page.url.pathname.replace('/cms/dyn', '') : $page.url.pathname;
// const imgUrl: string = BG[menu] ? BG[menu].url : 'N/A';
// imgBg = imgUrl;
// console.debug('menu + BG[menu]', menu, BG[menu]);
// } -->

<!-- tuto bg: https://www.youtube.com/watch?v=ywLgqJjLUm4 -->
<script lang="ts">
	let imgBg = AX_CONST__FRAME__frameDir + 'bg/bg-1.jpg'; // tip: do not flash
	//
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ax LayoutBg', false, 'MOUNT', true);
		// $AX_STORE__UI_ISOPEN_drawer = false;
	});
	import { page } from '$app/stores';
	import { AX_CONST__FRAME__contentDir, AX_CONST__FRAME__frameDir } from 'app/0-config/frame/AX_CONST__FRAME';
	import { AX_CONST__FRAME__isDebugBorder } from 'app/0-config/frame/AX_CONST__FRAME__debug';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
