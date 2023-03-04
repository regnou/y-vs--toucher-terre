<!-- ####################################################### -->
<!-- 🛣️ route: cms-BLOG -->
<!-- ####################################################### -->
<BlogApp />

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'BLOG ');
	});
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { page } from '$app/stores';
	import BlogApp from 'app/components/toucherterre/app-frame/content/BlogApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { onMount } from 'svelte';
</script>
