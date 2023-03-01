<!-- ####################################################### -->
<!-- 🛣️ route: cms-ACCEUIL -->
<!-- ####################################################### -->
<AxFramecms
	bind:_DAB_
	{_M_}
>
	<div slot="app">
		<AcceuilApp bind:_DAB_ />
	</div>
</AxFramecms>

<script lang="ts">
	// 🔥🔥🔥 STATIC
	const _M_: I_DB_CONFIG<I_ENTITY__uiinputValue, I_DTO__uiinputValue> = {
		conf__db: AX_CONST__SCHEMA_COLLECTIONS_acceuil,
		conf__db_dataset: AX_CONST__DATASET_acceuil
	};
	let _DAB_: I_ENTITY__uiinputValue[] | undefined = undefined;
	import { page } from '$app/stores';
	import AcceuilApp from 'app/components/toucherterre/app/frame-pages/AcceuilApp.svelte';
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import { AX_CONST__DATASET_acceuil } from 'app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_acceuil.json';
	import { AX_CONST__SCHEMA_COLLECTIONS_acceuil } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'ACCEUIL ');
	});
</script>
