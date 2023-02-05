<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputAll from '../../layout/3-AxInputAll.svelte';

	// export let posts: T_post[];
	export let item; // take a reference to the GENERIC_STORE

	let panelOpens = [false, false, false, false, false];
</script>

{#each item.posts as post, ii}
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
				<IconButton>
					<Icon class="material-icons">delete</Icon>
				</IconButton>
			</div>
		</Header>
		<!--  -->
		<Content>
			<div class="space-y-10">
				{#each post.inputValues as itm, i}
					<AxInputAll bind:item={itm} />
				{/each}
			</div>
		</Content>
	</Panel>
{/each}
