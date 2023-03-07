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
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { onMount } from 'svelte';
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, '/');
	});
</script>
