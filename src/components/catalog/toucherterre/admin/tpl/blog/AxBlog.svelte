<script lang="ts">
	import { DATAJSON__ADD_SLIDESHOW } from '@app/DATA/DB-ADD/DATAJSON__ADD_Slideshow.json';
	import Accordion from '@smui-extra/accordion';
	import AxInputAll from '../../layout/sublayout/items/AxInputAll.svelte';
	import AxBlogPanel from './AxBlogPanel.svelte';
	import AxBlogPanelAdd from './AxBlogPanelAdd.svelte';

	export let pos_blog; // index in the GENERIC_STORE
	export let type; // blog, slideshow, staticpage OU natif ++++++++++++++
	export let GENERIC_STORE;
	export let GENERIC_ADD = null;
</script>

<!-- THE BLOG is a list of articles you can manage -->
<!-- <Accordion class="demo-small-titles"> -->
<Accordion class="">
	<!-- PANEL ADD -->
	<!-- {#if type === 'blog'}
		<AxBlogPanelAdd {pos_blog} {GENERIC_STORE} {GENERIC_ADD} />
	{:else if type === 'slideshow'}
		<AxBlogPanelAdd {pos_blog} {GENERIC_STORE} GENERIC_ADD={DATAJSON__ADD_SLIDESHOW} />
	{/if} -->

	<!-- PANEL EDITS -->
	{#if $GENERIC_STORE && $GENERIC_STORE.length}
		{#if type === 'blog' || type === 'slideshow' || type === 'staticpage'}
			<!-- donc ca contient la section post -->
			{#each $GENERIC_STORE[pos_blog].posts as post, pos_post (pos_blog + '_' + pos_post)}
				<!-- {@debug $GENERIC_STORE} -->
				<!-- if it is not a blog, so we directly open the post -->
				<AxBlogPanel {type} {GENERIC_STORE} {pos_blog} {pos_post} />
			{/each}
		{:else}
			<AxInputAll ivItm={$GENERIC_STORE[pos_blog]} />
		{/if}
	{/if}
</Accordion>

<!--  -->
<!-- <style lang="postcss">
	* :global(.demo-small-titles .smui-accordion__header__title--with-description) {
		flex-basis: 20% !important;
		max-width: 200px !important;
	}
</style> -->
