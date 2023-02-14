<script lang="ts">
	import { AX__DATASET__laDemarche } from '@app/domain/DATA/backend/db-inject/AX__DATASET__laDemarche.json';
	import { AX__COLLECTION__LADEMARCHE } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import LaDemarcheApp from '@app/components/catalog/toucherterre/app/TPL/LaDemarcheApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';

	// .............................................
	//  ROOT INIT CONFIG -- STATIC
	// .............................................
	let MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__col: AX__COLLECTION__LADEMARCHE,
		conf__dataset: AX__DATASET__laDemarche
	};
	// .............................................
</script>

<Framecms>
	<div slot="cms">
		<GenericCms megaconfig={MEGACONFIG_CMS} />
	</div>
	<div slot="app">
		<LaDemarcheApp />
	</div>
</Framecms>
