<!-- +################################### -->
<!-- LAYOUT (APP)                         -->
<!-- +################################### -->
<AxFrameapp>
	{#if $page.url.pathname === '/acceuil'}
		<AcceuilApp />
	{:else if $page.url.pathname === '/la-demarche'}
		<LaDemarcheApp />
	{:else if $page.url.pathname === '/creations-realisations'}
		<BlogApp />
	{:else if $page.url.pathname === '/prochains-rendez-vous'}
		<EventApp />
	{:else}
		<slot />
	{/if}
</AxFrameapp>

<script lang="ts">
	onMount(() => {
		// 		if ($page.url.pathname === "/acceuil")
		// else if ($page.url.pathname === "/la-demarche")
		// else if ($page.url.pathname === "/creations-realisations")
		// else if ($page.url.pathname === "/prochains-rendez-vous")

		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, '### LAYOUT (app-only) ###');
	});
	// $: console.log($page.url.pathname);
	import AcceuilApp from 'app/components/toucherterre/app-frame/content/AcceuilApp.svelte';
	import { page } from '$app/stores';
	import AxFrameapp from 'app/components/toucherterre/app-frame/Ax1FrameApp.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
	import BlogApp from 'app/components/toucherterre/app-frame/content/BlogApp.svelte';
	import LaDemarcheApp from 'app/components/toucherterre/app-frame/content/LaDemarcheApp.svelte';
	import EventApp from 'app/components/toucherterre/app-frame/content/EventApp.svelte';

	// beforeNavigate(() => {
	// 	// tip: from admin to app, the drawer stays open
	// 	$AX_STORE__UI_ISOPEN_drawer = false;
	// 	console.debug('before', $AX_STORE__UI_ISOPEN_drawer);
	// });
</script>
