<script lang="ts">
	import { TABLE_CREATIONREALISATION } from '@app/entities/COLLECTIONS';
	import { service_getInputs } from '@app/utils/tecnology/firebase/services/firestoreCRUDAdminServices';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import Loader from '../Loader.svelte';
	import PostEntry from '../PostEntry.svelte';
	import Slider from '../Slider.svelte';

	let promise: Promise<any> = service_getInputs(TABLE_CREATIONREALISATION);
	let posts = [];

	onMount(async () => {
		// READ REMOTE STORE -- FIREBASE
		// const data = readRemoteStore('acceuil');
		// $STORE_ACCEUIL = data;
		// READ REMOTE STORE -- WORDPRESS
		const data = await promise;
		$STORE_CREATIONREALISATION = data[0] ? data[0].data : [];
		posts = $STORE_CREATIONREALISATION[0].posts;
		console.log(posts);
		console.log('------------------------------------');
		// console.log('mount / $STORE_CREATIONREALISATION.length >>>', $STORE_CREATIONREALISATION.length);
	});

	// $: {
	// 	posts = $STORE_CREATIONREALISATION[0]?.posts ?? [];
	// 	console.log('posts: ', posts);
	// }
	// $: console.log(
	// 	'$STORE_CREATIONREALISATION[Ø] $$$ ',
	// 	$STORE_CREATIONREALISATION ?? $STORE_CREATIONREALISATION[0]
	// 	);
	// $STORE_CREATIONREALISATION ?? $STORE_CREATIONREALISATION[0].posts,
	// $STORE_CREATIONREALISATION ?? $STORE_CREATIONREALISATION[0].posts[0].page
	// $STORE_CREATIONREALISATION[0].posts[0].inputValues[0].inputValue
	// );
</script>

<!-- <Loader /> -->
{#await promise}
	<!-- <p>...waiting</p> -->
	<Loader />
{:then data}
	{#if posts && posts.length}
		<!--  -->
		<div class="grid grid-flow-col grid-cols-12 gap-10 ">
			<!--  -->
			<div class="col-span-8">
				<!-- {@debug posts} -->
				{#each posts as post}
					<!-- remettre -->
					<PostEntry title={post.inputValues[0].inputValue} text={post.inputValues[1].inputValue} />
				{/each}
			</div>
			<!--  -->
			<div class=" col-span-4 grid grid-rows-3 place-items-center">
				<Slider imgs={[$STORE_CREATIONREALISATION[1].inputValue]} />
				<Slider imgs={[$STORE_CREATIONREALISATION[2].inputValue]} />
				<Slider imgs={[$STORE_CREATIONREALISATION[3].inputValue]} />
			</div>
		</div>
		<!--  -->
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
