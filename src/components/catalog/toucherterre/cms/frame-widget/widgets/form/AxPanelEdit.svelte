<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import { isEntity, isEntityEvent, isEntityPost } from '@app/utils/guards';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	// -------------------------------------------------------------------
	export let item: T_ENTITY | undefined = undefined;
	export let pos_item: number | undefined = undefined;
	let open = false; // remettre ? export let open = type === 'staticpage' ? true : false;

	// export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;
	// .....................................................................
	// $: store = megaconfig ? megaconfig.conf__store : undefined;

	// let activeTab;
	// -------------------------------------------------------------------
	// DEL
	// -------------------------------------------------------------------
	const del = () => {
		// XXX
		if (!store || !Array.isArray(store) || !pos_item) return;

		console.debug('🌎🏎️✅ click >> on:del 1 🟡');
		if (confirm("Supprimer l'article ?")) {
			// guard
			if (isEntity(store[pos_item])) {
				store.splice(pos_item, 1);
				// refresh (can do diferently - TODO - juste genericStore)
				store = store; // refresh ui
				// open = false;
			}
		}
		console.debug('🌎🏎️✅ click << on:del 2 🟨');
	};
</script>

<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL EDIT -->
<!-- ####################################### -->

<!-- ######################## -->
<!-- POUR x1 ITEM -->
<!-- ######################## -->
<!-- ACCORDION -->
{#if item}
	<Panel square variant="outlined" color="primary" extend {open}>
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
				<IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton>
				<!-- {#if type === 'blog' || type === 'slideshow'} -->
				<IconButton on:click={del}>
					<Icon class="material-icons">delete</Icon>
				</IconButton>
				<!-- {/if} -->
			</div>
		</Header>
		<Content>
			<!-- <div class="space-y-10"> -->
			<!-- <div class="space-y-10"> -->
			<!-- ######################## -->
			<!-- POUR CHAQUE PROP -->
			<!-- ######################## -->
			<!--  pour tous les fields de l item -->
			<!-- (si item == post => slug, title, body) -->
			<!-- {#each Object.entries(item) as [key, prop], index (key)} -->
			{#each Object.entries(item) as [key, prop]}
				<AxInputValue bind:ivItm={item[key]} />
			{/each}
			<!-- </div> -->
			<!-- </div> -->
		</Content>
	</Panel>
{/if}
