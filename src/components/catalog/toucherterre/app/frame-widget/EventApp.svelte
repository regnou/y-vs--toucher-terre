<script lang="ts">
	import Eventcard from '../widgets/Eventcard.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	// ----------------------------------------------------------
	// DUMB (no operation to test, just display)
	// ----------------------------------------------------------
	export let store: I_ENTITY__event[] | undefined = undefined;
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: EVENT APP -->
<!-- ####################################### -->
<main id="wc-app--site-event--1">
	{#if store && store.length}
		<LayoutGrid>
			{#each store as event, ii (ii)}
				<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
					<!-- <div class="demo-cell"> -->
					<Eventcard bind:event />
					<!-- </div> -->
				</Cell>
			{/each}
		</LayoutGrid>
	{/if}
</main>

<style>
	/* .demo-cell { */
	/* height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--mdc-theme-secondary, #333);
		color: var(--mdc-theme-on-secondary, #fff); */
	/* } */
</style>
