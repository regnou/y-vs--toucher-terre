<!-- <div class="" on:openSnackEvent={onOpenSnack}> -->
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
// console.log('-- onMount');
// dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// });

// afterUpdate(() => {
// console.log('-- afterUpdate');
// // dispatch('updateBg', { name: '/media/bg/bg-2.jpg' });
// }); -->

<!-- // gs://y-toucherterre.appspot.com/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.png -->

    // files_all.forEach(async (fileList, i) => {
    	// 	if (fileList) {
    	// 		const urlStorage = await upload(fileList[0]);
    	// 		// const urlStorage = await upload(fileList[0]);

    	// 		$store[i].inputValue = urlStorage;
    	// 		console.log('UPDATE FINAL : ', $store[i].inputValue, ' -- ', urlStorage);
    	// 		console.log('________________________________');
    	// 	}
    	// });

    	<script>
    // export let hh = 'space.0';
    // let hhh = 'N/A';
    // $: {
    // 	hhh = 'h-[calc(100vh-theme(' + hh + '))]';
    // 	console.log('ici:', hhh);
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
		class="relative overflow-y-scroll   border-green-500 border h-[calc(100vh-theme(space.12)-12px)]   "
		styl
		e="max-width: 1080px;"
	> -->
		<slot />
	</div>
</div>

    		<!-- <div slot="content-1" id="content-1--pageAdmin" class="bg-white text-black"> -->

<!-- body -->
<!-- <div class="grid grid-flow-col content-start"> -->
<!-- <LayoutCenter1> -->
<!-- hh={'space.' + DATAJSON__HEADER_APP__HEIGHT} -->
<!-- <LayoutCenter1> -->
<!-- <slot name="app" /> -->
<!-- </LayoutCenter1> -->
<!-- hh={'space.' + DATAJSON__HEADER_APP__HEIGHT} -->
<!-- <LayoutCenter1> -->
<!-- <slot name="admin">
		<div class="">bloc d admin</div>
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
// console.log(hjoin);
// }

<!-- this is the main header -->
<!-- {@debug hjoin} -->
<!-- class="{hjoin}  -->
<div id="catalog-header" class=" border border-yellow-500" />
<!-- just to equilibrate the previous absolute... -->
<!-- <div class=" h-{h} bg-red-200  " /> -->

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
	{#each DATAJSON__PAGES as item}
		<!-- {#if item.submenus} -->
		<!-- FOR THE ADMIN -->
		<!-- <SubmenuItem menu= submenus={item.submenus} /> -->
		<!-- {:else} -->
		<!-- href="javascript:void(0)" activated={active === item.menu} -->
		<Item>
			<a href={'/admin/pages' + item.url} class="w-full">
				<Text>{item.page}</Text>
			</a>
		</Item>
		<!-- <MenuItem img={item.img} url={item.url} menu={item.menu} /> -->
		<!-- {/if} -->
	{/each}
</List>

    // replace space
    // $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM
