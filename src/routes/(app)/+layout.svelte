<!-- +################################### -->
<!-- LAYOUT (APP)                         -->
<!-- +################################### -->
<AxFrameapp>
	<slot />
</AxFrameapp>

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, '### LAYOUT (app-only) ###');
	});
	import { page } from '$app/stores';
	import AxFrameapp from 'app/components/toucherterre/app-frame/AxFrameApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';

	// beforeNavigate(() => {
	// 	// tip: from admin to app, the drawer stays open
	// 	$AX_STORE__UI_ISOPEN_drawer = false;
	// 	console.debug('before', $AX_STORE__UI_ISOPEN_drawer);
	// });
</script>
