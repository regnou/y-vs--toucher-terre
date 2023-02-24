<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: ACCEUIL APP                  -->
<!-- ####################################### -->
<!-- tip: MAX WIDTH FOR FRONT CONTENT        -->

{#await promise}
	<!-- <Loader /> -->
{:then data}
	<!-- .................. -->
	<!-- MAX WIDTH for APP -->
	<!-- .................. -->
	<main
		class="m-auto space-y-5 max-w-{AX_CONST__FRAME_maxBodyApp} {AX_CONST__FRAME_distanceFromHeader}"
	>
		<!-- SHORTCUT --  -->
		{#if dataArrDumb?.length}
			<Hero
				img={dataArrDumb[0].value}
				text={dataArrDumb[1].value}
			/>
			<SeparatorMedium />
			<Title text={dataArrDumb[2].value} />
			<SeparatorMedium />
			<Paragraph text={dataArrDumb[3].value} />
			<SeparatorMedium />
			<Twocol>
				<Contactcard
					title={dataArrDumb[4].value}
					subtitle={dataArrDumb[5].value}
					mail={dataArrDumb[6].value}
					fb={dataArrDumb[7].value}
					tel={dataArrDumb[8].value}
				/>
				<div />
			</Twocol>
			<!-- {/if} -->
			<!-- {:else} -->
			<!-- {openSnack('error', `❌ [ page-data ] UNDEFINED or NO-DATA ❌`)} -->
		{/if}
	</main>
{:catch error}
	<p style="">{error.message}</p>
{/await}

<!-- <div id="slider--1" class="grid place-items-center border-4 border-white "> -->
<!-- why idx 1 -> becoz in staticpage, i do it as I want -->
<!-- <Slider items={store[1].posts} /> -->

<!-- </div> -->
<script lang="ts">
	// import Slider from '../Slider.svelte';
	import { onMount } from 'svelte';
	import Contactcard from '../widgets/Contactcard.svelte';
	import Hero from '../widgets/Hero.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import SeparatorMedium from '../widgets/SeparatorMedium.svelte';
	import Title from '../widgets/Title.svelte';
	import Twocol from '../widgets/Twocol.svelte';
	import { AX_CONST__SCHEMA_COLLECTIONS_acceuil } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import {
		AX_CONST__FRAME_distanceFromHeader,
		AX_CONST__FRAME_maxBodyApp
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { config__get } from 'app/domain/services/configService';
	import Loader from '../widgets/Loader.svelte';

	// ----------------------------------------------------------
	export let dataArrDumb: I_UI__inputValue[] | undefined = undefined;
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	// let store: T_axStore | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX_CONST__SCHEMA_COLLECTIONS_acceuil);
	// --------------------------------------------------------
	onMount(async () => {
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
		// console.debug('...');
		// const r = await promise; // les types MATCH donc le bding devrait etre bon
		// store = createReduxStore(reducerStatic);
		// store.dispatch('mod-hard', r);
		// // hack
		// dataArrDumb = $store;
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
		//
		//
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
		console.debug('...');
		// const r = await promise; // les types MATCH donc le bding devrait etre bon
		// store = createReduxStore(reducerStatic);
		// store.dispatch('mod-hard', r);
		// hack
		dataArrDumb = await promise;
		// dataArrDumb = $store;
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
	});
</script>
