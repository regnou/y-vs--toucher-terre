<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: LA DEMARCHE APP              -->
<!-- ####################################### -->
{#await promise}
	<!-- <Loader /> -->
{:then data}
	<!-- .................. -->
	<!-- MAX WIDTH for APP -->
	<!-- .................. -->
	<main class="m-auto max-w-{AX_CONST__FRAME_maxBodyApp} {AX_CONST__FRAME_distanceFromHeader}">
		<!-- SHORTCUT -- array?.length -->
		{#if _DAB_ && _DAB_.length}
			<!-- static => inputValue only ! -->
			<!-- {#if isInputValue(_DAB_)} -->
			<!-- <div class="grid h-full w-full grid-cols-3 gap-10"> -->
			<LayoutGrid>
				<!-- ####################################### -->

				<Cell span={4}>
					<div class="space-y-5">
						<Hero2 title="L'équipe" />
						<Paragraph text={_DAB_[0].value} />
						<Separator />
						<Paragraph text={_DAB_[1].value} />
						<Separator />
						<Paragraph text={_DAB_[2].value} />
						<Separator />
						<!-- src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg" -->
						<img
							class="m-auto"
							src={_DAB_[12].value}
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
								src={_DAB_[13].value}
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
						<Paragraph text={_DAB_[3].value} />
						<Separator />
						<Paragraph text={_DAB_[4].value} />
						<Separator />
						<Paragraph text={_DAB_[5].value} />
						<Separator />
						<Paragraph text={_DAB_[6].value} />
						<Separator />
					</div>
				</Cell>
				<!-- ####################################### -->

				<Cell span={4}>
					<div class="">
						<Hero2 title="formule" />
						<div class="m-5 space-y-5 rounded-md bg-white/10 p-2">
							<Paragraph text={_DAB_[7].value} />
							<Separator />
							<Paragraph text={_DAB_[8].value} />
							<Separator />
							<Paragraph text={_DAB_[9].value} />
							<Separator />
							<Paragraph text={_DAB_[10].value} />
							<Separator />
							<Paragraph text={_DAB_[11].value} />
						</div>
						<Separator />
						<!-- <div class="w-full bg-red-400"> -->
						<img
							class="m-auto "
							src={_DAB_[14].value}
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
{:catch error}
	<p style="">{error.message}</p>
{/await}

<script lang="ts">
	export let _DAB_: I_ENTITY__uiinputValue[] | undefined = undefined;
	let promise =
		ConfigServices.getInstance().config__getAllCollections_Sorted<I_ENTITY__uiinputValue>(
			AX_CONST__SCHEMA_COLLECTIONS_lademarche
		);
	onMount(async () => {
		axlog(_DAB_, $page.url.pathname, '****** LA-DEMARCHE ******', false, 'MOUNT', true);
		console.debug('🚔 🏎️🐶 ... -- lademarche');
		_DAB_ = await promise;
	});
	import { page } from '$app/stores';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { AX_CONST__SCHEMA_COLLECTIONS_lademarche } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import {
		AX_CONST__FRAME_distanceFromHeader,
		AX_CONST__FRAME_maxBodyApp
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { ConfigServices } from 'app/domain/services/ConfigServices';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	import Hero2 from '../widgets/Hero2.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Separator from '../widgets/Separator.svelte';
</script>
