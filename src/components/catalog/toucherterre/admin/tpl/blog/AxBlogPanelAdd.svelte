<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxBtnCancel from '../../form/AxBtnCancel.svelte';
	import AxBtnOk from '../../form/AxBtnOk.svelte';
	import AxInputAll from '../../layout/3-AxInputAll.svelte';

	export let panelOpens = [false, false, false, false, false];
	export let item1 = { type: 'text', label: "Titre de l'article", inputValue: '' };
	export let item2 = { type: 'area', label: "Contenu de l'article", inputValue: '' };
	export let ii: number;

	const add = async () => {};
</script>

<Panel square variant="outlined" color="secondary" extend bind:open={panelOpens[ii]}>
	<!--  -->
	<Header>
		<span slot="description">Créer un nouvel article</span>

		<div slot="icon" class="">
			<IconButton toggle pressed={panelOpens[ii]}>
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
				<AxBtnOk text="ok" callback={async () => await add()} />
			</div>
		</div>
	</Content>
</Panel>
