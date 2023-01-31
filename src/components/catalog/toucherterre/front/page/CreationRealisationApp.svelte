<script lang="ts">
	import { TABLE_REALISATIONCREATION } from '@app/entities/COLLECTIONS';
	import { service_getInputs } from '@app/utils/tecnology/firebase/services/adminPageServices';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import Loader from '../Loader.svelte';
	import PostEntry from '../PostEntry.svelte';
	import Slider from '../Slider.svelte';

	let promise = service_getInputs(TABLE_REALISATIONCREATION);

	onMount(async () => {
		// READ REMOTE STORE -- FIREBASE
		// const data = readRemoteStore('acceuil');
		// $STORE_ACCEUIL = data;
		// READ REMOTE STORE -- WORDPRESS
		const data = await promise;
		$STORE_CREATIONREALISATION = data[0] ? data[0].data : [];
		console.log('inside mount : ', $STORE_CREATIONREALISATION.length);
	});
</script>

{#await promise}
	<!-- <p>...waiting</p> -->
	<Loader />
{:then data}
	{#if $STORE_CREATIONREALISATION && $STORE_CREATIONREALISATION.length}
		<div class="grid grid-flow-col grid-cols-12 gap-10 ">
			<div class="col-span-8">
				<PostEntry
					title={$STORE_CREATIONREALISATION[0].inputValue}
					text={$STORE_CREATIONREALISATION[1].inputValue}
				/>
				<PostEntry
					title={$STORE_CREATIONREALISATION[2].inputValue}
					text={$STORE_CREATIONREALISATION[3].inputValue}
				/>
				<PostEntry
					title={$STORE_CREATIONREALISATION[4].inputValue}
					text={$STORE_CREATIONREALISATION[5].inputValue}
				/>
				<PostEntry
					title={$STORE_CREATIONREALISATION[6].inputValue}
					text={$STORE_CREATIONREALISATION[7].inputValue}
				/>
				<PostEntry
					title={$STORE_CREATIONREALISATION[8].inputValue}
					text={$STORE_CREATIONREALISATION[9].inputValue}
				/>
				<!-- <PostEntry title={d1} text={d2} />
		<PostEntry title={d3} text={d4} />
		<PostEntry title={d5} text={d6} />
		<PostEntry title={d7} text={d8} />
		<PostEntry title={d9} text={d10} /> -->
			</div>
			<div class=" col-span-4 grid grid-rows-3 place-items-center">
				<Slider id="splider-1" imgs={[$STORE_CREATIONREALISATION[10].inputValue]} />
				<Slider id="splider-2" imgs={[$STORE_CREATIONREALISATION[11].inputValue]} />
				<Slider id="splider-3" imgs={[$STORE_CREATIONREALISATION[12].inputValue]} />
				<!-- <img class="  border-4  pr-2 " src={$STORE_CREATIONREALISATION[10].inputValue} alt="" /> -->
				<!-- <img class="  border-4 pr-2" src={$STORE_CREATIONREALISATION[11].inputValue} alt="" /> -->
				<!-- <img class="  border-4 pr-2 " src={$STORE_CREATIONREALISATION[12].inputValue} alt="" /> -->
				<!-- <img class="  border-4  pr-2 -ml-10" src={img1} alt="" />
		<img class="  border-4 pr-2" src={img2} alt="" />
		<img class="  border-4 pr-2 -mr-10" src={img3} alt="" /> -->
			</div>
		</div>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
