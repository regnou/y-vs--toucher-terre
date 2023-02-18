<script lang="ts">
	import { AX__COLLECTION__BLOG } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { AX__DATASET__blog } from '@app/domain/DATA/backend/db-inject/AX__DATASET__blog.json';
	import { AX__ADD__post } from '@app/domain/DATA/clientend/generic-cms/db-add/AX__ADD__post.json';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/frame-widget/GenericCms.svelte';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { reducerBlog } from '@app/stores/storeReducers';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	import { axlog } from '@app/utils/axLog';
	import BlogApp from '@app/components/catalog/toucherterre/app/frame-widget/BlogApp.svelte';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_ENTITY__post>(AX__COLLECTION__BLOG);
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__post> = {
		conf__db: AX__COLLECTION__BLOG,
		conf__db_dataset: AX__DATASET__blog,
		conf__genericAdd: AX__ADD__post
		// conf__store: undefined // will be defined in OnMount, later, to connect it to chrome-redux-plugin
	};
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	// the store is created with REDUX,
	// and we wait to create this store in the onMount
	// becoz we need to connect it to the REDUX PLUGIN CHROME
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	onMount(async () => {
		axlog($store, $page.url.pathname, 'ACCEUIL (cms)');
		store = createReduxStore(reducerBlog);

		// hack: to refresh REACTIVITY
		// MEGACONFIG_CMS.conf__store = store;

		// fetch DB and init store
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
			<GenericCms bind:store={$store} megaconfig={MEGACONFIG_CMS} />
		</div>
		<!-- APP -->
		<div slot="app">
			<BlogApp store={$store} />
		</div>
	</Framecms>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
