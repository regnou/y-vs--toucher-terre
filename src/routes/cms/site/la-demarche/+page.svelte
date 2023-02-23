<!-- ####################################################### -->
<!-- route: cms-LA DEMARCHE -->
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
				<!-- <div slot="cms">
				<!-- APP -->
				<div slot="app">
					<LaDemarcheApp bind:dataArrDumb={$store} />
				</div>
			</Framecms>
		</AxLayoutbg1>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<script lang="ts">
	import { AX_COLLECTION__lademarche } from '@app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import Framecms from '@app/components/catalog/toucherterre/cms/AxFramecms.svelte';
	import { reducerStatic } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { axlog } from '@app/utils/axLog';
	import { config__get } from '@app/domain/services/configService';
	import AxLayoutbg1 from '@app/components/catalog/toucherterre/app/AxLayoutbg1.svelte';
	import LaDemarcheApp from '@app/components/catalog/toucherterre/app/frame-pages/LaDemarcheApp.svelte';
	import { AX_CONST__DATASET_laDemarche } from '@app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_laDemarche.json';
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX_COLLECTION__lademarche);
	const MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX_COLLECTION__lademarche,
		conf__db_dataset: AX_CONST__DATASET_laDemarche
		// conf__store: store
	}; // 🔥🔥🔥
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'LA DEMARCHE (cms)');
		store = createReduxStore(reducerStatic);
		// MEGACONFIG_CMS.conf__store = store; // hack: to refresh REACTIVITY

		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		console.dir($store);
		// axlog($store, $page.url.pathname, 'LA DEMARCHE (cms)');
	});
</script>
