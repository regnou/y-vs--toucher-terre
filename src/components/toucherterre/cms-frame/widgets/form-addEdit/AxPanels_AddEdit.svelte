<!-- ####################################################### -->
<!-- PANEL ADD-EDIT                          -->
<!-- ####################################### -->
{#if $AX_STORE__CONTENT.length}
	<Accordion class="  text-black ">
		<PanelAdd />
		<!-- tip: we need pos, in order to delete actions -->
		{#each $AX_STORE__CONTENT as entity, pos (entity.idDoc)}
			<PanelEdit
				bind:entity
				{pos}
			/>
		{/each}
	</Accordion>
{/if}

<script lang="ts">
	// export let $AX_STORE__CONTENT__DB: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	// export let $AX_STORE__CONTENT: T_GLOBAL_ENTITIES[] | undefined = undefined;
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ax panel add-edit', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import Accordion from '@smui-extra/accordion';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { onMount } from 'svelte';
	import PanelAdd from './AxPanelAdd.svelte';
	import PanelEdit from './AxPanelEdit.svelte';
	// $: {
	// 	console.debug('################ panel-add-edit :: $AX_STORE__CONTENT');
	// 	console.dir($AX_STORE__CONTENT);
	// 	console.debug('################');
	// }
</script>
