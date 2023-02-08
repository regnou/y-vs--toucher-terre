<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxBtnCancel from '../form/AxBtnCancel.svelte';
	import AxBtnOk from '../form/AxBtnOk.svelte';
	import AxInputAll from '../../layout/sublayout/items/AxInputAll.svelte';

	export let pos_blog;
	export let GENERIC_STORE;
	export let GENERIC_ADD = [];
	let open = false;

	const add = () => {
		console.log('voila le GENERIC_ADD: ', GENERIC_ADD);
		// post to send
		const postMeta = {
			id: 1,
			//
			// ATTENTION, c qd m beroute la !
			//
			// car l ordre du schema de ADD_XXX doivent mapper les deux params importants
			// DONT SURTOUT l URL, car elle s ert d ID unique pour svelte-ui--key
			page: GENERIC_ADD[0].inputValue, //seo
			url: GENERIC_ADD[1].inputValue, // url
			//
			//
			date_created: '12/12/12',
			date_modified: '10/10/10',
			inputValues: []
		};

		// a voir si check if null
		GENERIC_ADD.forEach((itm) => {
			postMeta.inputValues.push(itm);
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
			{#each GENERIC_ADD as ivItm}
				<AxInputAll bind:ivItm />
			{/each}

			<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
				<AxBtnCancel text="cancel" />
				<AxBtnOk text="ok" callback={add} />
			</div>
		</div>
	</Content>
</Panel>
