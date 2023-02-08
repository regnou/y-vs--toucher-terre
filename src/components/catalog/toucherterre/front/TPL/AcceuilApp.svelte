<script lang="ts">
	import { service_getInputs } from '@app/services/crudService';
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
	import { TABLE_ACCEUIL } from '@app/z-entities/COLLECTIONS';

	let promise: Promise<any> = service_getInputs(TABLE_ACCEUIL);
	//--------------------------------------------------------------------
	onMount(async () => {
		const data = await promise;
		$STORE_ACCEUIL = data[0] ? data[0].data : [];
	});
	//--------------------------------------------------------------------
</script>

{#await promise}
	<Loader />
{:then data}
	<main id="acceuilApp--1">
		{#if $STORE_ACCEUIL && $STORE_ACCEUIL.length}
			<!-- why index = 0 -> dans le cas statique (non blog/post), on ne prend que le premier item -->
			<Hero
				bind:img={$STORE_ACCEUIL[0].posts[0].inputValues[0].inputValue}
				bind:text={$STORE_ACCEUIL[0].posts[0].inputValues[1].inputValue}
			/>
			<SeparatorMedium />
			<Title text={$STORE_ACCEUIL[0].posts[0].inputValues[2].inputValue} />
			<SeparatorMedium />
			<Paragraph text={$STORE_ACCEUIL[0].posts[0].inputValues[3].inputValue} />
			<SeparatorMedium />
			<Twocol>
				<!-- CONTACT -->
				<ContactCard
					title={$STORE_ACCEUIL[0].posts[0].inputValues[4].inputValue}
					subtitle={$STORE_ACCEUIL[0].posts[0].inputValues[5].inputValue}
					mail={$STORE_ACCEUIL[0].posts[0].inputValues[6].inputValue}
					fb={$STORE_ACCEUIL[0].posts[0].inputValues[7].inputValue}
					tel={$STORE_ACCEUIL[0].posts[0].inputValues[8].inputValue}
				/>
				<!-- SLIDER -->
				<div id="slider--1" class="grid place-items-center border-4 border-white ">
					<!-- why idx 1 -> becoz in staticpage, i do it as I want -->
					<Slider items={$STORE_ACCEUIL[1].posts} />
				</div>
			</Twocol>
		{/if}
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
