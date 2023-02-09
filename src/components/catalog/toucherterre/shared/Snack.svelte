<script lang="ts">
	import { STORE_UI__SNACK_IS_OPEN } from '@app/stores/storeUi';
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';
	import Button from '@smui/button';

	// export let type;
	// export let text;
	// export let open = false;

	let snackbar: Snackbar = null;

	// let snackOpen = $.open;
	// let snackType = $STORE_UI__SNACK_IS_OPEN.type;
	// let snackText = $STORE_UI__SNACK_IS_OPEN.text;

	$: if ($STORE_UI__SNACK_IS_OPEN.open && snackbar) {
		snackbar.open();
		// open = false;
		$STORE_UI__SNACK_IS_OPEN.open = false;
	}
</script>

<Snackbar bind:this={snackbar} timeoutMs={4000} class="">
	<Label>{$STORE_UI__SNACK_IS_OPEN.text}</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>

<!-- {:else if type === 'warn'}
		<Snackbar bind:this={snackbarAll} class="demo-warning">
			<Label>Ok, it looks like that thing you tried to do might not have work.</Label>
			<Actions>
				<IconButton class="material-icons" title="Dismiss">close</IconButton>
			</Actions>
		</Snackbar>
	{:else if type === 'error'}
		<Snackbar bind:this={snackbarAll} class="demo-error">
			<Label
				>That thing you tried to do didn't work. Honestly, I'm not sure why you even tried.</Label
			>
			<Actions>
				<IconButton class="material-icons" title="Dismiss">close</IconButton>
			</Actions>
		</Snackbar>
	{/if} -->
<style lang="postcss">
	/* .mdc-snackbar.demo-success {
		@apply bg-green-400;
	} */
</style>
