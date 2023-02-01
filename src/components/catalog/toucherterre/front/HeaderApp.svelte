<script>
	import HeaderMenu from '../shared/subcomponent/HeaderMenu.svelte';
	export let menus = [];
</script>

<div id="catalog-header" class=" border border-yellow-500">
	<HeaderMenu {menus} />
</div>
<!-- // const hstr = 'h-';
// let hjoin = 'N/A';
// $: {
// 	hjoin = hstr + h;
// 	console.log(hjoin);
// } -->
<!-- this is the main header -->
<!-- {@debug hjoin} -->
<!-- class="{hjoin} -->
<!-- just to equilibrate the previous absolute... -->
<!-- <div class=" h-{h} bg-red-200  " /> -->
