<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import PanelAdd from './AxPanelAdd.svelte';
	import PanelEdit from './AxPanelEdit.svelte';
	import { STORE__PAGEITEMS } from '@app/stores/store';
	import { isEntity } from '@app/utils/guards';

	// ........................................................
	export let megaconfig;
	// export let listItems: T_genericItem[];
	// export let pos_pageItem: number; // index in the STORE
</script>

<!-- ######################## -->
<!-- POUR x1 PAGE-ITEM -->
<!-- ######################## -->
<Accordion id="ax-panelsaddedit-1">
	<!-- --------------- -->
	<!-- ADD -->
	<!-- --------------- -->
	<PanelAdd {megaconfig} />

	<!-- --------------- -->
	<!-- EDIT -->
	<!-- --------------- -->
	<!-- ######################## -->
	<!-- POUR CHAQUE ITEM -->
	<!-- ######################## -->
	<!-- todo - grouper ces 2 en 1 ? -->
	{#if isEntity($STORE__PAGEITEMS)}
		<!-- {#if isEntityEvent($STORE__PAGEITEMS) || isEntityPost($STORE__PAGEITEMS)} -->
		<!-- (pos_pageItem + '_' + pos_item) -->
		{#each $STORE__PAGEITEMS as item, pos_item (pos_item)}
			<PanelEdit {pos_item} bind:item />
		{/each}
	{/if}
</Accordion>
