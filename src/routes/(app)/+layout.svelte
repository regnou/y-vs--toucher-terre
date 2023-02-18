<script lang="ts">
	import { page } from '$app/stores';
	import Frameapp from '@app/components/catalog/toucherterre/app/Frameapp.svelte';
	import { STORE_UI__DRAWER_IS_OPEN } from '@app/stores/storeUiItems';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';

	onMount(() => {
		axlog(undefined, $page.url.pathname, 'LAYOUT-app');
		$STORE_UI__DRAWER_IS_OPEN = false;
	});
</script>

<!-- +################################### -->
<!-- LAYOUT (APP) -->
<!-- +################################### -->
<Frameapp>
	<slot />
</Frameapp>
