<!-- ####################################################### -->
<!-- route: cmd-EVENT                                        -->
<!-- ####################################################### -->
<AxFramecms
	bind:_DAB_
	{_M_}
>
	<div slot="app">
		<EventApp bind:_DAB_ />
	</div>
</AxFramecms>

<script lang="ts">
	// 🔥🔥🔥 DYN
	const _M_: I_DB_CONFIG<I_ENTITY__event, I_DTO__event> = {
		conf__db: AX_CONST__SCHEMA_COLLECTIONS_event,
		conf__db_dataset: AX_CONST__DATASET_event,
		conf__genericAdd: AX_CONST__CMS_addEvent
	};
	let _DAB_: I_ENTITY__event[] | undefined = undefined;
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import EventApp from 'app/components/toucherterre/app/frame-pages/EventApp.svelte';
	import { AX_CONST__CMS_addEvent } from 'app/domain/DATACONST/config-db/uiAdd/AX_CONST__CMS_addEvent.json';
	import { AX_CONST__DATASET_event } from 'app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_event.json';
	import { AX_CONST__SCHEMA_COLLECTIONS_event } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { axlog } from 'app/utils/axLog';
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'EVENT ');
	});
</script>
