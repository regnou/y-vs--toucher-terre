<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxBtnCancel from '../../form/AxBtnCancel.svelte';
	import AxBtnOk from '../../form/AxBtnOk.svelte';
	import AxInputAll from '../../layout/AxInputAll.svelte';

	export let panelOpens = [false, false, false, false, false];
	// export let item;
	export let i: number;

	const add = () => {};
</script>

<Panel square variant="outlined" color="secondary" extend bind:open={panelOpens[i]}>
	<!--  -->
	<Header>
		<span slot="description">Créer un nouvel article</span>

		<div slot="icon" class="">
			<IconButton toggle pressed={panelOpens[i]}>
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
			<AxInputAll item={{ type: 'text', label: "Titre de l'article", inputValue: '' }} />
			<AxInputAll item={{ type: 'area', label: "Contenu de l'article", inputValue: '' }} />
			<!-- {#each item.inputValues as itm, i} -->
			<!-- <AxInputAll item={itm} bind:files={files_all[i]} /> -->
			<!-- bind:inputValue={itm.inputValue}
				bind:label={itm.label}
				bind:type={itm.type}
				bind:posts={itm.posts} -->
			<!-- {/each} -->
			<!-- btn -->
			<div class="mt-10 grid grid-flow-col place-items-center gap-2 p-10">
				<AxBtnCancel text="cancel" />
				<!-- <AxBtnBlue handle={save} /> -->
				<AxBtnOk text="ok" callback={async () => await add()} />
			</div>
		</div>
	</Content>
</Panel>
