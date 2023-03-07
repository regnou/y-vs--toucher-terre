<!-- +################################### -->
<!-- LAYOUT (APP)                         -->
<!-- +################################### -->

<AxFrameCms>
	<div slot="app">
		<!-- <slot /> -->
		{#if $page.url.pathname === '/cms/acceuil'}
			<AcceuilApp />
		{:else if $page.url.pathname === '/cms/la-demarche'}
			<LaDemarcheApp />
		{:else if $page.url.pathname === '/cms/creations-realisations'}
			<BlogApp />
		{:else if $page.url.pathname === '/cms/prochains-rendez-vous'}
			<EventApp />
		{:else}
			<slot />
		{/if}
	</div>
</AxFrameCms>

<script lang="ts">
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, '### LAYOUT (cms-only) ###');
	});
	import { page } from '$app/stores';
	import AcceuilApp from 'app/components/toucherterre/app-frame/content/AcceuilApp.svelte';
	import BlogApp from 'app/components/toucherterre/app-frame/content/BlogApp.svelte';
	import EventApp from 'app/components/toucherterre/app-frame/content/EventApp.svelte';
	import LaDemarcheApp from 'app/components/toucherterre/app-frame/content/LaDemarcheApp.svelte';
	import AxFrameCms from 'app/components/toucherterre/cms-frame/Ax1FrameCms.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
