<script lang="ts">
	import CreationRealisationApp from '@app/components/catalog/toucherterre/app/TPL/BLOG_CreationRealisationApp.svelte';
	import { AX__COLLECTION__BLOG } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { AX__DATASET__blog } from '@app/domain/DATA/backend/db-inject/AX__DATASET__blog.json';
	import { AX__ADD__post } from '@app/domain/DATA/clientend/generic-cms/db-add/AX__ADD__post.json';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';

	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	//  ROOT INIT CONFIG -- BLOG
	// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
	let MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__post> = {
		conf__col: AX__COLLECTION__BLOG,
		conf__dataset: AX__DATASET__blog,
		conf__genericAdd: AX__ADD__post
	};
	// .............................................
</script>

<!-- ########################################################### -->
<!-- LAYOUT CMS+APP -->
<!-- ########################################################### -->
<!-- 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 -->
<!-- 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 -->
<!-- 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 -->

<Framecms>
	<!-- ................... -->
	<!-- CMS = GENERIC ADMIN -->
	<!-- ................... -->
	<div slot="cms">
		<!-- 🟩 -->
		<GenericCms megaconfig={MEGACONFIG_CMS} />
		<!-- 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 -->
	</div>

	<!-- ................... -->
	<!-- APP -->
	<!-- ................... -->
	<div slot="app">
		<!-- 🟩 -->
		<CreationRealisationApp />
		<!-- 🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊 -->
	</div>
</Framecms>
