<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	import { isEntity, isEntityEvent, isEntityPost, isInputValue } from '@app/utils/guards';
	// ...............................................
	export let item: T_ENTITY;
	export let pos_item: number;

	export let megaconfig;
	const hackStore = megaconfig.conf__store; // pur hack le $ qui marche pas sur .
	// export let pos_pageItem; => qd rajoute un level : $hackStore
	let open = false; // remettre ? export let open = type === 'staticpage' ? true : false;
	// let activeTab;
	// -------------------------------------------------------------------
	// DEL
	// -------------------------------------------------------------------
	const del = () => {
		console.debug('🌎🏎️✅ click >> on:del 1 🟡');
		if (confirm("Supprimer l'article ?")) {
			// guard
			if (isEntity($hackStore)) {
				$hackStore.splice(pos_item, 1);
				// refresh (can do diferently - TODO - juste genericStore)
				$hackStore = $hackStore; // refresh ui
				// open = false;
			}
		}
		console.debug('🌎🏎️✅ click << on:del 2 🟨');
	};
</script>

<!-- ######################## -->
<!-- POUR x1 ITEM -->
<!-- ######################## -->
<!-- ACCORDION -->
<Panel square variant="outlined" color="primary" extend {open}>
	<!--  -->
	<Header>
		<span slot="description">
			{#if isEntityPost($hackStore)}
				{item.titlePost.value}
			{:else if isEntityEvent($hackStore)}
				{item.titleEvent.value}
			{/if}
		</span>

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
	<!--  -->
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
