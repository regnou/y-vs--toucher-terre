<!-- ####################################################### -->
<!-- FORM INJECTOR                           -->
<!-- ####################################### -->
<div class=" grid grid-flow-col place-items-center gap-2 p-10">
	<!-- GOOD -->
	<Button
		on:click={async () => {
			await ACTION__inject();
		}}
		variant="raised"
	>
		<Label>{'Reset page: ' + $page.url.pathname.replace('/cms/dyn/', '')}</Label>
	</Button>
</div>

<script lang="ts">
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ax form injector', false, 'MOUNT', true);
	});

	import { page } from '$app/stores';
	import Button, { Label } from '@smui/button';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { ACTION__inject } from 'app/stores/AX_BASE2__STORE_ACTIONS';
	import { onMount } from 'svelte';
</script>
