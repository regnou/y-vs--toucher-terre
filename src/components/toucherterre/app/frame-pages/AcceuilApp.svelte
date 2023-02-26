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
		{#if _DAB_?.length}
			<Hero
				img={_DAB_[0].value}
				text={_DAB_[1].value}
			/>
			<SeparatorMedium />
			<Title text={_DAB_[2].value} />
			<SeparatorMedium />
			<Paragraph text={_DAB_[3].value} />
			<SeparatorMedium />
			<Twocol>
				<Contactcard
					title={_DAB_[4].value}
					subtitle={_DAB_[5].value}
					mail={_DAB_[6].value}
					fb={_DAB_[7].value}
					tel={_DAB_[8].value}
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
	import { AX_CONST__SCHEMA_COLLECTIONS_acceuil } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import {
		AX_CONST__FRAME_distanceFromHeader,
		AX_CONST__FRAME_maxBodyApp
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { config__gets } from 'app/domain/services/configService';
	import { onMount } from 'svelte';
	import Contactcard from '../widgets/Contactcard.svelte';
	import Hero from '../widgets/Hero.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import SeparatorMedium from '../widgets/SeparatorMedium.svelte';
	import Title from '../widgets/Title.svelte';
	import Twocol from '../widgets/Twocol.svelte';
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	// ----------------------------------------------------------
	export let _DAB_: I_ENTITY__uiinputValue[] | undefined = undefined;
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	// let store: T_axStore | undefined = undefined;
	let promise = config__gets<I_ENTITY__uiinputValue>(AX_CONST__SCHEMA_COLLECTIONS_acceuil);
	// --------------------------------------------------------

	onMount(async () => {
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
		// console.debug('...');
		// const r = await promise; // les types MATCH donc le bding devrait etre bon
		// store = createReduxStore(reducerStatic);
		// store.dispatch('mod-hard', r);
		// // hack
		// _DAB_ = $store;
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
		//
		//
		axlog(_DAB_, $page.url.pathname, 'ACCEUIL (app)');
		console.debug('...');
		// const r = await promise; // les types MATCH donc le bding devrait etre bon
		// store = createReduxStore(reducerStatic);
		// store.dispatch('mod-hard', r);
		// hack
		_DAB_ = await promise;
		// _DAB_ = $store;
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
	});
</script>
