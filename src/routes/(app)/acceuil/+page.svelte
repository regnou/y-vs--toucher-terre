<script lang="ts">
	import { page } from '$app/stores';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/site/AcceuilApp.svelte';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';
	import { redux } from '@app/stores/redux';
	import { reducerStatic } from '@app/stores/storeReducers';
	import { AX__CONFIG__REDUX } from '@app/domain/DATA/clientend/tecnology/AX__CONFIG__REDUX.json';
	import type { Writable } from 'svelte/store';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);
	let store; // ROOT (to pass to DUMB chidrens)
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'ACCEUIL (app)');
		store = redux(reducerStatic);
		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		// axlog($store, $page.url.pathname, 'ACCEUIL (app)');
	});
</script>

<!-- +################################### -->
<!-- route: app-ACCEUIL -->
<!-- +################################### -->

{#await promise}
	<Loader />
{:then data}
	<AcceuilApp {store} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
