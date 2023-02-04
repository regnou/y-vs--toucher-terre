<script lang="ts">
	import { base } from '$app/paths';
	import { TABLE_LADEMARCHE } from '@app/entities/COLLECTIONS';
	import { service_getInputs } from '@app/utils/tecnology/firebase/services/adminPageServices';
	import { STORE_LADEMARCHE } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import Hero2 from '../Hero2.svelte';
	import Loader from '../Loader.svelte';
	import Paragraph from '../Paragraph.svelte';
	import Separator from '../Separator.svelte';
	let promise = service_getInputs(TABLE_LADEMARCHE);

	onMount(async () => {
		// READ REMOTE STORE -- FIREBASE
		// const data = readRemoteStore('acceuil');
		// $STORE_ACCEUIL = data;
		// READ REMOTE STORE -- WORDPRESS
		const data = await promise;
		$STORE_LADEMARCHE = data[0] ? data[0].data : [];
		console.log('inside mount : ', $STORE_LADEMARCHE.length);
	});
</script>

<!-- <Loader /> -->
{#await promise}
	<!-- <p>...waiting</p> -->
	<Loader />
{:then data}
	{#if $STORE_LADEMARCHE && $STORE_LADEMARCHE.length}
		<div class="grid h-full w-full grid-cols-3 gap-10">
			<!-- <div class="bg-red-300 mr-10"> -->
			<div class=" mr-10">
				<Hero2 title="L'équipe" />
				<Paragraph text={$STORE_LADEMARCHE[0].inputValue} />
				<Separator />
				<Paragraph text={$STORE_LADEMARCHE[1].inputValue} />
				<Separator />
				<Paragraph text={$STORE_LADEMARCHE[2].inputValue} />
				<Separator />
				<img
					src="{base}/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg"
					alt=""
				/>
			</div>
			<!-- <div class="bg-green-300"> -->
			<div class="">
				<Hero2 title="La démarche" />

				<div class="grid grid-flow-col place-items-center">
					<img
						class="h-10 justify-self-end "
						src="{base}/media/icon/icon-contact-decom--creme.png"
						alt=""
					/>
					<img
						class="h-48"
						src="{base}/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_02.jpg"
						alt=""
					/>
					<img
						class="h-10 rotate-180 justify-self-start"
						src="{base}/media/icon/icon-contact-decom--creme.png"
						alt=""
					/>
				</div>

				<Paragraph text={$STORE_LADEMARCHE[3].inputValue} />
				<Separator />
				<Paragraph text={$STORE_LADEMARCHE[4].inputValue} />
				<Separator />
				<Paragraph text={$STORE_LADEMARCHE[5].inputValue} />
				<Separator />
				<Paragraph text={$STORE_LADEMARCHE[6].inputValue} />
				<Separator />
			</div>
			<!-- <div class="bg-blue-300 ml-10"> -->
			<div class=" ml-20">
				<Hero2 title="formule" />
				<div class="m-5 rounded-md bg-white/30 p-2">
					<Paragraph text={$STORE_LADEMARCHE[7].inputValue} />
					<Separator />
					<Paragraph text={$STORE_LADEMARCHE[8].inputValue} />
					<Separator />
					<Paragraph text={$STORE_LADEMARCHE[9].inputValue} />
					<Separator />
					<Paragraph text={$STORE_LADEMARCHE[10].inputValue} />
					<Separator />
					<Paragraph text={$STORE_LADEMARCHE[11].inputValue} />
				</div>
				<Separator />
				<img
					src="{base}/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg"
					alt=""
				/>
			</div>
		</div>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
