<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxBtnCancel from '../form/AxBtnCancel.svelte';
	import AxBtnOk from '../form/AxBtnOk.svelte';
	import AxInputAll from '../../layout/sublayout/items/AxInputAll.svelte';
	import { createEventDispatcher } from 'svelte';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';

	export let item1 = { type: 'text', label: "Titre de l'article", inputValue: '' };
	export let item2 = { type: 'area', label: "Contenu de l'article", inputValue: '' };
	let open = false;
	// let panelOpens = [false, false, false, false, false];

	// const dispatch = createEventDispatcher();
	const add = () => {
		// console.log('this is add');
		// dispatch('add', {
		// 	title: item1.inputValue,
		// 	content: item2.inputValue
		// });
		const post = {
			id: 1,
			page: item1.inputValue,
			url: '/' + encodeURIComponent(item1.inputValue),
			date_created: '12/12/12',
			date_modified: '10/10/10',
			inputValues: [
				{
					id: '1',
					index: 1,
					type: 'text',
					label: 'Titre de l’article',
					inputValue: item1.inputValue
				},
				{
					id: '2',
					index: 2,
					type: 'area',
					label: "Contenu de l'article",
					inputValue: item2.inputValue
				}
			]
		};
		if (confirm("Ajouter l'article ?")) {
			$STORE_CREATIONREALISATION[0].posts.push(post);
			$STORE_CREATIONREALISATION[0].posts = $STORE_CREATIONREALISATION[0].posts;
			// $STORE_CREATIONREALISATION[0].posts = $STORE_CREATIONREALISATION[0].posts;
			open = false;
			item1.inputValue = '';
			item2.inputValue = '';
		}
	};
</script>

<!-- <Panel square variant="outlined" color="secondary" extend bind:open={panelOpens[0]}> -->
<Panel square variant="outlined" color="secondary" extend bind:open>
	<!--  -->
	<Header>
		<span slot="description">Créer un nouvel article</span>

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
			<AxInputAll bind:item={item1} />
			<AxInputAll bind:item={item2} />
			<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
				<AxBtnCancel text="cancel" />
				<AxBtnOk text="ok" callback={add} />
			</div>
		</div>
	</Content>
</Panel>
