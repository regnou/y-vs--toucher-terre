<!-- ####################################################### -->
<!-- 🛣️ route: cms-ACCEUIL -->
<!-- ####################################################### -->
{#await promise}
	<Loader />
{:then data}
	{#if store}
		<AxLayoutbg1 isAdmin={true}>
			<Framecms
				bind:store={$store}
				megaconfig={MEGACONFIG_CMS}
			>
				<!-- CMS -->
				<!-- <div slot="cms"> -->
				<!-- <GenericCms
					bind:store={$store}
					megaconfig={MEGACONFIG_CMS}
				/> -->
				<!-- </div> -->
				<!-- APP -->
				<div slot="app">
					<AcceuilApp bind:dataArrDumb={$store} />
				</div>
			</Framecms>
		</AxLayoutbg1>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<script lang="ts">
	import { AX_COLLECTION__acceuil } from '@app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/frame-pages/AcceuilApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/AxFramecms.svelte';
	import { reducerStatic } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { axlog } from '@app/utils/axLog';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	import AxLayoutbg1 from '@app/components/catalog/toucherterre/app/AxLayoutbg1.svelte';
	import { AX_CONST__DATASET_acceuil } from '@app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_acceuil.json';
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX_COLLECTION__acceuil);

	// 🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX_COLLECTION__acceuil,
		conf__db_dataset: AX_CONST__DATASET_acceuil
	};
	// 🔥🔥🔥
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
		// fetch data
		console.debug('...');
		const r = await promise; // les types MATCH donc le biding devrait etre bon
		// create store connected to Redux & init it with data fetched (x1 time, becoz in mount)
		store = createReduxStore(reducerStatic);
		store.dispatch('mod-hard', r);
		// console.dir($store);
		// axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
	});

	// onMount(async () => {
	// 	axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
	// 	// fetch data
	// 	console.debug('...');
	// 	const r = await promise; // les types MATCH donc le biding devrait etre bon
	// 	// create store connected to Redux & init it with data fetched (x1 time, becoz in mount)
	// 	store = createReduxStore(reducerStatic);
	// 	store.dispatch('mod-hard', r);
	// 	// console.dir($store);
	// 	// axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
	// });
</script>
