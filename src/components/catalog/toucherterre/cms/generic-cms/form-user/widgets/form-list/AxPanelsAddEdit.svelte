<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import PanelAdd from './AxPanelAdd.svelte';
	import PanelEdit from './AxPanelEdit.svelte';
	import { isEntity, isInputValue } from '@app/utils/guards';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	import { get } from 'svelte/store';

	// ........................................................
	export let megaconfig;
	const hackStore = megaconfig.conf__store; // pur hack le $ qui marche pas sur .
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
	{#if isEntity($hackStore)}
		<PanelAdd {megaconfig} />
	{/if}

	<!-- --------------- -->
	<!-- EDIT -->
	<!-- --------------- -->
	<!-- ######################## -->
	<!-- POUR CHAQUE ITEM -->
	<!-- ######################## -->
	<!-- todo - grouper ces 2 en 1 ? -->
	<!-- {#if isEntity($hackStore)} -->
	<!-- {#if isEntityEvent($hackStore) || isEntityPost($hackStore)} -->
	<!-- (pos_pageItem + '_' + pos_item) -->
	<!-- $hackStore -->
	{#each $hackStore as item, pos_item (pos_item)}
		<!-- {#each $hackStore as item, pos_item (pos_item)} -->
		<!-- {#each $megaconfig.conf__store as item, pos_item (pos_item)} -->
		<!--  -->
		{#if isEntity($hackStore)}
			<PanelEdit {megaconfig} {pos_item} bind:item />
			<!--  -->
		{:else if isInputValue($hackStore)}
			<AxInputValue bind:ivItm={item} />
			<!--  -->
		{/if}
	{/each}
	<!-- {/if} -->
</Accordion>
