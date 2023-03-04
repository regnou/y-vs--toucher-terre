<!-- ####################################################### -->
<!-- route: cmd-EVENT                                        -->
<!-- ####################################################### -->
<EventApp />

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'EVENT ');
	});
	import { page } from '$app/stores';
	import EventApp from 'app/components/toucherterre/app-frame/content/EventApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
