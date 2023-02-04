<!-- <svelte:options accessors={true} /> -->
<script lang="ts">
	import AxFileUpload from './Axfileupload.svelte';
	import Textfield from '@smui/textfield';
	import AxDataTable from '../AxDataTable.svelte';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxAccordeon from '../AxAccordeon.svelte';

	export let type = '';
	export let inputValue = '';
	export let label = '';
	export let files = null;
	export let posts = [];

	let panel1Open = false;
	let panel2Open = false;
	let panel3Open = false;
	let panel4Open = false;

	// replace space
	// $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM
</script>

<div>
	{#if type === 'text'}
		<Textfield style="width: 100%;" helperLine$style="width: 100%;" bind:value={inputValue} {label}>
			<!-- <HelperText slot="helper">Helper Text</HelperText> -->
		</Textfield>
	{:else if type === 'file'}
		<div class="max-w-xs">
			<div class="text-xs text-gray-400">{label}</div>
			<AxFileUpload bind:files bind:urlStorage={inputValue} />
		</div>
	{:else if type === 'area'}
		<Textfield style="width: 100%; height: 200px;" textarea bind:value={inputValue} {label} />
		<!-- input$maxlength={500} -->
		<!-- helperLine$style="width: 100%;" -->
		<!-- <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter> -->
	{:else if type === 'post'}
		<!-- <AxDataTable items={posts} sortId={'label'} /> -->
		<AxAccordeon items={posts}>
			<!-- <Accordion class="demo-small-titles">
			{#each $store[0].posts as item, i}
				<Panel square variant="outlined" color="primary" extend bind:open={panel1Open}>
					<Header>
						{item.page}
						<span slot="description">{item.url}</span>
						<IconButton slot="icon" toggle pressed={panel1Open}>
							<Icon class="material-icons" on>unfold_less</Icon>
							<Icon class="material-icons">unfold_more</Icon>
						</IconButton>
					</Header>
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
		</Accordion> -->
		</AxAccordeon>
		<!-- {:else if type === 'accordeon'} -->
		<!-- <AxAccordeon items={posts} /> -->
	{/if}
</div>
