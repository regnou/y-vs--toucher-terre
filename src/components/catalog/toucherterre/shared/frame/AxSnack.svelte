<script lang="ts">
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	//
	//
	//
	//
	//
	//
	//#######################################################
	// TOLERATED-BUG-TYPE
	// let snackbar: Snackbar = null;
	let snackbar: any = null;

	import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUi';
	import IconButton from '@smui/icon-button';
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	$: if ($STORE_UI__SNACK_IS_OPEN.open && snackbar) {
		snackbar.open();
		$STORE_UI__SNACK_IS_OPEN.open = false;
	}
	//#######################################################
</script>

<Snackbar bind:this={snackbar} timeoutMs={4000} class={'snack-' + $STORE_UI__SNACK_IS_OPEN.type}>
	<Label>{$STORE_UI__SNACK_IS_OPEN.text}</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>
