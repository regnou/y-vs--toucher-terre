<!-- ####################################################### -->
<!-- 🛣️ route: cms-BLOG -->
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
					<BlogApp bind:dataArrDumb={$store} />
				</div>
			</Framecms>
		</AxLayoutbg1>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<script lang="ts">
	import { AX_COLLECTION__blog } from '@app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import Framecms from '@app/components/catalog/toucherterre/cms/AxFramecms.svelte';
	import { onMount } from 'svelte';
	import { createReduxStore, type T_axStore } from '@app/stores/createReduxStore';
	import { reducerBlog } from '@app/stores/storeReducers';
	import { page } from '$app/stores';
	import Loader from '@app/components/catalog/toucherterre/app/widgets/Loader.svelte';
	import { config__get } from '@app/domain/services/configService';
	import { axlog } from '@app/utils/axLog';
	import BlogApp from '@app/components/catalog/toucherterre/app/frame-pages/BlogApp.svelte';
	import AxLayoutbg1 from '@app/components/catalog/toucherterre/app/AxLayoutbg1.svelte';
	import { AX_CONST__DATASET_blog } from '@app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_blog.json';
	import { AX_CONST__CMS_addPost } from '@app/domain/DATACONST/config-db/uiAdd/AX_CONST__CMS_addPost.json';
	// --------------------------------------------------------
	// PAGE-ROOT & INTELLIGENT
	// --------------------------------------------------------
	let store: T_axStore | undefined = undefined;
	let promise = config__get<I_ENTITY__post>(AX_COLLECTION__blog);

	// 🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__post> = {
		conf__db: AX_COLLECTION__blog,
		conf__db_dataset: AX_CONST__DATASET_blog,
		conf__genericAdd: AX_CONST__CMS_addPost
		// conf__store: undefined // will be defined in OnMount, later, to connect it to chrome-redux-plugin
	};
	// 🔥🔥🔥

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
