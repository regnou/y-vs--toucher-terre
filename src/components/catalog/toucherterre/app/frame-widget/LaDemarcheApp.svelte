<script lang="ts">
	import Hero2 from '../widgets/Hero2.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import Separator from '@smui/list/src/Separator.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	// ----------------------------------------------------------
	// DUMB (no operation to test, just display)
	// ----------------------------------------------------------
	export let store: I_UI__inputValue[] | undefined = undefined;
	// ----------------------------------------------------------
	// function demo() {
	// 	const a: I_UI__inputValue = { label: 'a', value: 'b', id: 'c' };
	// 	let post: I_ENTITY__event = { titleEvent: a, slug: a, body: a, date: a, image: a };
	// 	if (isEntityPost(post)) console.log(post.titlePost);
	// 	if (isEntityEvent(post)) console.log(post.titlePost);
	// 	// ----------------
	// 	function getSmallPet(): Animal {
	// 		const a: Animal = { swim: () => 'a' }; // secret fish at dyn time
	// 		return a;
	// 	}
	// 	type Animal = Fish | Bird;
	// 	type Fish = { swim: () => 'a' };
	// 	type Bird = { fly: () => 'a' };
	// 	function isFish(pet: Animal): pet is Fish {
	// 		return (pet as Fish).swim !== undefined;
	// 	}
	// 	// Both calls to 'swim' and 'fly' are now okay.
	// 	let pet = getSmallPet();
	// 	if (isFish(pet)) {
	// 		pet.swim();
	// 	} else {
	// 		pet.fly();
	// 	}
	// }
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: LA DEMARCHE APP -->
<!-- ####################################### -->
<main id="wc-app--site-lademarche--1">
	{#if store && store.length}
		<!-- static => inputValue only ! -->
		<!-- {#if isInputValue(store)} -->
		<!-- <div class="grid h-full w-full grid-cols-3 gap-10"> -->
		<LayoutGrid>
			<Cell span={4}>
				<div class="mr-10">
					<Hero2 title="L'équipe" />
					<Paragraph text={store[0].value} />
					<Separator />
					<Paragraph text={store[1].value} />
					<Separator />
					<Paragraph text={store[2].value} />
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
					<Paragraph text={store[3].value} />
					<Separator />
					<Paragraph text={store[4].value} />
					<Separator />
					<Paragraph text={store[5].value} />
					<Separator />
					<Paragraph text={store[6].value} />
					<Separator />
				</div>
			</Cell>
			<Cell span={4}>
				<div class="ml-20">
					<Hero2 title="formule" />
					<div class="m-5 rounded-md bg-white/30 p-2">
						<Paragraph text={store[7].value} />
						<Separator />
						<Paragraph text={store[8].value} />
						<Separator />
						<Paragraph text={store[9].value} />
						<Separator />
						<Paragraph text={store[10].value} />
						<Separator />
						<Paragraph text={store[11].value} />
					</div>
					<Separator />
					<img
						src="/media/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_03.jpg"
						alt=""
					/>
				</div>
			</Cell>
		</LayoutGrid>
	{/if}
</main>
