<script lang="ts">
	import { AX__DATASET__event } from '@app/domain/DATA/backend/db-inject/AX__DATASET__event.json';
	import { AX__COLLECTION__EVENT } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { AX__ADD__event } from '@app/domain/DATA/clientend/generic-cms/db-add/AX__ADD__event.json';
	import EVENT_ProchainsRdvApp from '@app/components/catalog/toucherterre/app/TPL/EVENT_ProchainsRdvApp.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import GenericCms from '@app/components/catalog/toucherterre/cms/generic-cms/GenericCms.svelte';

	// .............................................
	//  ROOT INIT CONFIG -- EVENT
	// .............................................
	let MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__event> = {
		conf__col: AX__COLLECTION__EVENT,
		conf__dataset: AX__DATASET__event,
		conf__genericAdd: AX__ADD__event
	};
	// .............................................
</script>

<Framecms>
	<div slot="cms">
		<GenericCms megaconfig={MEGACONFIG_CMS} />
	</div>
	<div slot="app">
		<EVENT_ProchainsRdvApp />
	</div>
</Framecms>
