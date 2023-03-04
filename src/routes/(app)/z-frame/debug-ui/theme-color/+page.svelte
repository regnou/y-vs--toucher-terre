<ThemeDebugColor />

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'THEME-COLOR');
	});
	import { page } from '$app/stores';
	import ThemeDebugColor from 'app/components/toucherterre/zdebugui/ThemeDebugColor.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
