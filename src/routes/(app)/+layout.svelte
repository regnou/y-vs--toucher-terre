<!-- +################################### -->
<!-- LAYOUT (APP)                         -->
<!-- +################################### -->
<AxFrameapp>
	<slot />
</AxFrameapp>

<script lang="ts">
	import { page } from '$app/stores';
	import AxFrameapp from 'app/components/toucherterre/app/AxFrameapp.svelte';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog(undefined, $page.url.pathname, 'LAYOUT-app (closeDrawer=yes)');
	});
</script>
