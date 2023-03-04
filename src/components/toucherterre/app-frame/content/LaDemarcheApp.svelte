<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: LA DEMARCHE APP              -->
<!-- ####################################### -->
<!-- .................. -->
<!-- MAX WIDTH for APP -->
<!-- .................. -->
<main class="m-auto max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}">
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	<!-- SHORTCUT -- array?.length -->
	{#if $AX_STORE__CONTENT.length && isEntityInputValues($AX_STORE__CONTENT)}
		<!-- static => inputValue only ! -->
		<!-- {#if isInputValue($AX_STORE__CONTENT)} -->
		<!-- <div class="grid h-full w-full grid-cols-3 gap-10"> -->
		<LayoutGrid>
			<!-- ####################################### -->
			<Cell span={4}>
				<div class="space-y-5">
					<Hero2 title="L'équipe" />
					<Paragraph text={$AX_STORE__CONTENT[0].value} />
					<Separator />
					<Paragraph text={$AX_STORE__CONTENT[1].value} />
					<Separator />
					<Paragraph text={$AX_STORE__CONTENT[2].value} />
					<Separator />
					<!-- src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg" -->
					<img
						class="m-auto"
						src={$AX_STORE__CONTENT[12].value}
						alt=""
					/>
				</div>
			</Cell>
			<!-- ####################################### -->
			<Cell span={4}>
				<div class="space-y-5">
					<Hero2 title="La démarche" />
					<div class="grid grid-flow-col place-items-center">
						<img
							class="h-24 justify-self-end "
							src="/media/icon/icon-contact-decom--creme.png"
							alt=""
						/>
						<img
							class="m-auto"
							src={$AX_STORE__CONTENT[13].value}
							alt=""
						/>
						<!-- <img
							class="h-48"
							src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_02.jpg"
							alt=""
						/> -->
						<img
							class="h-24 rotate-180 justify-self-start"
							src="/media/icon/icon-contact-decom--creme.png"
							alt=""
						/>
					</div>
					<Paragraph text={$AX_STORE__CONTENT[3].value} />
					<Separator />
					<Paragraph text={$AX_STORE__CONTENT[4].value} />
					<Separator />
					<Paragraph text={$AX_STORE__CONTENT[5].value} />
					<Separator />
					<Paragraph text={$AX_STORE__CONTENT[6].value} />
					<Separator />
				</div>
			</Cell>
			<!-- ####################################### -->
			<Cell span={4}>
				<div class="">
					<Hero2 title="formule" />
					<div class="m-5 space-y-5 rounded-md bg-white/10 p-2">
						<Paragraph text={$AX_STORE__CONTENT[7].value} />
						<Separator />
						<Paragraph text={$AX_STORE__CONTENT[8].value} />
						<Separator />
						<Paragraph text={$AX_STORE__CONTENT[9].value} />
						<Separator />
						<Paragraph text={$AX_STORE__CONTENT[10].value} />
						<Separator />
						<Paragraph text={$AX_STORE__CONTENT[11].value} />
					</div>
					<Separator />
					<!-- <div class="w-full bg-red-400"> -->
					<img
						class="m-auto "
						src={$AX_STORE__CONTENT[14].value}
						alt=""
					/>
					<!-- </div> -->
					<!-- <img
						src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg"
						alt=""
					/> -->
				</div>
			</Cell>
		</LayoutGrid>
		<!-- {:else}
			{openSnack('error', `❌ [ page-data ] UNDEFINED or NO-DATA ❌`)} -->
	{/if}
</main>
<!-- {:catch error} -->
<!-- <p style="">{error.message}</p> -->

<!-- // export let $AX_STORE__CONTENT: I_ENTITY__uiinputValue[] | undefined = undefined;
// let promise
// $AX_STORE__CONTENT = await SERVICE__getAllCollections_Sorted<I_ENTITY__uiinputValue>(AX_CONST__TEC_FIREBASE_DB__lademarche, true);
// 🔥🔥🔥 STATIC
// const $AX_STORE__CONTENT__DB: I_DB_CONFIG<I_ENTITY__uiinputValue, I_DTO__uiinputValue> = {
// 	conf__db: AX_CONST__TEC_FIREBASE_DB__lademarche,
// 	conf__db_dataset: AX_CONST__DB_DATASET_JSON__laDemarche
// };
// let $AX_STORE__CONTENT: I_ENTITY__uiinputValue[] | undefined = undefined; -->
<script lang="ts">
	//
	onMount(async () => {
		// log
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'wc -- ****** LA-DEMARCHE_APP ******', false, 'MOUNT', true);
		// init
		// prom
		console.debug('🚔 🏎️🐶 ... -- lademarche');
		$AX_STORE__CONTENT = await SERVICE__getAllCollections_Sorted<I_ENTITY__uiinputValue>(AX_CONST__DB_COLLECTION__lademarche, true);

		$AX_STORE__CONTENT_DB = {
			collection: AX_CONST__DB_COLLECTION__lademarche,
			dataset: AX_CONST__DATASET__laDemarche,
			formAdd: [] // no hay
		};
	});

	onDestroy(() => {
		$AX_STORE__CONTENT = [];
		$AX_STORE__CONTENT_DB = undefined;
	});
	import { page } from '$app/stores';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { AX_CONST__DATASET__laDemarche } from 'app/0-config/config-db/datasets/AX_CONST__DATASET_laDemarche.json';
	import { AX_CONST__DB_COLLECTION__lademarche } from 'app/0-config/config-db/firebase/AX_CONST__DB_COLLECTIONS';
	import { AX_CONST__FRAME__distanceFromHeader, AX_CONST__FRAME__maxBodyApp } from 'app/0-config/config-frame/AX_CONST__FRAME';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityInputValues } from 'app/lib/utils/guards';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { SERVICE__getAllCollections_Sorted } from 'app/stores/AX_BASE3__STORE_SERVICES';
	import { onDestroy, onMount } from 'svelte';
	import Hero2 from '../widgets/Hero2.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Separator from '../widgets/Separator.svelte';
</script>
