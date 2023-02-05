<script lang="ts">
	import Accordion from '@smui-extra/accordion';
	import AxBlogPanel from './AxBlogPanel.svelte';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
	import AxBlogPanelAdd from './AxBlogPanelAdd.svelte';

	// export let posts: T_post[] = [];
	// export let item; // take a reference to the GENERIC_STORE
	$: console.log('hack:', $STORE_CREATIONREALISATION);

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
	// 		$STORE_CREATIONREALISATION[0].posts.push(post);
	// 		$STORE_CREATIONREALISATION[0].posts = $STORE_CREATIONREALISATION[0].posts;
	// 		// $STORE_CREATIONREALISATION[0].posts = $STORE_CREATIONREALISATION[0].posts;
	// 	}
	// };

	// const deletePost = (event) => {
	// 	if (confirm("Supprimer l'article ?")) {
	// 		$STORE_CREATIONREALISATION[0].posts.splice(event.detail.ii, 1);
	// 		$STORE_CREATIONREALISATION[0].posts = $STORE_CREATIONREALISATION[0].posts;
	// 	}
	// };
</script>

<!-- THE BLOG is a list of articles you can manage -->
<Accordion class="demo-small-titles">
	<!-- PANEL ADD -->
	<!-- on:add={addPost} -->
	<AxBlogPanelAdd />

	<!-- PANEL EDITS -->
	<!-- remettre - tu as  triche en mettant directement le store, alorsque l on veut du generic -->
	<!-- {#each item.posts as post, ii} -->
	{#each $STORE_CREATIONREALISATION[0].posts as post, ii (post.url)}
		<!-- on:delete={deletePost}  -->
		<AxBlogPanel {ii} bind:post />
	{/each}
</Accordion>
