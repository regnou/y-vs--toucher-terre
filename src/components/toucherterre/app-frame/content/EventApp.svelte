<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: EVENT APP                    -->
<!-- ####################################### -->
<!-- .................. -->
<!-- MAX WIDTH for APP -->
<!-- .................. -->
<main class="m-auto max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}">
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	{#if $AX_STORE__CONTENT.length && isEntityEvents($AX_STORE__CONTENT)}
		<LayoutGrid>
			{#each $AX_STORE__CONTENT as entity, pos (entity.idDoc)}
				<Cell spanDevices={{ desktop: 2, tablet: 4, phone: 4 }}>
					<!-- <div class="demo-cell"> -->
					<Eventcard event={entity} />
					<!-- </div> -->
				</Cell>
			{/each}
		</LayoutGrid>
		<!-- {:else}
			{openSnack('error', `❌ [ page-data ] UNDEFINED or NO-DATA ❌`)} -->
	{/if}
</main>

<!-- // export let $AX_STORE__CONTENT: I_ENTITY__event[] | undefined = undefined;
// let promise = SERVICE__getAllCollections_Sorted<I_ENTITY__event>(AX_CONST__TEC_FIREBASE_DB__event);
// // 🔥🔥🔥 DYN
// const $AX_STORE__CONTENT__DB: I_DB_CONFIG<I_ENTITY__event, I_DTO__event> = {
// 	conf__db: AX_CONST__TEC_FIREBASE_DB__event,
// 	conf__db_dataset: AX_CONST__DB_DATASET_JSON__event,
// 	conf__genericAdd: AX_CONST__DB_FORM_ADD_JSON__event
// };
// let $AX_STORE__CONTENT: I_ENTITY__event[] | undefined = undefined; -->
<script lang="ts">
	onMount(async () => {
		console.debug('🚔 🏎️🐶 ... -- event-app');
		await ACTION__getallSorted<I_ENTITY__event>(AX_CONST__DB_COLLECTION__event, AX_CONST__DATASET__event, AX_CONST__FORM_ADD__event);
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ****** EVENT_APP ******', false, 'MOUNT', true);
	});
	onDestroy(() => {
		console.log('destroy -------------------------------');
		$AX_STORE__CONTENT = [];
		$AX_STORE__CONTENT_DB = undefined;
	});
	import { page } from '$app/stores';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { AX_CONST__FORM_ADD__event } from 'app/0-config/db/uiAdd/AX_CONST__FORM_ADD__event.json';
	import { AX_CONST__FRAME__distanceFromHeader, AX_CONST__FRAME__maxBodyApp } from 'app/0-config/frame/AX_CONST__FRAME';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityEvents } from 'app/lib/utils/guards';
	import { SERVICE__getAllCollections_Sorted } from 'app/stores/AX_BASE3__STORE_SERVICES';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onDestroy, onMount } from 'svelte';

	import { AX_CONST__DATASET__event } from 'app/0-config/db/datasets/AX_CONST__DATASET_event.json';
	import Eventcard from '../widgets/Eventcard.svelte';
	import { AX_CONST__DB_COLLECTION__event } from 'app/0-config/db/firebase/AX_CONST__dbColletions';
	import { ACTION__getallSorted } from 'app/stores/AX_BASE2__STORE_ACTIONS';
</script>
