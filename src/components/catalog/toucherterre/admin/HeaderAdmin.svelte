<script>
	import HeaderMenu from '../shared/subcomponent/HeaderMenu.svelte';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';

	// export let h = 32;
	export let menus = [];
	// const hstr = 'h-';
	// let hjoin = 'N/A';
	// $: {
	// 	hjoin = hstr + h;
	// 	console.log(hjoin);
	// }
</script>

<!-- this is the main header -->
<!-- {@debug hjoin} -->
<!-- class="{hjoin}  -->
<div id="catalog-header" class="w-full border border-yellow-500">
	<HeaderMenu {menus} />
</div>

<!-- <TabBar tabs={menus} let:tab bind:active>
	<a href={tab.url}>
		<Tab {tab} minWidth>
			<Label>{tab.menu}</Label>
		</Tab>
	</a>
</TabBar> -->

<!-- just to equilibrate the previous absolute... -->
<!-- <div class=" h-{h} bg-red-200  " /> -->
