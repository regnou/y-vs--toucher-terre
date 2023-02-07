<script lang="ts">
	import { service_getInputs } from '@app/services/crudService';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import { TABLE_PROCHAINSRDV } from '@app/z-entities/COLLECTIONS';
	import EventCard from '../Eventcard.svelte';
	import Loader from '../Loader.svelte';

	let promise: Promise<any> = service_getInputs(TABLE_PROCHAINSRDV);
	//--------------------------------------------------------------------
	onMount(async () => {
		const data = await promise;
		$STORE_PROCHAINSRDV = data[0] ? data[0].data : [];
	});
	//--------------------------------------------------------------------
</script>

{#await promise}
	<Loader />
{:then data}
	<main id="prochainRdvApp--1">
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
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
