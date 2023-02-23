<!-- ####################################################### -->
<!-- route: cmd-EVENT -->
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
				<!-- CMS -->
				<!-- <div slot="cms">
			<GenericCms
				bind:store={$store}
				megaconfig={MEGACONFIG_CMS}
			/>
		</div> -->
				<!-- APP -->
				<div slot="app">
					<EventApp bind:dataArrDumb={$store} />
				</div>
			</Framecms>
		</AxLayoutbg1>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<script lang="ts">
	import { AX_COLLECTION__event } from '@app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import { AX_CONST__CMS_addEvent } from '@app/domain/DATACONST/config-db/uiAdd/AX_CONST__CMS_addEvent.json';
	import Framecms from '@app/components/catalog/toucherterre/cms/AxFramecms.svelte';
	import { reducerEvent } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	import { axlog } from '@app/utils/axLog';
	import EventApp from '@app/components/catalog/toucherterre/app/frame-pages/EventApp.svelte';
	import AxLayoutbg1 from '@app/components/catalog/toucherterre/app/AxLayoutbg1.svelte';
	import { AX_CONST__DATASET_event } from '@app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_event.json';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// ---------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_ENTITY__event>(AX_COLLECTION__event);

	// 🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__event> = {
		conf__db: AX_COLLECTION__event,
		conf__db_dataset: AX_CONST__DATASET_event,
		conf__genericAdd: AX_CONST__CMS_addEvent
		// conf__store: store
	};
	// 🔥🔥🔥

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
