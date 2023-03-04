<!-- +################################### -->
<!-- comp-site: ACCEUIL APP                  -->
<!-- ####################################### -->
<!-- .................. -->
<!-- MAX WIDTH for APP -->
<!-- .................. -->
<main class="m-auto max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}">
	<!-- <main class="m-auto space-y-5 max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}"> -->
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	{#if $AX_STORE__CONTENT.length && isEntityInputValues($AX_STORE__CONTENT)}
		<Hero
			img={$AX_STORE__CONTENT[0].value}
			text={$AX_STORE__CONTENT[1].value}
		/>
		<SeparatorMedium />
		<Title text={$AX_STORE__CONTENT[2].value} />
		<SeparatorMedium />
		<Paragraph text={$AX_STORE__CONTENT[3].value} />
		<SeparatorMedium />
		<Twocol>
			<Contactcard
				title={$AX_STORE__CONTENT[4].value}
				subtitle={$AX_STORE__CONTENT[5].value}
				mail={$AX_STORE__CONTENT[6].value}
				fb={$AX_STORE__CONTENT[7].value}
				tel={$AX_STORE__CONTENT[8].value}
			/>
			<div />
		</Twocol>
	{/if}
</main>
<!-- <div id="slider--1" class="grid place-items-center border-4 border-white "> -->
<!-- why idx 1 -> becoz in staticpage, i do it as I want -->
<!-- <Slider items={store[1].posts} /> -->
<!-- // export let $AX_STORE__CONTENT: I_ENTITY__uiinputValue[] | undefined = undefined;
	// let promise = SERVICE__getAllCollections_Sorted<I_ENTITY__uiinputValue>(AX_CONST__TEC_FIREBASE_DB__acceuil, true);
	// const $AX_STORE__CONTENT__DB: I_DB_CONFIG<I_ENTITY__uiinputValue, I_DTO__uiinputValue> = {
	// 	conf__db: AX_CONST__TEC_FIREBASE_DB__acceuil,
	// 	conf__db_dataset: AX_CONST__DB_DATASET_JSON__acceuil
	// };
	// let $AX_STORE__CONTENT: I_ENTITY__uiinputValue[] | undefined = undefined;
	 -->

<!-- </div> -->
<script lang="ts">
	onMount(async () => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'wc -- ****** ACCEUIL_APP ******', false, 'MOUNT', true);
		console.debug('🚔 🏎️🐶 ... -- acceuil');
		$AX_STORE__CONTENT = await SERVICE__getAllCollections_Sorted<I_ENTITY__uiinputValue>(AX_CONST__DB_COLLECTION__acceuil, true);
		$AX_STORE__CONTENT_DB = {
			collection: AX_CONST__DB_COLLECTION__acceuil,
			dataset: AX_CONST__DATASET__acceuil,
			formAdd: [] // no hay
		};
	});

	onDestroy(() => {
		$AX_STORE__CONTENT = [];
		$AX_STORE__CONTENT_DB = undefined;
	});
	// import Slider from '../Slider.svelte';
	import { page } from '$app/stores';
	import { AX_CONST__DATASET__acceuil } from 'app/0-config/config-db/datasets/AX_CONST__DATASET_acceuil.json';
	import { AX_CONST__FRAME__distanceFromHeader, AX_CONST__FRAME__maxBodyApp } from 'app/0-config/config-frame/AX_CONST__FRAME';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityInputValues } from 'app/lib/utils/guards';
	import { SERVICE__getAllCollections_Sorted } from 'app/stores/AX_BASE3__STORE_SERVICES';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onDestroy, onMount } from 'svelte';
	import Contactcard from '../widgets/Contactcard.svelte';
	import Hero from '../widgets/Hero.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import SeparatorMedium from '../widgets/SeparatorMedium.svelte';
	import Title from '../widgets/Title.svelte';
	import Twocol from '../widgets/Twocol.svelte';
	import { AX_CONST__DB_COLLECTION__acceuil } from 'app/0-config/config-db/firebase/AX_CONST__DB_COLLECTIONS';
</script>
