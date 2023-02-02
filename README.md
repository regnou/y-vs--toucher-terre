<!-- <div slot="layoutMainContent-1" id="layoutMainContent-1--pageAdmin" class="bg-white text-black"> -->
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
<style>
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
