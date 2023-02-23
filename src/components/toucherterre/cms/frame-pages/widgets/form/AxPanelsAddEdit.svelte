<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL ADD-EDIT -->
<!-- ####################################### -->
{#if store && store && store.length}
	<Accordion
		id="ax-accordeon-addedit--1"
		style="color:var(mdc-theme-text-primary-on-light)"
		class=" text-black "
	>
		<!-- --------------- -->
		<!-- ADD -->
		<!-- --------------- -->
		{#if isEntity(store[0])}
			<PanelAdd {megaconfig} />
		{/if}
		<!-- --------------- -->
		<!-- EDIT -->
		<!-- --------------- -->
		{#each store as entity, pos}
			{#if isEntity(entity)}
				<PanelEdit
					pos_item={pos}
					bind:item={entity}
				/>
			{:else if isInputValue(entity)}
				<!-- TODO - strange, it is inside accorden but no bug... -->
				<!-- TODO - test alternative panel and not panel -->
				<AxInputValue
					{pos}
					bind:ivItm={entity}
				/>
			{/if}
		{/each}
	</Accordion>
{/if}

<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import PanelAdd from './AxPanelAdd.svelte';
	import PanelEdit from './AxPanelEdit.svelte';
	import { isEntity, isInputValue } from '@app/utils/guards';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;
</script>
