<script lang="ts">
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { AX__COLLECTION__EVENT } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { reducerEvent } from '@app/stores/storeReducers';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';
	import EventApp from '@app/components/catalog/toucherterre/app/frame-widget/EventApp.svelte';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_ENTITY__event>(AX__COLLECTION__EVENT);

	// --------------------------------------------------------
	onMount(async () => {
		store = createReduxStore(reducerEvent);
		// // store.dispatch('start');
		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		console.dir($store);
		axlog($store, $page.url.pathname, 'EVENT');
	});
</script>

<!-- +################################### -->
<!-- route:  EVENT -->
<!-- +################################### -->

{#await promise}
	<Loader />
{:then data}
	<EventApp store={$store} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
