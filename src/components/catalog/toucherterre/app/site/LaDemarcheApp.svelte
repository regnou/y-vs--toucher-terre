<script lang="ts">
	import { isInputValue } from '@app/utils/guards';
	import Hero2 from '../widgets/Hero2.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Separator from '@smui/list/src/Separator.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	// ----------------------------------------------------------
	// DUMB (no operation to test, just display)
	// ----------------------------------------------------------
	export let store = undefined;
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: LA DEMARCHE APP -->
<!-- ####################################### -->
<main id="wc-app--site-lademarche--1">
	{#if store && $store && $store.length}
		<!-- static => inputValue only ! -->
		<!-- {#if isInputValue($store)} -->
		<!-- <div class="grid h-full w-full grid-cols-3 gap-10"> -->

		<LayoutGrid>
			<Cell span={4}>
				<div class="mr-10">
					<Hero2 title="L'équipe" />
					<Paragraph text={$store[0].value} />
					<Separator />
					<Paragraph text={$store[1].value} />
					<Separator />
					<Paragraph text={$store[2].value} />
					<Separator />
					<img
						src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.jpg"
						alt=""
					/>
				</div>
			</Cell>
			<Cell span={4}>
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
					<Paragraph text={$store[3].value} />
					<Separator />
					<Paragraph text={$store[4].value} />
					<Separator />
					<Paragraph text={$store[5].value} />
					<Separator />
					<Paragraph text={$store[6].value} />
					<Separator />
				</div>
			</Cell>
			<Cell span={4}>
				<div class="ml-20">
					<Hero2 title="formule" />
					<div class="m-5 rounded-md bg-white/30 p-2">
						<Paragraph text={$store[7].value} />
						<Separator />
						<Paragraph text={$store[8].value} />
						<Separator />
						<Paragraph text={$store[9].value} />
						<Separator />
						<Paragraph text={$store[10].value} />
						<Separator />
						<Paragraph text={$store[11].value} />
					</div>
					<Separator />
					<img
						src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg"
						alt=""
					/>
				</div>
			</Cell>
		</LayoutGrid>

		<!-- {/if} -->
	{/if}
</main>
