<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	// import Tab, { Label } from '@smui/tab';
	// import TabBar from '@smui/tab-bar';
	import { isEntity } from '@app/utils/guards';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	import AxBtnCancel from '../form-inputValue/AxBtnCancel.svelte';
	import AxBtnOk from '../form-inputValue/AxBtnOk.svelte';
	// -------------------------------------------------------------------
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	let store = undefined; // alias with hack le $ qui marche pas sur .
	// .....................................................................
	$: store = megaconfig ? megaconfig.conf__store : undefined;

	let open = false;
	// let activeTab = 'image'; // todo enum - image | video
	// export let pos_pageItem;
	// ........................................................
	// $: console.debug(activeTab);
	// $: console.debug('🚔megaconfig.conf__genericAdd ', megaconfig.conf__genericAdd);
	// -------------------------------------------------------------------
	// ADD
	//-------------------------------------------------------
	const add = () => {
		// const post:T_genericItem => bon, pour l instant, on ajoute QUE DES POSTS !
		console.debug('🌎🏎️✅ click >> on:add 1 🟡');
		// DEEP COPY (1)
		// const [title, slug, body] = megaconfig.conf__genericAdd;
		// const post: I_ENTITY__post = { title, slug, body };
		// DEEP COPY (2)
		// structured tag
		const post: I_ENTITY__post = {
			titlePost: structuredClone(megaconfig.conf__genericAdd[0]),
			slug: structuredClone(megaconfig.conf__genericAdd[1]),
			body: structuredClone(megaconfig.conf__genericAdd[2])
		};
		if (confirm("Ajouter l'article ?")) {
			// guard
			// if (isEntity($store[0])) {
			$store.push(post);
			open = false;
			megaconfig.conf__genericAdd.forEach((itm: I_UI__inputValue) => {
				itm.value = '';
			});
			// attention, chaque refresh update sa vue
			megaconfig = megaconfig; // refresh ui : vue = ADD
			$store = $store; // refresh ui : vue = COLLECTION__EDIT
			console.debug('🌎🏎️✅ click << on:add 2 🟨');
			// }
		}
	};
	//#######################################################
</script>

<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL ADD -->
<!-- ####################################### -->

<Panel square variant="outlined" color="secondary" extend bind:open>
	<!--  -->
	<Header class="bg-green-400">
		<span>AJOUTER</span>
		<!-- <span slot="description">AJOUTER</span> -->
		<div slot="icon">
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
		<!-- <div class="space-y-10"> -->
		<!--  -->
		{#each megaconfig.conf__genericAdd as ivItm}
			<AxInputValue bind:ivItm />
		{/each}
		<!-- END -->
		<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
			<AxBtnCancel text="cancel" />
			<AxBtnOk text="ok" callback={add} />
		</div>
		<!-- </div> -->
	</Content>
</Panel>
<!-- NEW BIG LOOP FOR UNION -->
<!-- {#if ivItm.union} -->
<!-- content here -->
<!-- TAB -->
<!-- <div > -->
<!-- <TabBar tabs={[...Array(2)].map((_v, i) => i + 1)} let:tab> -->
<!-- <TabBar tabs={['image', 'video']} let:tab bind:activeTab>
							<Tab
								{tab}
								on:click={() => {
									activeTab = tab;
								}}
							>
								<Label>{tab}</Label>
							</Tab>
						</TabBar> -->
<!-- ################## -->
<!-- BEROUT -->
<!-- ################## -->
<!-- {#if activeTab === 'video'}
							<AxInputValue bind:ivItm={ivItm.union[0]} />
						{:else if activeTab === 'image'}
							<AxInputValue bind:ivItm={ivItm.union[1]} />
						{/if} -->
<!-- </div> -->
<!-- {:else} -->
<!-- {/if} -->
