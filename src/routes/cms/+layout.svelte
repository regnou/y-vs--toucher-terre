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
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, '### LAYOUT (cms-only) ###');
	});
	import { page } from '$app/stores';
	import AxFrameCms from 'app/components/toucherterre/cms-frame/Ax1FrameCms.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
