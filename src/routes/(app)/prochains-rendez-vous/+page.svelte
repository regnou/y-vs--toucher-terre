<!-- +################################### -->
<!-- 🛣️ route:  EVENT                     -->
<!-- +################################### -->

<EventApp />

<script lang="ts">
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'EVENT');
	});
	import { page } from '$app/stores';
	import EventApp from 'app/components/toucherterre/app-frame/content/EventApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { onMount } from 'svelte';
</script>
