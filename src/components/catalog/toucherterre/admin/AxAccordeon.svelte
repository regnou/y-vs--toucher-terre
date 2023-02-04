<script lang="ts">
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputAll from './form/AxInputAll.svelte';

	export let items: any[] = [];

	$: console.log('items accordeon --->>>', items);

	let panel1Open = false;
	let panel2Open = false;
	let panel3Open = false;
	let panel4Open = false;

	let files_all = [null, null, null, null, null, null, null, null, null, null];
</script>

<Accordion class="demo-small-titles">
	{#each items as item, i}
		<Panel square variant="outlined" color="primary" extend bind:open={panel1Open}>
			<!--  -->
			<Header>
				{item.page}
				<span slot="description">{item.url}</span>
				<IconButton slot="icon" toggle pressed={panel1Open}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton>
			</Header>
			<!--  -->
			<Content>
				{#each item.inputValues as itm, i}
					<AxInputAll
						bind:files={files_all[i]}
						bind:inputValue={itm.inputValue}
						bind:label={itm.label}
						bind:type={itm.type}
						bind:posts={itm.posts}
					/>
				{/each}
			</Content>
		</Panel>
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
