<script lang="ts">
	import BlogApp from '@app/components/catalog/toucherterre/app/site/BlogApp.svelte';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { AX__COLLECTION__BLOG } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { redux } from '@app/stores/redux';
	import { reducerBlog } from '@app/stores/storeReducers';
	import { axlog } from '@app/utils/axLog';
	import { onMount } from 'svelte';
	import { AX__CONFIG__REDUX } from '@app/domain/DATA/clientend/tecnology/AX__CONFIG__REDUX.json';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let promise = config__get<I_ENTITY__post>(AX__COLLECTION__BLOG);
	let store; // FROM root TO --> dumb-child
	// --------------------------------------------------------
	onMount(async () => {
		store = redux(reducerBlog);
		// store.dispatch('start');
		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		console.dir($store);
		axlog($store, $page.url.pathname, 'BLOG');
	});
</script>

<!-- +################################### -->
<!-- route: BLOG -->
<!-- +################################### -->

{#await promise}
	<Loader />
{:then data}
	<BlogApp {store} />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
