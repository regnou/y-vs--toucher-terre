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
		{#if dataArrDumb && dataArrDumb.length}
			<!-- static => inputValue only ! -->
			<!-- {#if isInputValue(dataArrDumb)} -->
			<!-- <div class="grid h-full w-full grid-cols-3 gap-10"> -->
			<LayoutGrid>
				<!-- ####################################### -->

				<Cell span={4}>
					<div class="space-y-5">
						<Hero2 title="L'équipe" />
						<Paragraph text={dataArrDumb[0].value} />
						<Separator />
						<Paragraph text={dataArrDumb[1].value} />
						<Separator />
						<Paragraph text={dataArrDumb[2].value} />
						<Separator />
						<!-- src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg" -->
						<img
							class="m-auto"
							src={dataArrDumb[12].value}
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
								src={dataArrDumb[13].value}
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
						<Paragraph text={dataArrDumb[3].value} />
						<Separator />
						<Paragraph text={dataArrDumb[4].value} />
						<Separator />
						<Paragraph text={dataArrDumb[5].value} />
						<Separator />
						<Paragraph text={dataArrDumb[6].value} />
						<Separator />
					</div>
				</Cell>
				<!-- ####################################### -->

				<Cell span={4}>
					<div class="">
						<Hero2 title="formule" />
						<div class="m-5 space-y-5 rounded-md bg-white/10 p-2">
							<Paragraph text={dataArrDumb[7].value} />
							<Separator />
							<Paragraph text={dataArrDumb[8].value} />
							<Separator />
							<Paragraph text={dataArrDumb[9].value} />
							<Separator />
							<Paragraph text={dataArrDumb[10].value} />
							<Separator />
							<Paragraph text={dataArrDumb[11].value} />
						</div>
						<Separator />
						<!-- <div class="w-full bg-red-400"> -->
						<img
							class="m-auto "
							src={dataArrDumb[14].value}
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
	import Hero2 from '../widgets/Hero2.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Separator from '../widgets/Separator.svelte';
	import { onMount } from 'svelte';
	import Loader from '../widgets/Loader.svelte';
	import { config__get } from 'app/domain/services/configService';
	import { AX_CONST__SCHEMA_COLLECTIONS_lademarche } from 'app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import {
		AX_CONST__FRAME_distanceFromHeader,
		AX_CONST__FRAME_maxBodyApp
	} from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	// --------------------------------------------------------
	export let dataArrDumb: I_UI__inputValue[] | undefined = undefined;
	let promise = config__get<I_UI__inputValue>(AX_CONST__SCHEMA_COLLECTIONS_lademarche);
	// --------------------------------------------------------
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	onMount(async () => {
		axlog(dataArrDumb, $page.url.pathname, 'BLOG (cms)');

		console.debug('...');
		dataArrDumb = await promise;
	});
</script>
