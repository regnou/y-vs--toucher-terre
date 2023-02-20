<!-- ####################################################### -->
<!-- route: cms-LA DEMARCHE -->
<!-- ####################################################### -->

{#await promise}
	<Loader />
{:then data}
	<Framecms>
		<!-- CMS -->
		<div slot="cms">
			<GenericCms
				bind:store={$store}
				megaconfig={MEGACONFIG_CMS}
			/>
		</div>
		<!-- APP -->
		<div slot="app">
			<LaDemarcheApp store={$store} />
		</div>
	</Framecms>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<script lang="ts">
	import { AX__DATASET__laDemarche } from '@app/domain/DATA/backend/db-inject/AX__DATASET__laDemarche.json';
	import { AX__COLLECTION__LADEMARCHE } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import LaDemarcheApp from '@app/components/catalog/toucherterre/app/frame-widget/LaDemarcheApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/AxFramecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/frame-widget/AxGenericCms.svelte';
	import { reducerStatic } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { axlog } from '@app/utils/axLog';
	import { config__get } from '@app/domain/services/configService';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__LADEMARCHE);
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX__COLLECTION__LADEMARCHE,
		conf__db_dataset: AX__DATASET__laDemarche
		// conf__store: store
	};
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
