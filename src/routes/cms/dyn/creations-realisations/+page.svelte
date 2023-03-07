<!-- ####################################################### -->
<!-- 🛣️ route: cms-BLOG -->
<!-- ####################################################### -->
<BlogApp />

<script lang="ts">
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'BLOG ');
	});
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { page } from '$app/stores';
	import BlogApp from 'app/components/toucherterre/app-frame/content/BlogApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { onMount } from 'svelte';
</script>
