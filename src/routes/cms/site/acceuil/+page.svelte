<script lang="ts">
	import { AX__DATASET__acceuil } from '@app/domain/DATA/backend/db-inject/AX__DATASET__acceuil.json';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/TPL/AcceuilApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';
	// import { STORE__acceuil } from '@app/stores/store';
	import { writable } from 'svelte/store';
	import { reducerBlog } from '@app/stores/storeReducers';
	import { onMount } from 'svelte';
	import { redux } from '@app/stores/redux';

	// .............................................
	//  ROOT INIT CONFIG -- STATIC
	// .............................................
	// const STORE__acceuil = writable<I_UI__inputValue[]>(/* -- */ [] /* -- */);

	let store;
	onMount(() => {
		const devTools =
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__.connect();
		store = redux([], reducerBlog, devTools);
	});

	let MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX__COLLECTION__ACCEUIL,
		conf__db_dataset: AX__DATASET__acceuil,
		conf__store: store // bind here the store
	};

	// .............................................
</script>

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
