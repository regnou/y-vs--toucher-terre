<!-- ####################################################### -->
<!-- 🛣️ route: cms-BLOG -->
<!-- ####################################################### -->
<AxFramecms
	bind:dataArrDumb
	megaconfig={MEGACONFIG_CMS}
>
	<div slot="app">
		<BlogApp bind:dataArrDumb />
	</div>
</AxFramecms>

<script lang="ts">
	import BlogApp from 'app/components/toucherterre/app/frame-pages/BlogApp.svelte';
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import { AX_CONST__DATASET_blog } from 'app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_blog.json';
	import { AX_CONST__SCHEMA_COLLECTIONS_blog } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import { AX_CONST__CMS_addPost } from 'app/domain/DATACONST/config-db/uiAdd/AX_CONST__CMS_addPost.json';
	// --------------------------------------------------------
	let dataArrDumb: I_ENTITY__post[] | undefined = undefined;
	// 🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__post> = {
		conf__db: AX_CONST__SCHEMA_COLLECTIONS_blog,
		conf__db_dataset: AX_CONST__DATASET_blog,
		conf__genericAdd: AX_CONST__CMS_addPost
	};
	// 🔥🔥🔥

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { axlog } from 'app/utils/axLog';
	onMount(() => {
		axlog(dataArrDumb, $page.url.pathname, 'BLOG (cms)');
	});
</script>
