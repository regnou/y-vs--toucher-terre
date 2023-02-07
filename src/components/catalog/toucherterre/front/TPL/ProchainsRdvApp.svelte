<script lang="ts">
	import { service_getInputs } from '@app/services/crudService';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import { TABLE_PROCHAINSRDV } from '@app/z-entities/COLLECTIONS';
	import EventCard from '../Eventcard.svelte';
	import Loader from '../Loader.svelte';

	// Promise<any> => becoz to solve the data[0] a few line below
	let promise: Promise<any> = service_getInputs(TABLE_PROCHAINSRDV);

	onMount(async () => {
		const data = await promise;
		// if (data && data.length)
		$STORE_PROCHAINSRDV = data[0] ? data[0].data : [];
		// $STORE_PROCHAINSRDV = data[0] ? data[0].data : [];
		// console.log('inside mount : ', $STORE_PROCHAINSRDV.length);
	});
</script>

<!-- <Loader /> -->
{#await promise}
	<Loader />
{:then data}
	{#if $STORE_PROCHAINSRDV && $STORE_PROCHAINSRDV.length}
		<div id="eventcardlist--1" class="grid grid-flow-col  grid-rows-2  ">
			{#each $STORE_PROCHAINSRDV[0].posts as event (event.url)}
				<!-- {@debug event} -->
				<!-- // TODO : placehoder ? -->
				<!-- title={$STORE_PROCHAINSRDV[i].inputValue}
				src={'/media/gallery/prochains-rdv/' +
					($STORE_PROCHAINSRDV[i].inputValue || 'placeholder.png')} -->
				<EventCard bind:event={event.inputValues} />
			{/each}
		</div>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
