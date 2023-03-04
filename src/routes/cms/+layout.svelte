<!-- +################################### -->
<!-- LAYOUT (APP)                         -->
<!-- +################################### -->
<AxFrameCms>
	<div slot="app">
		<slot />
	</div>
</AxFrameCms>

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, '### LAYOUT (cms-only) ###');
	});
	import { page } from '$app/stores';
	import AxFrameCms from 'app/components/toucherterre/cms-frame/AxFrameCms.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
