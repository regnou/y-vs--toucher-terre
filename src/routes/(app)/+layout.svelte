<!-- +################################### -->
<!-- LAYOUT (APP) -->
<!-- +################################### -->
<Frameapp>
	<slot />
</Frameapp>

<script lang="ts">
	import { page } from '$app/stores';
	import Frameapp from '@app/components/catalog/toucherterre/app/AxFrameapp.svelte';
	import { AX_STORE__UI_ISOPEN_drawer } from '@app/stores/AX_STORE__UI_isopen';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog(undefined, $page.url.pathname, 'LAYOUT-app');
		$AX_STORE__UI_ISOPEN_drawer = false;
	});
</script>
