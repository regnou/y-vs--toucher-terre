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
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';
	import { AX_STORE__UI_ISOPEN_snack } from 'app/stores/AX_STORE__UI_isopen';
	//-------------------------------------------------------
	// TOLERATED-BUG-TYPE
	// let snackbar: Snackbar = null;
	let snackbar: any = null;
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	$: if ($AX_STORE__UI_ISOPEN_snack.open && snackbar) {
		snackbar.open();
		// BUG - how to stop opening ?
		// $AX_STORE__UI_ISOPEN_snack.open = false;
	}
</script>
