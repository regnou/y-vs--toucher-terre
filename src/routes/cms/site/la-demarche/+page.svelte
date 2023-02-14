<script lang="ts">
	import { AX__DATASET__laDemarche } from '@app/domain/DATA/backend/db-inject/AX__DATASET__laDemarche.json';
	import { AX__COLLECTION__LADEMARCHE } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import LaDemarcheApp from '@app/components/catalog/toucherterre/app/TPL/LaDemarcheApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';
	import { STORE__lademarche } from '@app/stores/store';

	// .............................................
	//  ROOT INIT CONFIG -- STATIC
	// .............................................
	let MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX__COLLECTION__LADEMARCHE,
		conf__db_dataset: AX__DATASET__laDemarche,
		conf__store: STORE__lademarche // bind here the store
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
