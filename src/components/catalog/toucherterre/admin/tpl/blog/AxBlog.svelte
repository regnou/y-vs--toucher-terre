<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import AxBlogPanel from './AxBlogPanel.svelte';
	import AxBlogPanelAdd from './AxBlogPanelAdd.svelte';

	export let isStaticPage = true;
	export let GENERIC_STORE;
	export let GENERIC_ADD = null;
</script>

<!-- THE BLOG is a list of articles you can manage -->
<Accordion class="demo-small-titles">
	{#if !isStaticPage}
		<!-- PANEL ADD -->
		<AxBlogPanelAdd {GENERIC_STORE} {GENERIC_ADD} />
	{/if}

	<!-- PANEL EDITS -->
	{#if $GENERIC_STORE && $GENERIC_STORE.length}
		{#each $GENERIC_STORE[0].posts as post, ii (post.url)}
			<!-- if it is not a blog, so we directly open the post -->
			<AxBlogPanel {isStaticPage} {GENERIC_STORE} {ii} bind:post />
		{/each}
	{/if}
</Accordion>

<!-- 
// export let posts: T_post[] = [];
// export let item; // take a reference to the GENERIC_STORE
// $: console.log('hack:', $GENERIC_STORE);

// const addPost = (event) => {
// 	console.log('this is addpost (final step)');
// 	const post = {
// 		id: 1,
// 		page: event.detail.title,
// 		url: '/' + encodeURIComponent(event.detail.title),
// 		date_created: '12/12/12',
// 		date_modified: '10/10/10',
// 		inputValues: [
// 			{
// 				id: '1',
// 				index: 1,
// 				type: 'text',
// 				label: 'Titre de l’article',
// 				inputValue: event.detail.title
// 			},
// 			{
// 				id: '2',
// 				index: 2,
// 				type: 'area',
// 				label: "Contenu de l'article",
// 				inputValue: event.detail.content
// 			}
// 		]
// 	};
// 	if (confirm("Ajouter l'article ?")) {
// 		$GENERIC_STORE[0].posts.push(post);
// 		$GENERIC_STORE[0].posts = $GENERIC_STORE[0].posts;
// 		// $GENERIC_STORE[0].posts = $GENERIC_STORE[0].posts;
// 	}
// };

// const deletePost = (event) => {
// 	if (confirm("Supprimer l'article ?")) {
// 		$GENERIC_STORE[0].posts.splice(event.detail.ii, 1);
// 		$GENERIC_STORE[0].posts = $GENERIC_STORE[0].posts;
// 	}
// }; -->
<!-- on:add={addPost} -->
<!-- remettre - tu as  triche en mettant directement le store, alorsque l on veut du generic -->
<!-- {#each item.posts as post, ii} -->
