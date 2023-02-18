<script lang="ts">
	import { AX__DATASET__acceuil } from '@app/domain/DATA/backend/db-inject/AX__DATASET__acceuil.json';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/frame-widget/AcceuilApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/frame-widget/GenericCms.svelte';
	import { reducerStatic } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { axlog } from '@app/utils/axLog';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX__COLLECTION__ACCEUIL,
		conf__db_dataset: AX__DATASET__acceuil
	};
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
</script>

<!-- ####################################################### -->
<!-- route: cms-ACCEUIL -->
<!-- ####################################################### -->

{#await promise}
	<Loader />
{:then data}
	{#if store}
		<Framecms>
			<!-- CMS -->
			<div slot="cms">
				<GenericCms bind:store={$store} megaconfig={MEGACONFIG_CMS} />
			</div>
			<!-- APP -->
			<div slot="app">
				<AcceuilApp store={$store} />
			</div>
		</Framecms>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
