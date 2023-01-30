<script>
	import HeaderMenu from '../shared/subcomponent/HeaderMenu.svelte';

	export let h = 32;
	export let menus = [];

	const hstr = 'h-';
	let hjoin = 'N/A';
	$: {
		hjoin = hstr + h;
		console.log(hjoin);
	}
</script>

<!-- this is the main header -->
<!-- {@debug hjoin} -->
<div
	id="catalog-header"
	class="{hjoin} p-2 border border-black bg-black/10 border border-yellow-500"
>
	<HeaderMenu {menus} />
</div>

<!-- just to equilibrate the previous absolute... -->
<!-- <div class=" h-{h} bg-red-200  " /> -->
