<!-- ####################################################### -->
<!-- route: cmd-EVENT                                        -->
<!-- ####################################################### -->
<AxFramecms
	bind:dataArrDumb
	megaconfig={MEGACONFIG_CMS}
>
	<div slot="app">
		<EventApp {dataArrDumb} />
	</div>
</AxFramecms>

<script lang="ts">
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import EventApp from 'app/components/toucherterre/app/frame-pages/EventApp.svelte';
	import { AX_CONST__CMS_addEvent } from 'app/domain/DATACONST/config-db/uiAdd/AX_CONST__CMS_addEvent.json';
	import { AX_CONST__DATASET_event } from 'app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_event.json';
	import { AX_CONST__SCHEMA_COLLECTIONS_event } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	// ---------------------------------------
	let dataArrDumb: I_ENTITY__event[] | undefined = undefined;
	// 🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_ENTITY__event> = {
		conf__db: AX_CONST__SCHEMA_COLLECTIONS_event,
		conf__db_dataset: AX_CONST__DATASET_event,
		conf__genericAdd: AX_CONST__CMS_addEvent
	};
	// 🔥🔥🔥
</script>
