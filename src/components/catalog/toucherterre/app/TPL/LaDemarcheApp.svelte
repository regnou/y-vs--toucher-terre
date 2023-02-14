<script lang="ts">
	import { onMount } from 'svelte';
	import { STORE__PAGEITEMS } from '@app/stores/store';
	import { AX__COLLECTION__LADEMARCHE } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { isInputValue } from '@app/utils/guards';
	import Loader from '../widgets/Loader.svelte';
	import Hero2 from '../widgets/Hero2.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Separator from '@smui/list/src/Separator.svelte';
	let promise = config__get<I_UI__inputValue>(AX__COLLECTION__LADEMARCHE);
	// -------------------------------
	onMount(async () => {
		$STORE__PAGEITEMS = await promise; // les types MATCH donc le bding devrait etre bon
		console.debug('🚔');
		console.dir($STORE__PAGEITEMS);
		// LIGHT LOG
		// green
		console.debug(`🚔🏎️✅ MOUNT-ED \x1B[41;97;4m APP \x1B[m\x1B[107;91;4m LA DEMARCHE \x1B[m\n`);
		// yellow
		// console.debug(`🚔🏎️✅ MOUNT-ED \x1B[103;30;4m APP \x1B[m\x1B[107;93;4m LA DEMARCHE \x1B[m\n`);
		// HEAVY LOG
		// console.debug(
		// 			`🏎️✅ MOUNT-ED \x1B[103;30;4m APP \x1B[m\x1B[107;93;4m LA DEMARCHE \x1B[m
		// \x1B[43;30;4m${JSON.stringify($STORE__PAGEITEMS, null, 2)} \x1B[m\n`
		// 		);
		console.debug('🚔\n');
		// console.debug('🚔Console.log: ' + 'I am in the Info log level');
		// console.debug('🚔Console.debug: ' + 'I am in the Verbose log level');
		// console.warn('Console.warn: ' + 'I am in the Warning log level');
		// console.debug('🚔Console.info: ' + 'I am in the Info log level');
		// console.error('Console.error: ' + 'I am in the Error log level');
	});
	// -------------------------------
</script>

<!-- <Loader /> -->
{#await promise}
	<Loader />
{:then data}
	<main id="page-lademarche-1">
		{#if $STORE__PAGEITEMS && $STORE__PAGEITEMS.length}
			{#if isInputValue($STORE__PAGEITEMS)}
				<div class="grid h-full w-full grid-cols-3 gap-10">
					<!-- <div class="bg-red-300 mr-10"> -->
					<div class="mr-10">
						<Hero2 title="L'équipe" />
						<Paragraph text={$STORE__PAGEITEMS[0].value} />
						<Separator />
						<Paragraph text={$STORE__PAGEITEMS[1].value} />
						<Separator />
						<Paragraph text={$STORE__PAGEITEMS[2].value} />
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
						<Paragraph text={$STORE__PAGEITEMS[3].value} />
						<Separator />
						<Paragraph text={$STORE__PAGEITEMS[4].value} />
						<Separator />
						<Paragraph text={$STORE__PAGEITEMS[5].value} />
						<Separator />
						<Paragraph text={$STORE__PAGEITEMS[6].value} />
						<Separator />
					</div>
					<!-- <div class="bg-blue-300 ml-10"> -->
					<div class="ml-20">
						<Hero2 title="formule" />
						<div class="m-5 rounded-md bg-white/30 p-2">
							<Paragraph text={$STORE__PAGEITEMS[7].value} />
							<Separator />
							<Paragraph text={$STORE__PAGEITEMS[8].value} />
							<Separator />
							<Paragraph text={$STORE__PAGEITEMS[9].value} />
							<Separator />
							<Paragraph text={$STORE__PAGEITEMS[10].value} />
							<Separator />
							<Paragraph text={$STORE__PAGEITEMS[11].value} />
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
