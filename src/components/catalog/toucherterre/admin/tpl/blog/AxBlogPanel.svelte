<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputAll from '../../layout/3-AxInputAll.svelte';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';

	export let post; // take a reference to the GENERIC_STORE
	export let ii: number;
	// let panelOpens = [false, false, false, false, false];
	let open = false;

	const dispatch = createEventDispatcher();
	const del = () => {
		if (confirm("Supprimer l'article ?")) {
			$STORE_CREATIONREALISATION[0].posts.splice(ii, 1);
			$STORE_CREATIONREALISATION[0].posts = $STORE_CREATIONREALISATION[0].posts;
			open = false;
		}
		// dispatch('delete', {
		// 	ii: ii
		// });
	};
</script>

<!-- {#each item.posts as post, ii} -->
<!-- ACCORDION -->
<Panel square variant="outlined" color="primary" extend bind:open>
	<!--  -->
	<Header>
		<div class="">{post.url}</div>

		<span slot="description">{post.page}</span>

		<div slot="icon" class="">
			<IconButton toggle pressed={(open = !open)}>
				<Icon class="material-icons" on>unfold_less</Icon>
				<Icon class="material-icons">unfold_more</Icon>
			</IconButton>
			<IconButton on:click={del}>
				<Icon class="material-icons">delete</Icon>
			</IconButton>
		</div>
	</Header>
	<!--  -->
	<Content>
		<div class="space-y-10">
			<div class="space-y-10">
				{#each post.inputValues as itm}
					<AxInputAll bind:item={itm} />
				{/each}
			</div>
		</div>
	</Content>
</Panel>
