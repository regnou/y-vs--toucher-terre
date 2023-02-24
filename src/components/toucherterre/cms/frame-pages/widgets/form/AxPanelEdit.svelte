<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL EDIT -->
<!-- ####################################### -->
<!-- x1 ACCORDION-PANEL -->
{#if item}
	<Panel
		square
		variant="outlined"
		extend
		{open}
	>
		<Header>
			<!-- <span slot="description"> -->
			<!-- base guard -->
			{#if item}
				{#if isEntityPost(item)}
					{item.titlePost.value}
				{:else if isEntityEvent(item)}
					{item.titleEvent.value}
				{/if}
			{/if}
			<!-- </span> -->
			<div slot="icon">
				<!-- <IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton> -->
				<!-- {#if type === 'blog' || type === 'slideshow'} -->
				<IconButton on:click={del}>
					<Icon class="material-icons">delete</Icon>
				</IconButton>
				<!-- {/if} -->
			</div>
		</Header>
		<Content>
			{#each Object.entries(item) as [key, prop], pos}
				<AxInputValue
					{pos}
					bind:ivItm={item[key]}
				/>
			{/each}
		</Content>
	</Panel>
{/if}

<script lang="ts">
	import { isEntity, isEntityEvent, isEntityPost } from 'app/utils/guards';
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	// -------------------------------------------------------------------
	export let dataArrDumb: T_pageItemStore[] | undefined = undefined;
	export let item: T_ENTITY | undefined = undefined;
	export let pos_item: number | undefined = undefined;
	let open = false; // remettre ? export let open = type === 'staticpage' ? true : false;
	onMount(() => {
		axlog(dataArrDumb, $page.url.pathname, 'wc -- ax panel edit');
	});
	// let activeTab;
	// -------------------------------------------------------------------
	// DEL
	// -------------------------------------------------------------------
	const del = () => {
		// XXX
		if (!dataArrDumb || !Array.isArray(dataArrDumb) || !pos_item) return;
		console.debug('🌎🏎️✅ click >> on:del 1 🟡');
		if (confirm("Supprimer l'article ?")) {
			// guard
			if (isEntity(dataArrDumb[pos_item])) {
				dataArrDumb.splice(pos_item, 1);
				// refresh (can do diferently - TODO - juste genericStore)
				dataArrDumb = dataArrDumb; // refresh ui
				// open = false;
			}
		}
		console.debug('🌎🏎️✅ click << on:del 2 🟨');
	};
</script>
