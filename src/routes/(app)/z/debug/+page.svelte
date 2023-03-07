<div class="mdc-typography--headline2">DEBUG UI</div>

<div class="grid ">
	<a href="/z/debug/theme-color">COLOR</a>
	<a href="/z/debug/theme-elevation">ELEVATION</a>
	<a href="/z/debug/theme-typo">TYPO</a>
	<a href="/z/debug/grid">GRID</a>
</div>

<script lang="ts">
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'DEBUG-UI');
	});
	import { page } from '$app/stores';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { onMount } from 'svelte';
</script>
