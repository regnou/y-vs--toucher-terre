<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxBtnCancel from '../form/AxBtnCancel.svelte';
	import AxBtnOk from '../form/AxBtnOk.svelte';
	import AxInputAll from '../../layout/sublayout/items/AxInputAll.svelte';
	import { createEventDispatcher } from 'svelte';

	export let GENERIC_STORE;
	export let GENERIC_ADD = [];
	// export let item1 = { type: 'text', label: "Titre de l'article", inputValue: '' };
	// export let item2 = { type: 'area', label: "Contenu de l'article", inputValue: '' };

	let open = false;

	const add = () => {
		// console.log('this is add');
		// dispatch('add', {
		// 	title: item1.inputValue,
		// 	content: item2.inputValue
		// });

		// post to send
		const post = {
			id: 1,
			page: '',
			url: '',
			date_created: '12/12/12',
			date_modified: '10/10/10',
			inputValues: []
		};

		// a voir si check if null
		GENERIC_ADD.forEach((itm) => {
			post.inputValues.push(itm);
		});
		post.page = GENERIC_ADD[0];
		post.url = GENERIC_ADD[1];

		// {
		// 			id: '1',
		// 			index: 1,
		// 			type: 'text',
		// 			label: 'Titre de l’article',
		// 			inputValue: item1.inputValue
		// 		},
		// 		{
		// 			id: '2',
		// 			index: 2,
		// 			type: 'area',
		// 			label: "Contenu de l'article",
		// 			inputValue: item2.inputValue
		// 		}
		if (confirm("Ajouter l'article ?")) {
			$GENERIC_STORE[0].posts.push(post);
			$GENERIC_STORE[0].posts = $GENERIC_STORE[0].posts;
			// $GENERIC_STORE[0].posts = $GENERIC_STORE[0].posts;
			open = false;

			// reset form
			GENERIC_ADD.forEach((itm) => {
				itm.inputValue = '';
			});

			// GENERIC_STORE
			// item1.inputValue = '';
			// item2.inputValue = '';
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
