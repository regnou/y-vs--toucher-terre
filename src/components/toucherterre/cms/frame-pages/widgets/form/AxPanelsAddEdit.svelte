<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL ADD-EDIT -->
<!-- ####################################### -->
{#if _DAB_ && _DAB_ && _DAB_.length}
	<Accordion class="  text-black ">
		<!-- {#if isEntity(_DAB_[0])} -->
		<!-- ####################################### -->
		<PanelAdd
			{_M_}
			bind:_DAB_
		/>
		<!-- ####################################### -->
		<!-- {/if} -->

		<!-- AXREMET- l id va par la ? -->
		<!-- {#each _DAB_ as entity, pos (String(pos))} -->
		<!-- tip - HACK - essaie de mettre un STRING (id) au lieu de entity -->
		{#each _DAB_ as entity, pos (entity.idDoc)}
			<!-- {#if isEntity(entity)} -->
			<!-- AXREMET - 
				<!-- ####################################### -->
			<!-- bind - should I bind ? if it
			push on the array...? -->
			<PanelEdit
				{_DAB_}
				{pos}
				bind:item={entity}
			/>
			<!-- ####################################### -->
			<!-- {:else if isInputValue(entity)} -->
			<!-- TODO - strange, it is inside accorden but no bug... -->
			<!-- TODO - test alternative panel and not panel -->
			<!-- <div class="my-5"> -->
			<!-- <AxInputValue -->
			<!-- {pos} -->
			<!-- bind:ivItm={entity} -->
			<!-- /> -->
			<!-- </div> -->
			<!-- {/if} -->
		{/each}
	</Accordion>
{/if}

<script lang="ts">
	export let _M_: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	export let _DAB_: T_GLOBAL_ENTITIES[] | undefined = undefined;
	import { page } from '$app/stores';
	import Accordion from '@smui-extra/accordion';
	import { axlog } from 'app/utils/axLog';
	import { isEntity, isInputValue } from 'app/utils/guards';
	import { onMount } from 'svelte';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	import PanelAdd from './AxPanelAdd.svelte';
	import PanelEdit from './AxPanelEdit.svelte';
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'wc -- ax panel add-edit');
	});
</script>
