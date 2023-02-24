<!-- ####################################################### -->
<!-- 🛣️ route: cms-ACCEUIL -->
<!-- ####################################################### -->
<AxFramecms
	bind:dataArrDumb
	megaconfig={MEGACONFIG_CMS}
>
	<div slot="app">
		<AcceuilApp {dataArrDumb} />
	</div>
</AxFramecms>

<script lang="ts">
	import AcceuilApp from 'app/components/toucherterre/app/frame-pages/AcceuilApp.svelte';
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import { AX_CONST__DATASET_acceuil } from 'app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_acceuil.json';
	import { AX_CONST__SCHEMA_COLLECTIONS_acceuil } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	// --------------------------------------------------------
	let dataArrDumb: I_UI__inputValue[] | undefined = undefined;
	// 🔥🔥🔥
	const MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX_CONST__SCHEMA_COLLECTIONS_acceuil,
		conf__db_dataset: AX_CONST__DATASET_acceuil
	};
</script>
