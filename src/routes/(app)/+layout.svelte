<!-- +################################### -->
<!-- LAYOUT (APP)                         -->
<!-- +################################### -->
<AxFrameapp>
	<slot />
</AxFrameapp>

<script lang="ts">
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, '### LAYOUT (app-only) ###');
	});
	import { page } from '$app/stores';
	import AxFrameapp from 'app/components/toucherterre/app-frame/Ax1FrameApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { onMount } from 'svelte';

	// beforeNavigate(() => {
	// 	// tip: from admin to app, the drawer stays open
	// 	$AX_STORE__UI_ISOPEN_drawer = false;
	// 	console.debug('before', $AX_STORE__UI_ISOPEN_drawer);
	// });
</script>
