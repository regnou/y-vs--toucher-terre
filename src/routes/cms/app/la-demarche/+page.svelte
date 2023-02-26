<!-- ####################################################### -->
<!-- route: cms-LA DEMARCHE                                  -->
<!-- ####################################################### -->
<AxFramecms
	bind:_DAB_
	{_M_}
>
	<div slot="app">
		<!-- tip: OBLIGE d utiliser le module de fetch data du compo ren READ -->
		<!-- tip: pas de bind, car le front ne modifie jamias les datas -->
		<LaDemarcheApp bind:_DAB_ />
	</div>
</AxFramecms>

<script lang="ts">
	let _DAB_: I_ENTITY__uiinputValue[] | undefined = undefined;
	// 🔥🔥🔥
	const _M_: I_DB_CONFIG<I_ENTITY__uiinputValue, I_DTO__uiinputValue> = {
		conf__db: AX_CONST__SCHEMA_COLLECTIONS_lademarche,
		conf__db_dataset: AX_CONST__DATASET_laDemarche
	};
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { axlog } from 'app/utils/axLog';
	import LaDemarcheApp from 'app/components/toucherterre/app/frame-pages/LaDemarcheApp.svelte';
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import { AX_CONST__DATASET_laDemarche } from 'app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_laDemarche.json';
	import { AX_CONST__SCHEMA_COLLECTIONS_lademarche } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'LA DEMARCHE (cms)');
	});
</script>
