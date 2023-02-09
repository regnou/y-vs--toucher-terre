<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputAll from '../../layout/sublayout/items/AxInputAll.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Textfield from '@smui/textfield';

	export let type;
	// remettre
	// export let open = type === 'staticpage' ? true : false;
	export let open = false;
	export let GENERIC_STORE;
	// export let post = null; // take a reference to the GENERIC_STORE
	export let pos_blog: number = 0;
	export let pos_post: number = 0;
	let activeTab;
	// $: console.log('here debug post: ', $GENERIC_STORE[pos_blog].posts[pos_post]);

	// -------------------------------------------------------------------
	const del = () => {
		if (confirm("Supprimer l'article ?")) {
			$GENERIC_STORE[pos_blog].posts.splice(pos_post, 1);
			// refresh (can do diferently - TODO - juste genericStore)
			$GENERIC_STORE[pos_blog].posts = $GENERIC_STORE[pos_blog].posts;
			// open = false;
		}
	};
	// -------------------------------------------------------------------
</script>

<!-- ACCORDION -->
<Panel square variant="outlined" color="primary" extend {open}>
	<!--  -->
	<Header>
		<div class="">{$GENERIC_STORE[pos_blog].posts[pos_post].url}</div>
		<span slot="description">{$GENERIC_STORE[pos_blog].posts[pos_post].page}</span>
		<div slot="icon" class="">
			<IconButton toggle pressed={(open = !open)}>
				<Icon class="material-icons" on>unfold_less</Icon>
				<Icon class="material-icons">unfold_more</Icon>
			</IconButton>
			{#if type === 'blog' || type === 'slideshow'}
				<IconButton on:click={del}>
					<Icon class="material-icons">delete</Icon>
				</IconButton>
			{/if}
		</div>
	</Header>
	<!--  -->
	<Content>
		<div class="space-y-10">
			<div class="space-y-10">
				{#each $GENERIC_STORE[pos_blog].posts[pos_post].inputValues as ivItm}
					{#if ivItm.union}
						<!-- content here -->
						<!-- TAB -->

						<!-- <TabBar tabs={[...Array(2)].map((_v, i) => i + 1)} let:tab> -->
						<TabBar tabs={['image', 'video']} let:tab bind:activeTab>
							<Tab {tab}>
								<Label>Tab {tab}</Label>
							</Tab>
						</TabBar>

						{#if activeTab === 'image'}
							<AxInputAll bind:ivItm />
						{:else if activeTab === 'video'}
							<Textfield
								style="width: 100%;"
								helperLine$style="width: 100%;"
								bind:value={ivItm.inputValue}
								label={ivItm.label}
							/>
						{/if}
					{:else}
						<AxInputAll bind:ivItm />
					{/if}
				{/each}
			</div>
		</div>
	</Content>
</Panel>
