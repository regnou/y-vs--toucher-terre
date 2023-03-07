<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL EDIT -->
<!-- ####################################### -->
<!-- x1 ACCORDION-PANEL -->
<!-- {#if $AX_STORE__CONTENT[pos]} -->
{#if entity}
	<Panel
		square
		variant="outlined"
		extend
		bind:open
	>
		<Header class="bg-white">
			<!-- <span slot="description"> -->
			<!-- base guard -->
			<div class="">
				{#if isEntityPost(entity)}
					{entity.titlePost.value}
				{:else if isEntityEvent(entity)}
					{entity.titleEvent.value}
				{/if}
			</div>
			<!-- </span> -->
			<div
				slot="icon"
				class=""
			>
				<!-- <IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton> -->
				<!-- {#if type === 'blog' || type === 'slideshow'} -->
				<!-- preventDefault -->
				<IconButton
					on:click={async () => {
						await ACTION__del(pos);
					}}
				>
					<Icon class="material-icons">delete</Icon>
				</IconButton>
				<!-- {/if} -->
			</div>
		</Header>
		<Content class=" bg-blue-800">
			<!-- {#if isInputValue(entity)}
				{#each entity as ivItm, pos (ivItm.idDoc)}
					<AxInputValue bind:ivItm />
				{/each}
			{/if} -->
			<!-- OBJECT TECNIQ (each prop, is an iv)-->
			{#each Object.entries($AX_STORE__CONTENT[pos]) as [key, prop], idx}
				<AxInputValue bind:ivItm={entity[key]} />
			{/each}
		</Content>
	</Panel>
{/if}

<script lang="ts">
	// export let $AX_STORE__CONTENT[pos]: T_GLOBAL_ENTITIES | undefined = undefined;
	export let pos = 0;
	// todo - I could constraint to event and post ONLY !! (iv are impossible here, because I guard before)
	export let entity: T_GLOBAL_ENTITIES | undefined = undefined; // must bind
	let open = false; // remettre ? export let open = type === 'staticpage' ? true : false;
	//
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ax panel edit', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import { Content, Header, Panel } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityEvent, isEntityPost } from 'app/lib/utils/guards';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { ACTION__del } from 'app/stores/AX_BASE2__STORE_ACTIONS';
	import { onMount } from 'svelte';
	import AxInputValue from '../widgets/AxInputValue.svelte';
</script>
