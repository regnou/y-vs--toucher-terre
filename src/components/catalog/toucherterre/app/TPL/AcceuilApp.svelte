<script lang="ts">
	// import Slider from '../Slider.svelte';
	import { onMount } from 'svelte';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { STORE__PAGEITEMS } from '@app/stores/store';
	import { config__get } from '@app/domain/services/configService';
	import { isInputValue } from '@app/utils/guards';
	import SeparatorMedium from '../widgets/SeparatorMedium.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Twocol from '../widgets/Twocol.svelte';
	import Title from '../widgets/Title.svelte';
	import Loader from '../widgets/Loader.svelte';
	import Hero from '../widgets/Hero.svelte';
	import Contactcard from '../widgets/Contactcard.svelte';

	// ..........................................................
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);

	// ----------------------------------------------------------
	onMount(async () => {
		$STORE__PAGEITEMS = await promise; // les types MATCH donc le bding devrait etre bon
		console.debug('🚔');
		console.dir($STORE__PAGEITEMS);
		console.debug('🚔\n');
	});
	// ----------------------------------------------------------
</script>

{#await promise}
	<Loader />
{:then data}
	<main id="acceuilApp-1">
		{#if $STORE__PAGEITEMS && $STORE__PAGEITEMS.length}
			{#if isInputValue($STORE__PAGEITEMS)}
				<Hero bind:img={$STORE__PAGEITEMS[0].value} bind:text={$STORE__PAGEITEMS[1].value} />
				<SeparatorMedium />
				<Title text={$STORE__PAGEITEMS[2].value} />
				<SeparatorMedium />
				<Paragraph text={$STORE__PAGEITEMS[3].value} />
				<SeparatorMedium />
				<Twocol>
					<Contactcard
						title={$STORE__PAGEITEMS[4].value}
						subtitle={$STORE__PAGEITEMS[5].value}
						mail={$STORE__PAGEITEMS[6].value}
						fb={$STORE__PAGEITEMS[7].value}
						tel={$STORE__PAGEITEMS[8].value}
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
<!-- <Slider items={$STORE__PAGEITEMS[1].posts} /> -->
<!-- </div> -->
