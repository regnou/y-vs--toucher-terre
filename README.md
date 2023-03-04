<!-- @apply bg-orange-900/60; -->
<!-- style="background-color:{isAdmin ? 'rgb(24 149 5 / 79%)' : 'rgba(130,65,31,0.8)'}; -->

    // ----------------------------------------------------------
    // function demo() {
    // 	const a: I_ENTITY__uiinputValue = { label: 'a', value: 'b', id: 'c' };
    // 	let post: I_ENTITY__event = { titleEvent: a, slug: a, body: a, date: a, image: a };
    // 	if (isEntityPost(post)) console.debug(post.titlePost);
    // 	if (isEntityEvent(post)) console.debug(post.titlePost);
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

    // $: open = $page.url.pathname.includes('/cms/') ? true : false;

        // \x1B[46;97;4m cyan
    // \x1B[44;97;4m bleu
    // \x1B[105;97;4m rose
    // \x1B[m end

    @ts-ignore

- :global(.whatever)
  🌎
  🚔
  🏎️
  ✅

<!-- <div  on:openSnackEvent={onOpenSnack}> -->
<!-- <slot on:openSnackEvent /> -->

    	// dispatch('openSnackEvent', {
    	// 	snackOpen: true,
    	// 	snackType: 'success',
    	// 	snackText: 'a voir'
    	// });

const dispatch = createEventDispatcher();

    	    // const dispatch = createEventDispatcher();
    	// dispatch('delete', {
    	// 	ii: ii
    	// });
    	<!-- // const dispatch = createEventDispatcher();

// onMount(() => {
// console.debug('🚔 -- onMount');
// dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// });

// afterUpdate(() => {
// console.debug('🚔 -- afterUpdate');
// // dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// }); -->

<!-- // gs://y-toucherterre.appspot.com/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.png -->

    // files_all.forEach(async (fileList, i) => {
    	// 	if (fileList) {
    	// 		const urlStorage = await upload(fileList[0]);
    	// 		// const urlStorage = await upload(fileList[0]);

    	// 		$store[i].iv = urlStorage;
    	// 		console.debug('🚔 UPDATE FINAL : ', $store[i].iv, ' -- ', urlStorage);
    	// 		console.debug('🚔 ________________________________');
    	// 	}
    	// });

    	<script>
    // export let hh = 'space.0';
    // let hhh = 'N/A';
    // $: {
    // 	hhh = 'h-[calc(100vh-theme(' + hh + '))]';
    // 	console.debug('🚔 ici:', hhh);
    // }
    // TODO - dj mike, met l interpolation

</script>

<!-- this is a bg-container widget -->
<!-- TODO MIKU - il faut automate la var -->
<div class="grid  justify-center border-4	border-red-500">
	<!-- pour la div du dessous:  h-[calc(100vh-theme(space.12)-12px)] -->
	<div
		id="catalog-layoutCenter-1"
		class="relative   border-4 border-green-500"
		style="max-width: 1080px;"
	>
		<!-- ajouter le scroll ici change tout -->
		<!-- <div
		id="catalog-container-item1"
		class="relative overflow-y-scroll   border-green-500 border h-[calc(100vh-theme(space.12)-12px)] "
		styl
		e="max-width: 1080px;"
	> -->
		<slot />
	</div>
</div>

    		<!-- <div slot="content-1" id="content-1--pageAdmin" class="bg-white "> -->

<!-- body -->
<!-- <div class="grid grid-flow-col content-start"> -->
<!-- <LayoutCenter1> -->
<!-- hh={'space.' + AX__HEADER_APP__HEIGHT} -->
<!-- <LayoutCenter1> -->
<!-- <slot name="app" /> -->
<!-- </LayoutCenter1> -->
<!-- hh={'space.' + AX__HEADER_APP__HEIGHT} -->
<!-- <LayoutCenter1> -->
<!-- <slot name="cms">
		<div >bloc d admin</div>
	</slot> -->
<!-- </LayoutCenter1> -->
<!-- </div> -->
<!-- </LayoutCenter1> -->
<!-- </div> -->

<!--  -->
<style lang="postcss">
	/* .bloc-admin.isAdmin {
		@apply block h-full w-96 border border-purple-500;
	} */
</style>

// const hstr = 'h-';
// let hjoin = 'N/A';
// $: {
// hjoin = hstr + h;
// console.debug(hjoin);
// }

<!-- this is the main header -->
<!-- {@debug hjoin} -->
<!-- class="{hjoin}  -->
<div id="catalog-header" class="border border-yellow-500" />
<!-- just to equilibrate the previous absolute... -->
<!-- <div class="h-{h} bg-red-200" /> -->

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

    import { onMount } from 'svelte';
    onMount(() => {
    	// menus.update((n) => data);
    });

<List class="bg-yellow-500">
	{#each AX__HEADERMENU_CMS as item}
		<!-- {#if item.submenus} -->
		<!-- FOR THE CMS -->
		<!-- <SubmenuItem menu= submenus={item.submenus} /> -->
		<!-- {:else} -->
		<!-- href="javascript:void(0)" activated={active === item.menu} -->
		<Item>
			<a href={'/cms/dyn' + item.url} class="w-full">
				<Text>{item.page}</Text>
			</a>
		</Item>
		<!-- <MenuItem img={item.img} url={item.url} menu={item.menu} /> -->
		<!-- {/if} -->
	{/each}
</List>

    // replace space
    // $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM

<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FORM -->
<!-- ####################################### -->
<div id="axformedit--1">
	<AxPanelsAddEdit
		bind:store
		{$AX_STORE__CONTENT__DB}
	/>
</div>

<!-- ####################################### -->
<!-- BODY                                  -->
<!-- ####################################### -->
<!-- {AX__UI__CONST_isMobile} -->
<!-- class="w-full  lg:w-72" -->
<!-- BRANCH: I_ENTITY__uiinputValue          -->

<!-- ---------------------- -->
<!-- POUR CHAQUE PAGE-ITEM  -->
<!-- ---------------------- -->

<!-- ---------------------- -->
<!-- SUBMIT BTNs            -->
<!-- ---------------------- -->
<!-- <AxBtnCancel text="Annuler" /> -->
<!-- <div class=" grid grid-flow-col place-items-center gap-2 p-10">
		<AxBtnOk
			text="Enregistrer"
			callback={async () => await save()}
		/>
	</div> -->

<!-- <div class="col-span-4 grid grid-rows-3 place-items-center">
				<Slider imgs={[store[i].iv]} /> </div> -->
<script lang="ts">
	import AxPanelsAddEdit from './AxPanelsAddEdit.svelte';

	//----------------------------------------------
	export let $AX_STORE__CONTENT__DB: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	export let store: I_BASE_ENTITY[] | undefined = undefined;
</script>
