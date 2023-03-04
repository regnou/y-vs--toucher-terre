<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>
<div class="text-4xl">RACINE du SITE</div>

<script lang="ts">
	import { page } from '$app/stores';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, '/');
	});
</script>
