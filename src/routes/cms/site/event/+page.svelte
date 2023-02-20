<!-- ####################################################### -->
<!-- route: cmd-EVENT -->
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
			<EventApp store={$store} />
		</div>
	</Framecms>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<script lang="ts">
	import { AX__DATASET__event } from '@app/domain/DATA/backend/db-inject/AX__DATASET__event.json';
	import { AX__COLLECTION__EVENT } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { AX__ADD__event } from '@app/domain/DATA/clientend/generic-cms/db-add/AX__ADD__event.json';
	import Framecms from '@app/components/catalog/toucherterre/cms/AxFramecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/frame-widget/AxGenericCms.svelte';
	import { reducerEvent } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	import { axlog } from '@app/utils/axLog';
	import EventApp from '@app/components/catalog/toucherterre/app/frame-widget/EventApp.svelte';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// ---------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_ENTITY__event>(AX__COLLECTION__EVENT);
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__event> = {
		conf__db: AX__COLLECTION__EVENT,
		conf__db_dataset: AX__DATASET__event,
		conf__genericAdd: AX__ADD__event
		// conf__store: store
	};
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
		store = createReduxStore(reducerEvent);
		// MEGACONFIG_CMS.conf__store = store; // hack: to refresh REACTIVITY

		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		console.dir($store);
		// axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
	});
</script>
