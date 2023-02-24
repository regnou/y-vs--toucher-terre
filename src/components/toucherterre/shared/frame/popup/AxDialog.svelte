<!-- ######################################## -->
<!-- DIALOG                                   -->
<!-- ######################################## -->
<Dialog
	bind:this={dialog}
	aria-labelledby="simple-title"
	aria-describedby="simple-content"
>
	<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
	<Title id="simple-title">Dialog Title</Title>
	<Content id="simple-content">Super awesome dialog body text?</Content>
	<Actions>
		<!-- on:click={() => (clicked = 'No')} -->
		<Button>
			<Label>No</Label>
		</Button>
		<!-- on:click={() => (clicked = 'Yes')} -->
		<Button>
			<Label>Yes</Label>
		</Button>
	</Actions>
</Dialog>

<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import { AX_STORE__UI_ISOPEN_dialog } from 'app/stores/AX_STORE__UI_isopen';

	// tip: pour controller la dialog, on passe le controler-store
	let dialog: any = null;
	//. . . . . . . . . . . . . . . . . . . . . . . . . . . .
	$: if ($AX_STORE__UI_ISOPEN_dialog.open && dialog) {
		dialog.open();
		// BUG - how to stop opening ?
		// $AX_STORE__UI_ISOPEN_snack.open = false;
	}
</script>
