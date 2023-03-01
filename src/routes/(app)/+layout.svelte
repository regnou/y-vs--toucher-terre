<!-- +################################### -->
<!-- LAYOUT (APP)                         -->
<!-- +################################### -->
<AxFrameapp>
	<slot />
</AxFrameapp>

<script lang="ts">
	onMount(() => {
		axlog('🍃', $page.url.pathname, '### LAYOUT (app-only) ###');
	});
	import { page } from '$app/stores';
	import AxFrameapp from 'app/components/toucherterre/app/AxFrameapp.svelte';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';

	// beforeNavigate(() => {
	// 	// tip: from admin to app, the drawer stays open
	// 	$AX_STORE__UI_ISOPEN_drawer = false;
	// 	console.debug('before', $AX_STORE__UI_ISOPEN_drawer);
	// });
</script>
