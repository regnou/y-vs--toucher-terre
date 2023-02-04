<script lang="ts">
	import { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import AxInputAll from '../../layout/AxInputAll.svelte';

	export let panelOpens = [false, false, false, false, false];
	export let item;
	export let i;
</script>

<!-- ACCORDION -->
<Panel square variant="outlined" color="primary" extend bind:open={panelOpens[i]}>
	<!--  -->
	<Header>
		<div class="">{item.url}</div>

		<span slot="description">{item.page}</span>

		<div slot="icon" class="">
			<IconButton toggle pressed={panelOpens[i]}>
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
			{#each item.inputValues as itm, i}
				<AxInputAll item={itm} />
			{/each}
		</div>
	</Content>
</Panel>
