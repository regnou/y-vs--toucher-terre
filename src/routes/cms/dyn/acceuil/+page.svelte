<!-- ####################################################### -->
<!-- 🛣️ route: cms-ACCEUIL -->
<!-- ####################################################### -->

<AcceuilApp />

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'ACCEUIL ');
	});
	import { page } from '$app/stores';
	import AcceuilApp from 'app/components/toucherterre/app-frame/content/AcceuilApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
