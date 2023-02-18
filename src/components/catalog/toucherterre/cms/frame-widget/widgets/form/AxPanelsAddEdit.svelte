<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import PanelAdd from './AxPanelAdd.svelte';
	import PanelEdit from './AxPanelEdit.svelte';
	import { isEntity, isInputValue } from '@app/utils/guards';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	// ----------------------------------------------------------
	// DUMB (no operation to test, just display)
	// ----------------------------------------------------------
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;
</script>

<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL ADD-EDIT -->
<!-- ####################################### -->
{#if store && store && store.length}
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->

	<!-- ######################## -->
	<!-- POUR x1 PAGE-ITEM -->
	<!-- ######################## -->
	<Accordion id="ax-panelsaddedit--1">
		<!-- --------------- -->
		<!-- ADD -->
		<!-- --------------- -->
		{#if isEntity(store[0])}
			<PanelAdd {megaconfig} />
		{/if}

		<!-- --------------- -->
		<!-- EDIT -->
		<!-- --------------- -->
		<!-- ######################## -->
		<!-- POUR CHAQUE ITEM -->
		<!-- ######################## -->
		<!-- {@debug store} -->

		{#each store as entity, pos_entity}
			{#if isEntity(entity)}
				<PanelEdit pos_item={pos_entity} bind:item={entity} />
			{:else if isInputValue(entity)}
				<AxInputValue bind:ivItm={entity} />
			{/if}
		{/each}
	</Accordion>
{/if}
