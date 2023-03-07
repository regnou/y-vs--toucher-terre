<!-- ####################################################### -->
<!-- PANEL ADD -->
<!-- ####################################### -->
{#if $AX_STORE__CONTENT_DB?.formAdd?.length}
	<Panel
		class="bg-green-600"
		square
		variant="outlined"
		extend
		bind:open
	>
		<!-- ------------------------------ -->
		<Header>
			<span>AJOUTER</span>
			<div slot="icon">
				<!-- <IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton> -->
				<IconButton>
					<Icon class="material-icons">add</Icon>
				</IconButton>
			</div>
		</Header>
		<!-- ------------------------------ -->
		<!-- WE GET THE ANSWER OF THE USER in arrFormAdd -->
		<Content class="space-y-5  bg-green-800 text-center">
			{#each $AX_STORE__CONTENT_DB.formAdd as ivItm}
				<AxInputValue bind:ivItm />
			{/each}
			<Button
				variant="raised"
				on:click={async () => {
					await ACTION__addEntity(); // post or event ?
				}}
			>
				<Label>ajouter</Label>
			</Button>
		</Content>
	</Panel>
{/if}
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
<script lang="ts">
	let open = false;
	//
	onMount(() => {
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ax panel add', false, 'MOUNT', true);
	});
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { page } from '$app/stores';
	import { Content, Header, Panel } from '@smui-extra/accordion';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';
	import { axlog } from 'app/lib/utils/axLog';
	import { ACTION__addEntity } from 'app/stores/AX_BASE2__STORE_ACTIONS';
	import { onMount } from 'svelte';
	import AxInputValue from '../../widgets/form-inputValue/AxInputValue.svelte';
</script>
