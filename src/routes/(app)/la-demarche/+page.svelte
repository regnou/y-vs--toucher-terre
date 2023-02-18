<script lang="ts">
	import LaDemarcheApp from '@app/components/catalog/toucherterre/app/frame-widget/LaDemarcheApp.svelte';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { AX__COLLECTION__LADEMARCHE } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { reducerStatic } from '@app/stores/storeReducers';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';
	import { AX__CONFIG__REDUX } from '@app/domain/DATA/clientend/tecnology/AX__CONFIG__REDUX.json';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__LADEMARCHE);
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'LA-DEMARCHE');
		store = createReduxStore(reducerStatic);
		// store.dispatch('start');
		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		console.dir($store);
		// axlog($store, $page.url.pathname, 'LA-DEMARCHE');
	});
</script>

<!-- +################################### -->
<!-- route: LA DEMARCHE -->
<!-- +################################### -->

{#await promise}
	<Loader />
{:then data}
	<LaDemarcheApp store={$store} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
