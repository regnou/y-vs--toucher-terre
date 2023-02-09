<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxBtnCancel from '../form/AxBtnCancel.svelte';
	import AxBtnOk from '../form/AxBtnOk.svelte';
	import AxInputAll from '../../layout/sublayout/items/AxInputAll.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Textfield from '@smui/textfield';

	export let pos_blog;
	export let GENERIC_STORE;
	export let GENERIC_ADD = [];
	let open = false;
	let activeTab = 'image'; // todo enum - image | video

	$: console.log(activeTab);
	// -------------------------------------------------------------------
	const add = () => {
		console.log('voila le GENERIC_ADD: ', GENERIC_ADD);
		// post to send
		const postMeta = {
			id: 1,
			// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
			// &&&&&&&&&&&&&&& warn &&&&&&&&&&&&&&&&&&&
			// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
			// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
			//
			// ATTENTION, c qd m beroute la !
			//
			// car l ordre du schema de ADD_XXX doivent mapper les deux params importants
			// DONT SURTOUT l URL, car elle s ert d ID unique pour svelte-ui--key
			page: GENERIC_ADD[0].inputValue, //seo
			url: GENERIC_ADD[1].inputValue, // url (img ou video)
			//
			//
			// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
			// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
			// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

			date_created: '12/12/12',
			date_modified: '10/10/10',
			inputValues: []
		};

		// a voir si check if null
		GENERIC_ADD.forEach((ivItm) => {
			if (ivItm.union) postMeta.format = activeTab;
			postMeta.inputValues.push(ivItm);
		});

		if (confirm("Ajouter l'article ?")) {
			$GENERIC_STORE[pos_blog].posts.push(postMeta);
			$GENERIC_STORE[pos_blog].posts = $GENERIC_STORE[pos_blog].posts;
			open = false;
			console.log('this post is added to STORE: ', postMeta);
			// reset form
			// GENERIC_ADD.forEach((itm) => {
			// 	itm.inputValue = '';
			// });
		}
	};
</script>

<!-- <Panel square variant="outlined" color="secondary" extend bind:open={panelOpens[0]}> -->
<Panel square variant="outlined" color="secondary" extend bind:open>
	<!--  -->
	<Header class="bg-green-400">
		<span>AJOUTER</span>
		<!-- <span slot="description">AJOUTER</span> -->

		<div slot="icon" class="">
			<IconButton toggle pressed={(open = !open)}>
				<Icon class="material-icons" on>unfold_less</Icon>
				<Icon class="material-icons">unfold_more</Icon>
			</IconButton>
			<IconButton>
				<Icon class="material-icons">add</Icon>
			</IconButton>
		</div>
	</Header>
	<!--  -->
	<Content>
		<div class="space-y-10">
			<!--  -->
			{#each GENERIC_ADD as ivItm}
				<!-- NEW BIG LOOP FOR UNION -->
				{#if ivItm.union}
					<!-- content here -->
					<!-- TAB -->
					<div class="">
						<!-- <TabBar tabs={[...Array(2)].map((_v, i) => i + 1)} let:tab> -->
						<TabBar tabs={['image', 'video']} let:tab bind:activeTab>
							<Tab
								{tab}
								on:click={() => {
									activeTab = tab;
								}}
							>
								<Label>{tab}</Label>
							</Tab>
						</TabBar>

						<!-- ################## -->
						<!-- BEROUT -->
						<!-- ################## -->
						{#if activeTab === 'video'}
							<AxInputAll bind:ivItm={ivItm.union[0]} />
						{:else if activeTab === 'image'}
							<AxInputAll bind:ivItm={ivItm.union[1]} />
						{/if}
					</div>
				{:else}
					<AxInputAll bind:ivItm />
				{/if}
			{/each}

			<!-- END -->
			<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
				<AxBtnCancel text="cancel" />
				<AxBtnOk text="ok" callback={add} />
			</div>
		</div>
	</Content>
</Panel>
