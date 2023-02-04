<script lang="ts">
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxAccordeonPanel from './AxAccordeonPanel.svelte';
	import AxInputAll from './form/AxInputAll.svelte';

	export let items: any = [];

	$: console.log('items accordeon --->>>', items);

	let panelOpens = [false, false, false, false];

	let files_all = [null, null, null, null, null, null, null, null, null, null];
</script>

<div class="border p-2">
	<IconButton>
		<Icon class="material-icons">add</Icon>
	</IconButton>
</div>
<Accordion class="demo-small-titles">
	<!-- PANEL ADD -->

	<!-- PANEL EDITS -->
	{#each items as item, i}
		<AxAccordeonPanel bind:panelOpens bind:files_all {i} {item} />
	{/each}
</Accordion>

<!-- <Accordion class="demo-small-titles">
	<Panel square variant="outlined" color="primary" extend bind:open={panel1Open}>
		<Header>
			Panel 1
			<span slot="description">Description of panel 1.</span>
			<IconButton slot="icon" toggle pressed={panel1Open}>
				<Icon class="material-icons" on>unfold_less</Icon>
				<Icon class="material-icons">unfold_more</Icon>
			</IconButton>
		</Header>
		<Content>The content for panel 1.</Content>
	</Panel>
</Accordion> -->
<style lang="postcss">
	* :global(.demo-small-titles .smui-accordion__header__title--with-description) {
		flex-basis: 20% !important;
		max-width: 200px !important;
	}
</style>
