<script lang="ts">
	import { AX__DATASET__acceuil } from '@app/domain/DATA/backend/db-inject/AX__DATASET__acceuil.json';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/site/AcceuilApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';
	import { reducerStatic } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { redux } from '@app/stores/redux';
	import { AX__CONFIG__REDUX } from '@app/domain/DATA/clientend/tecnology/AX__CONFIG__REDUX.json';
	import { axlog } from '@app/utils/axLog';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store;
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX__COLLECTION__ACCEUIL,
		conf__db_dataset: AX__DATASET__acceuil,
		conf__store: undefined
	};
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
		store = redux(reducerStatic);
		MEGACONFIG_CMS.conf__store = store; // hack: to refresh REACTIVITY

		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		console.dir($store);
		// axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
	});
</script>

<!-- ####################################################### -->
<!-- route: cms-ACCEUIL -->
<!-- ####################################################### -->

{#await promise}
	<Loader />
{:then data}
	<Framecms>
		<!-- CMS -->
		<div slot="cms">
			<GenericCms megaconfig={MEGACONFIG_CMS} />
		</div>
		<!-- APP -->
		<div slot="app">
			<AcceuilApp {store} />
		</div>
	</Framecms>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
