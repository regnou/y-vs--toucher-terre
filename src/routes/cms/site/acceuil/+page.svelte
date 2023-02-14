<script lang="ts">
	import { AX__DATASET__acceuil } from '@app/domain/DATA/backend/db-inject/AX__DATASET__acceuil.json';
	import { AX__COLLECTION__ACCEUIL } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import AcceuilApp from '@app/components/catalog/toucherterre/app/TPL/AcceuilApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';

	// .............................................
	//  ROOT INIT CONFIG -- STATIC
	// .............................................
	let MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__col: AX__COLLECTION__ACCEUIL,
		conf__dataset: AX__DATASET__acceuil
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
		<AcceuilApp />
	</div>
</Framecms>
