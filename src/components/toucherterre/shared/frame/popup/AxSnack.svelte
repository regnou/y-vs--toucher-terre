<!-- on:SMUISnackbar:closed={handleClosedStacked} -->
<!-- ######################################## -->
<!-- tip-SASS: we use custom sass functions  -->
<!-- ######################################## -->
<Snackbar
	bind:this={snackbar}
	timeoutMs={4000}
	class={'ax-snack-' + $AX_STORE__UI_ISOPEN_snack.type}
>
	<Label>{$AX_STORE__UI_ISOPEN_snack.text}</Label>
	<Actions>
		<IconButton
			class="material-icons"
			title="Dismiss">close</IconButton
		>
	</Actions>
</Snackbar>

<script lang="ts">
	// TOLERATED-BUG-TYPE
	// let snackbar: Snackbar = null;
	let snackbar: any = null;
	onMount(() => {
		axlog('🍃', $page.url.pathname, 'wc -- ax snack', false, 'MOUNT', true);
	});
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';
	import { AX_STORE__UI_ISOPEN_snack } from 'app/stores/AX_STORE__UI_isopen';
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	$: if ($AX_STORE__UI_ISOPEN_snack.open && snackbar) {
		snackbar.open();
	}
</script>
