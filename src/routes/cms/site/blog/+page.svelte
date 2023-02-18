<script lang="ts">
	import { AX__COLLECTION__BLOG } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { AX__DATASET__blog } from '@app/domain/DATA/backend/db-inject/AX__DATASET__blog.json';
	import { AX__ADD__post } from '@app/domain/DATA/clientend/generic-cms/db-add/AX__ADD__post.json';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';
	import { onMount } from 'svelte';
	import { redux } from '@app/stores/redux';
	import { AX__CONFIG__REDUX } from '@app/domain/DATA/clientend/tecnology/AX__CONFIG__REDUX.json';
	import { reducerBlog } from '@app/stores/storeReducers';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	import { axlog } from '@app/utils/axLog';
	import BlogApp from '@app/components/catalog/toucherterre/app/site/BlogApp.svelte';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store;
	let promise = config__get<I_ENTITY__post>(AX__COLLECTION__BLOG);
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__post> = {
		conf__db: AX__COLLECTION__BLOG,
		conf__db_dataset: AX__DATASET__blog,
		conf__genericAdd: AX__ADD__post,
		conf__store: undefined
	};
	// --------------------------------------------------------
	onMount(async () => {
		axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
		store = redux(reducerBlog);
		MEGACONFIG_CMS.conf__store = store; // hack: to refresh REACTIVITY

		console.debug('...');
		const r = await promise; // les types MATCH donc le bding devrait etre bon
		store.dispatch('mod-hard', r);
		console.dir($store);
		// axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
	});
</script>

<!-- ####################################################### -->
<!-- route: cms-BLOG -->
<!-- ####################################################### -->

{#await promise}
	<Loader />
{:then data}
	<Framecms>
		<!-- CMS -->
		<div slot="cms">
			<GenericCms megaconfig={MEGACONFIG_CMS} />
		</div>
		<!-- APP -->
		<div slot="app">
			<BlogApp {store} />
		</div>
	</Framecms>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
