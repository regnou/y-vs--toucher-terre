<script lang="ts">
	// import Slider from '../Slider.svelte';
	import { onMount } from 'svelte';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { STORE__acceuil } from '@app/stores/store';
	import { config__get } from '@app/domain/services/configService';
	import { isInputValue } from '@app/utils/guards';
	import SeparatorMedium from '../widgets/SeparatorMedium.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Twocol from '../widgets/Twocol.svelte';
	import Title from '../widgets/Title.svelte';
	import Loader from '../widgets/Loader.svelte';
	import Hero from '../widgets/Hero.svelte';
	import Contactcard from '../widgets/Contactcard.svelte';
	import { axlog } from '@app/utils/axLog';
	import { page } from '$app/stores';
	// ----------------------------------------------------------
	// ..........................................................
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);
	// ----------------------------------------------------------
	onMount(async () => {
		$STORE__acceuil = await promise; // les types MATCH donc le bding devrait etre bon
		axlog($STORE__acceuil, $page.url.pathname, 'ACCEUIL');
	});
</script>

{#await promise}
	<Loader />
{:then data}
	<main id="acceuilApp-1">
		{#if $STORE__acceuil && $STORE__acceuil.length}
			{#if isInputValue($STORE__acceuil)}
				<Hero bind:img={$STORE__acceuil[0].value} bind:text={$STORE__acceuil[1].value} />
				<SeparatorMedium />
				<Title text={$STORE__acceuil[2].value} />
				<SeparatorMedium />
				<Paragraph text={$STORE__acceuil[3].value} />
				<SeparatorMedium />
				<Twocol>
					<Contactcard
						title={$STORE__acceuil[4].value}
						subtitle={$STORE__acceuil[5].value}
						mail={$STORE__acceuil[6].value}
						fb={$STORE__acceuil[7].value}
						tel={$STORE__acceuil[8].value}
					/>
					<div />
				</Twocol>
			{/if}
		{/if}
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
<!-- <div id="slider-1" class="grid place-items-center border-4 border-white "> -->
<!-- why idx 1 -> becoz in staticpage, i do it as I want -->
<!-- <Slider items={$STORE__acceuil[1].posts} /> -->
<!-- </div> -->
