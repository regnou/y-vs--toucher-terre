<script lang="ts">
	import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUi';
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';
	//#######################################################
	let snackbar: Snackbar = null;
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
