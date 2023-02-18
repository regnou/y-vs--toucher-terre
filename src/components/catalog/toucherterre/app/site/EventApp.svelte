<script lang="ts">
	import { isEntityEvent } from '@app/utils/guards';
	import Eventcard from '../widgets/Eventcard.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';

	// ----------------------------------------------------------
	// DUMB (no operation to test, just display)
	// ----------------------------------------------------------
	export let store = undefined;
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: EVENT APP -->
<!-- ####################################### -->

<main id="wc-app--site-event--1">
	{#if store && $store && $store.length}
		<!-- {#if isEntityEvent($store)} -->
		<!-- <div id="eventcardlist--1" class="grid grid-flow-col  grid-rows-2"> -->
		<LayoutGrid>
			{#each $store as event, ii (ii)}
				<Cell spanDevices={{ desktop: 3, tablet: 4, phone: 4 }}>
					<!-- <div class="demo-cell"> -->
					<Eventcard bind:event />
					<!-- </div> -->
				</Cell>
			{/each}
		</LayoutGrid>
		<!-- {/if} -->
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
