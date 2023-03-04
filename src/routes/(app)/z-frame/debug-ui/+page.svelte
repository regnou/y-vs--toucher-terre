<div class="mdc-typography--headline2">DEBUG UI</div>

<div class="grid ">
	<a href="/zdebug/theme-color">COLOR</a>
	<a href="/zdebug/theme-elevation">ELEVATION</a>
	<a href="/zdebug/theme-typo">TYPO</a>
</div>

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'DEBUG-UI');
	});
	import { page } from '$app/stores';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
