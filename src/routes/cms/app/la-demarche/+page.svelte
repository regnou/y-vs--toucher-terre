<!-- ####################################################### -->
<!-- route: cms-LA DEMARCHE                                  -->
<!-- ####################################################### -->
<AxFramecms
	bind:dataArrDumb
	megaconfig={MEGACONFIG_CMS}
>
	<!-- BEFORE: <div slot="cms"> -->
	<div slot="app">
		<!-- tip: OBLIGE d utiliser le module de fetch data du compo ren READ -->
		<!-- tip: pas de bind, car le front ne modifie jamias les datas -->
		<LaDemarcheApp bind:dataArrDumb />
	</div>
</AxFramecms>

<script lang="ts">
	import LaDemarcheApp from 'app/components/toucherterre/app/frame-pages/LaDemarcheApp.svelte';
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import { AX_CONST__DATASET_laDemarche } from 'app/domain/DATACONST/config-db/datasets/AX_CONST__DATASET_laDemarche.json';
	import { AX_CONST__SCHEMA_COLLECTIONS_lademarche } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	// --------------------------------------------------------
	let dataArrDumb: I_UI__inputValue[] | undefined = undefined;
	const MEGACONFIG_CMS: I_megaconfig__cms<I_UI__inputValue> = {
		conf__db: AX_CONST__SCHEMA_COLLECTIONS_lademarche,
		conf__db_dataset: AX_CONST__DATASET_laDemarche
	};
	// 🔥🔥🔥

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { axlog } from 'app/utils/axLog';
	onMount(() => {
		axlog(dataArrDumb, $page.url.pathname, 'LA DEMARCHE (cms)');
	});
</script>
