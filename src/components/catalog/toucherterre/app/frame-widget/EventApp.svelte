<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: EVENT APP -->
<!-- ####################################### -->
<main
	id="wc-app--site-event--1"
	class="m-auto max-w-{AX__UI__CONST_maxBodyApp} {AX__UI__CONST_distanceFromHeader}"
>
	{#if store && store.length}
		<LayoutGrid>
			{#each store as event, ii (ii)}
				<Cell spanDevices={{ desktop: 2, tablet: 4, phone: 4 }}>
					<!-- <div class="demo-cell"> -->
					<Eventcard bind:event />
					<!-- </div> -->
				</Cell>
			{/each}
		</LayoutGrid>
	{/if}
</main>

<script lang="ts">
	import Eventcard from '../widgets/Eventcard.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { AX__UI__CONST_distanceFromHeader } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_distanceFromHeader';
	import { AX__UI__CONST_maxBodyApp } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_maxBodyApp';
	export let store: I_ENTITY__event[] | undefined = undefined;
</script>
