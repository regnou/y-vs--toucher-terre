<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import AxBlogPanel from './AxBlogPanel.svelte';
	import AxBlogPanelAdd from './AxBlogPanelAdd.svelte';

	export let posts: any = [];
	let panelOpens = [false, false, false, false, false];

	$: console.log('posts axblog --->>>', posts);
</script>

<Accordion class="demo-small-titles">
	<!-- PANEL ADD -->
	<AxBlogPanelAdd bind:panelOpens i={0} />

	<!-- PANEL EDITS -->
	{#each posts as item, i}
		<AxBlogPanel bind:panelOpens i={i + 1} {item} />
	{/each}
</Accordion>
