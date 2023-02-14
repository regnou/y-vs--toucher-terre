<script lang="ts">
	import { onMount } from 'svelte';
	import { STORE__lademarche } from '@app/stores/store';
	import { AX__COLLECTION__LADEMARCHE } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { isInputValue } from '@app/utils/guards';
	import Loader from '../widgets/Loader.svelte';
	import Hero2 from '../widgets/Hero2.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Separator from '@smui/list/src/Separator.svelte';
	import { axlog } from '@app/utils/axLog';
	import { page } from '$app/stores';

	// -------------------------------
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__LADEMARCHE);
	// -------------------------------
	onMount(async () => {
		$STORE__lademarche = await promise; // les types MATCH donc le bding devrait etre bon
		axlog($STORE__lademarche, $page.url.pathname, 'LA DEMARCHE');
	});
</script>

<!-- <Loader /> -->
{#await promise}
	<Loader />
{:then data}
	<main id="page-lademarche-1">
		{#if $STORE__lademarche && $STORE__lademarche.length}
			{#if isInputValue($STORE__lademarche)}
				<div class="grid h-full w-full grid-cols-3 gap-10">
					<!-- <div class="bg-red-300 mr-10"> -->
					<div class="mr-10">
						<Hero2 title="L'équipe" />
						<Paragraph text={$STORE__lademarche[0].value} />
						<Separator />
						<Paragraph text={$STORE__lademarche[1].value} />
						<Separator />
						<Paragraph text={$STORE__lademarche[2].value} />
						<Separator />
						<img
							src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg"
							alt=""
						/>
					</div>
					<!-- <div class="bg-green-300"> -->
					<div>
						<Hero2 title="La démarche" />
						<div class="grid grid-flow-col place-items-center">
							<img
								class="h-10 justify-self-end "
								src="/media/icon/icon-contact-decom--creme.png"
								alt=""
							/>
							<img
								class="h-48"
								src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_02.jpg"
								alt=""
							/>
							<img
								class="h-10 rotate-180 justify-self-start"
								src="/media/icon/icon-contact-decom--creme.png"
								alt=""
							/>
						</div>
						<Paragraph text={$STORE__lademarche[3].value} />
						<Separator />
						<Paragraph text={$STORE__lademarche[4].value} />
						<Separator />
						<Paragraph text={$STORE__lademarche[5].value} />
						<Separator />
						<Paragraph text={$STORE__lademarche[6].value} />
						<Separator />
					</div>
					<!-- <div class="bg-blue-300 ml-10"> -->
					<div class="ml-20">
						<Hero2 title="formule" />
						<div class="m-5 rounded-md bg-white/30 p-2">
							<Paragraph text={$STORE__lademarche[7].value} />
							<Separator />
							<Paragraph text={$STORE__lademarche[8].value} />
							<Separator />
							<Paragraph text={$STORE__lademarche[9].value} />
							<Separator />
							<Paragraph text={$STORE__lademarche[10].value} />
							<Separator />
							<Paragraph text={$STORE__lademarche[11].value} />
						</div>
						<Separator />
						<img
							src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg"
							alt=""
						/>
					</div>
				</div>
			{/if}
		{/if}
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
