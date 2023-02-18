<script lang="ts">
	import { page } from '$app/stores';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/frame-widget/AcceuilApp.svelte';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { reducerStatic } from '@app/stores/storeReducers';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__ACCEUIL);
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'ACCEUIL (app)');

		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon

		store = createReduxStore(reducerStatic);
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
	<AcceuilApp store={$store} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
