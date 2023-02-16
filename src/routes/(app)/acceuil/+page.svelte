<script lang="ts">
	import { page } from '$app/stores';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/TPL/AcceuilApp.svelte';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { redux } from '@app/stores/redux';
	import { reducerBlog } from '@app/stores/storeReducers';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';

	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);

	let store;

	onMount(async () => {
		const devTools =
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__.connect();
		store = redux([], reducerBlog, devTools);
		store.dispatch('start');
		// $store = { ...$store };
		// store.dispatch('log');
		// $store = $store;
		//
		//
		//
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		// store.dispatch('mod-hard', ['torototo']);
		// store.dispatch('mod-hard', ['prolax', 'pablac']);
		// $store = $store;
		// console.log('ok fkc');
		// console.dir($store);
		axlog($store, $page.url.pathname, 'ACCEUIL');
	});
</script>

{#await promise}
	<Loader />
{:then data}
	{#if store}
		<AcceuilApp {store} />
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
