<script lang="ts">
	import { service_getInputs } from '@app/utils/tecnology/firebase/services/MOA/firestoreDAO';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import EventCard from '../Eventcard.svelte';
	import Loader from '../Loader.svelte';
	import { TABLE_PROCHAINSRDV } from '@app/z-entities/COLLECTIONS';

	// hack-type
	let arrTitle: any[] = [];
	let arrImg: any[] = [];

	// Promise<any> => becoz to solve the data[0] a few line below
	let promise: Promise<any> = service_getInputs(TABLE_PROCHAINSRDV);

	// $: console.log(typeof $STORE_PROCHAINSRDV);

	onMount(async () => {
		// READ REMOTE STORE -- FIREBASE
		// const data = readRemoteStore('acceuil');
		// $STORE_ACCEUIL = data;
		// READ REMOTE STORE -- WORDPRESS
		// data[0] => becoz the store is just one document in Firstore
		const data = await promise;
		if (data && data.length) $STORE_PROCHAINSRDV = data[0].data ?? [];
		// $STORE_PROCHAINSRDV = data[0] ? data[0].data : [];
		console.log('inside mount : ', $STORE_PROCHAINSRDV.length);

		arrImg = [
			$STORE_PROCHAINSRDV[0].inputValue,
			$STORE_PROCHAINSRDV[1].inputValue,
			$STORE_PROCHAINSRDV[2].inputValue,
			$STORE_PROCHAINSRDV[3].inputValue,
			$STORE_PROCHAINSRDV[4].inputValue,
			$STORE_PROCHAINSRDV[5].inputValue,
			$STORE_PROCHAINSRDV[6].inputValue,
			$STORE_PROCHAINSRDV[7].inputValue,
			$STORE_PROCHAINSRDV[8].inputValue,
			$STORE_PROCHAINSRDV[9].inputValue
		];
		arrTitle = [
			$STORE_PROCHAINSRDV[10].inputValue,
			$STORE_PROCHAINSRDV[11].inputValue,
			$STORE_PROCHAINSRDV[12].inputValue,
			$STORE_PROCHAINSRDV[13].inputValue,
			$STORE_PROCHAINSRDV[14].inputValue,
			$STORE_PROCHAINSRDV[15].inputValue,
			$STORE_PROCHAINSRDV[16].inputValue,
			$STORE_PROCHAINSRDV[17].inputValue,
			$STORE_PROCHAINSRDV[18].inputValue,
			$STORE_PROCHAINSRDV[19].inputValue
		];
	});
</script>

<!-- <Loader /> -->
{#await promise}
	<!-- <p>...waiting</p> -->
	<Loader />
{:then data}
	{#if $STORE_PROCHAINSRDV && $STORE_PROCHAINSRDV.length}
		<div id="eventcardlist--1" class="grid grid-flow-col  grid-rows-2  ">
			{#each arrTitle as itm, i}
				<!-- // TODO : placehoder ? -->
				<EventCard
					title={$STORE_PROCHAINSRDV[i + 10].inputValue}
					src={'/media/gallery/prochains-rdv/' +
						($STORE_PROCHAINSRDV[i].inputValue || 'placeholder.png')}
				/>
			{/each}
		</div>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
