<script lang="ts">
	// import Slider from '../Slider.svelte';
	import SeparatorMedium from '../widgets/SeparatorMedium.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Twocol from '../widgets/Twocol.svelte';
	import Title from '../widgets/Title.svelte';
	import Hero from '../widgets/Hero.svelte';
	import Contactcard from '../widgets/Contactcard.svelte';
	import type { T_axStore } from '@app/stores/createReduxStore';
	// ----------------------------------------------------------
	// DUMB (no operation to test, just display)
	// ----------------------------------------------------------
	export let store: I_UI__inputValue[] | undefined = undefined;
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: ACCEUIL APP -->
<!-- ####################################### -->
<main id="wc-app--site-acceuil--1">
	{#if store && store.length}
		<!-- {@debug store} -->
		<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
		<!-- static => inputValue only ! -->
		<!-- {#if isInputValue(store[0])} -->
		<Hero img={store[0].value} text={store[1].value} />
		<SeparatorMedium />
		<Title text={store[2].value} />
		<SeparatorMedium />
		<Paragraph text={store[3].value} />
		<SeparatorMedium />
		<Twocol>
			<Contactcard
				title={store[4].value}
				subtitle={store[5].value}
				mail={store[6].value}
				fb={store[7].value}
				tel={store[8].value}
			/>
			<div />
		</Twocol>
		<!-- {/if} -->
	{/if}
</main>
<!-- <div id="slider--1" class="grid place-items-center border-4 border-white "> -->
<!-- why idx 1 -> becoz in staticpage, i do it as I want -->
<!-- <Slider items={store[1].posts} /> -->
<!-- </div> -->
