<script lang="ts">
	// import Slider from '../Slider.svelte';
	import { onMount } from 'svelte';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	// import { store } from '@app/stores/store';
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
	import { reducerBlog } from '@app/stores/storeReducers';
	// ----------------------------------------------------------
	// ..........................................................
	export let store;

	// let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);
	// ----------------------------------------------------------
	// onMount(async () => {
	// 	//
	// 	const r = await promise; // les types MATCH donc le bding devrait etre bon
	// 	store.dispatch('mod-hard', r);
	// 	// debugger;
	// 	axlog($store, $page.url.pathname, 'ACCEUIL');
	// });
</script>

<!-- {#if $store}
	<button on:click={(e) => store.dispatch('add', 5)}>Dispatch</button>
{/if} -->

<!-- {#await promise}
	<Loader />
{:then data} -->
<main id="acceuilApp-1">
	{#if $store && $store.length}
		{#if isInputValue($store)}
			<Hero bind:img={$store[0].value} bind:text={$store[1].value} />
			<SeparatorMedium />
			<Title text={$store[2].value} />
			<SeparatorMedium />
			<Paragraph text={$store[3].value} />
			<SeparatorMedium />
			<Twocol>
				<Contactcard
					title={$store[4].value}
					subtitle={$store[5].value}
					mail={$store[6].value}
					fb={$store[7].value}
					tel={$store[8].value}
				/>
				<div />
			</Twocol>
		{/if}
	{/if}
</main>
<!-- {:catch error}
	<p style="color: red">{error.message}</p>
{/await} -->
<!-- 



 -->
<!-- <div id="slider-1" class="grid place-items-center border-4 border-white "> -->
<!-- why idx 1 -> becoz in staticpage, i do it as I want -->
<!-- <Slider items={$store[1].posts} /> -->
<!-- </div> -->
