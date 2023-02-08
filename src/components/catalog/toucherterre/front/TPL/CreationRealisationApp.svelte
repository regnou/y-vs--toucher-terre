<script lang="ts">
	import { service_getInputs } from '@app/services/crudService';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import Loader from '../Loader.svelte';
	import PostEntry from '../PostEntry.svelte';
	import Slider from '../Slider.svelte';
	import { TABLE_CREATIONREALISATION } from '@app/z-entities/COLLECTIONS';

	let promise: Promise<any> = service_getInputs(TABLE_CREATIONREALISATION);

	// ---------------------------------------------------
	onMount(async () => {
		const data = await promise;
		$STORE_CREATIONREALISATION = data[0] ? data[0].data : [];
	});
	// ---------------------------------------------------
</script>

<!-- <Loader /> -->
{#await promise}
	<Loader />
{:then data}
	{#if $STORE_CREATIONREALISATION && $STORE_CREATIONREALISATION.length}
		<!--  -->
		<div class="grid grid-flow-col grid-cols-12 gap-10 ">
			<!--  -->
			<div class="col-span-8">
				{#each $STORE_CREATIONREALISATION[0].posts as post (post.url)}
					<PostEntry title={post.inputValues[0].inputValue} text={post.inputValues[1].inputValue} />
				{/each}
			</div>
			<!--  -->
			<div class=" col-span-4 grid grid-rows-3 place-items-center">
				{#each [1, 2, 3] as i}
					<Slider imgs={[$STORE_CREATIONREALISATION[i].inputValue]} />
				{/each}
			</div>
		</div>
		<!--  -->
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
