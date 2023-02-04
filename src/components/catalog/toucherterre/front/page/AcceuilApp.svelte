<script lang="ts">
	import { TABLE_ACCEUIL } from '@app/entities/COLLECTIONS';
	import { service_getInputs } from '@app/utils/tecnology/firebase/services/firestoreCRUDAdminServices';
	import { STORE_ACCEUIL } from '@app/stores/STORES';
	import { onMount } from 'svelte';
	import Hero from '../Hero.svelte';
	import Loader from '../Loader.svelte';
	import SeparatorMedium from '../SeparatorMedium.svelte';
	import Title from '../Title.svelte';
	import Twocol from '../Twocol.svelte';

	import ContactCard from '../Contactcard.svelte';
	import Paragraph from '../Paragraph.svelte';
	import Slider from '../Slider.svelte';

	// import Splide from '../splide.svelte';
	let promise: Promise<any> = service_getInputs(TABLE_ACCEUIL);
	//--------------------------------------------------------------------
	onMount(async () => {
		// READ REMOTE STORE -- FIREBASE
		// const data = readRemoteStore('acceuil');
		// $STORE_ACCEUIL = data;
		// READ REMOTE STORE -- WORDPRESS
		const data = await promise;
		// if (data && data.length)
		$STORE_ACCEUIL = data[0] ? data[0].data : [];
		// TODO
		// $STORE_ACCEUIL = data[0].data ?? [];

		console.log('inside mount : ', $STORE_ACCEUIL.length);
	});
	//--------------------------------------------------------------------
</script>

<!-- <svelte:head>
	<title>Axel Regnoult</title>
	<meta name="description" content="CV Axel Regnoult ingénieur en informatique" />
</svelte:head> -->

<!-- {#each $STORE_ACCEUIL as item} -->

<!-- <Item2 /> -->
<!-- {#await $STORE_ACCEUIL_BASE}
	<p>...waiting</p>
{:then $STORE_ACCEUIL_BASE}
	<p>The number is {$STORE_ACCEUIL_BASE.length}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await} -->

<!-- <Loader /> -->
<!-- <Tmp /> -->
<!-- <Loader /> -->
{#await promise}
	<!-- <p class="animate-spin">...waiting</p> -->
	<Loader />
{:then data}
	<main id="acceuilApp--1">
		{#if $STORE_ACCEUIL && $STORE_ACCEUIL.length}
			<Hero bind:img={$STORE_ACCEUIL[0].inputValue} bind:text={$STORE_ACCEUIL[1].inputValue} />
			<SeparatorMedium />

			<Title text={$STORE_ACCEUIL[2].inputValue} />
			<SeparatorMedium />

			<Paragraph text={$STORE_ACCEUIL[3].inputValue} />
			<SeparatorMedium />

			<Twocol>
				<ContactCard
					title={$STORE_ACCEUIL[4].inputValue}
					subtitle={$STORE_ACCEUIL[5].inputValue}
					mail={$STORE_ACCEUIL[6].inputValue}
					fb={$STORE_ACCEUIL[7].inputValue}
					tel={$STORE_ACCEUIL[8].inputValue}
				/>
				<!-- <ContactCard title={''} subtitle={''} mail={''} fb={''} tel={''} /> -->
				<div id="slider--1" class="grid place-items-center border-4 border-white ">
					<Slider />
				</div>
			</Twocol>
		{/if}
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
<!-- // const dispatch = createEventDispatcher();
// onMount(() => {
// 	console.log('-- onMount');
// 	dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// });

// afterUpdate(() => {
// 	console.log('-- afterUpdate');
// 	// dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// }); -->
