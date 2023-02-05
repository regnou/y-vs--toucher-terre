<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import AxBlogPanel from './AxBlogPanel.svelte';
	import AxBlogPanelAdd from './AxBlogPanelAdd.svelte';
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputAll from '../../layout/3-AxInputAll.svelte';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';

	// export let posts: T_post[] = [];
	// export let item; // take a reference to the GENERIC_STORE

	// hackons
	$: console.log('hack:', $STORE_CREATIONREALISATION);

	const deletePost = (ii: number) => {
		// console.log('post deleted 1:', $STORE_CREATIONREALISATION[0].posts);

		// debugger;
		$STORE_CREATIONREALISATION[0].posts.splice(ii, 1);

		// console.log('post deleted 2:', $STORE_CREATIONREALISATION[0].posts);

		$STORE_CREATIONREALISATION[0].posts = $STORE_CREATIONREALISATION[0].posts;
		// debugger;
		panelOpens = [false, false, false, false, false];

		// console.log('post deleted :', $STORE_CREATIONREALISATION[0].posts);
	};
	let panelOpens = [false, false, false, false, false];
	// $: console.log('step 1 : axblog posts--->>>', posts);
</script>

<!-- THE BLOG is a list of articles you can manage -->
<Accordion class="demo-small-titles">
	<!-- PANEL ADD -->
	<!-- <AxBlogPanelAdd /> -->

	<!-- PANEL EDITS -->
	<!-- <AxBlogPanel bind:posts /> -->
	<!-- <AxBlogPanel bind:item /> -->

	<!-- {#each item.posts as post, ii} -->
	{#each $STORE_CREATIONREALISATION[0].posts as post, ii (post.url)}
		<!-- ACCORDION -->
		<Panel square variant="outlined" color="primary" extend bind:open={panelOpens[ii]}>
			<!--  -->
			<Header>
				<div class="">{post.url}</div>
				<span slot="description">{post.page}</span>
				<div slot="icon" class="">
					<IconButton toggle pressed={panelOpens[ii]}>
						<Icon class="material-icons" on>unfold_less</Icon>
						<Icon class="material-icons">unfold_more</Icon>
					</IconButton>
					<IconButton
						on:click={() => {
							if (confirm('are you sure')) deletePost(ii);
						}}
					>
						<Icon class="material-icons">delete</Icon>
					</IconButton>
				</div>
			</Header>
			<!--  -->
			<Content>
				<div class="space-y-10">
					<AxInputAll bind:item={post.inputValues[0]} />
					<AxInputAll bind:item={post.inputValues[1]} />

					<!-- {#each post.inputValues as itm}
						<AxInputAll item={itm} />
					{/each} -->
				</div>
			</Content>
		</Panel>
	{/each}
</Accordion>
