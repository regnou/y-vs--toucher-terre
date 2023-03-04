<!-- +################################### -->
<!-- 🛣️ route: LA DEMARCHE                -->
<!-- +################################### -->

<LaDemarcheApp />

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'LA-DEMARCHE');
	});
	import { page } from '$app/stores';
	import LaDemarcheApp from 'app/components/toucherterre/app-frame/content/LaDemarcheApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
