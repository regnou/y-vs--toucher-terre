<!-- on:SMUISnackbar:closed={handleClosedStacked} -->
<!-- ####################################### -->
<!-- tip-SASS: we use custom sass functions -->
<!-- ####################################### -->
<Snackbar
	bind:this={snackbar}
	timeoutMs={4000}
	class={'ax-snack-' + $STORE_UI__SNACK_IS_OPEN.type}
>
	<Label>{$STORE_UI__SNACK_IS_OPEN.text}</Label>
	<Actions>
		<IconButton
			class="material-icons"
			title="Dismiss">close</IconButton
		>
	</Actions>
</Snackbar>

<script lang="ts">
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUiItems';
	import IconButton from '@smui/icon-button';
	//-------------------------------------------------------
	// TOLERATED-BUG-TYPE
	// let snackbar: Snackbar = null;
	let snackbar: any = null;
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	$: if ($STORE_UI__SNACK_IS_OPEN.open && snackbar) {
		snackbar.open();
		// BUG - how to stop opening ?
		// $STORE_UI__SNACK_IS_OPEN.open = false;
	}
</script>
