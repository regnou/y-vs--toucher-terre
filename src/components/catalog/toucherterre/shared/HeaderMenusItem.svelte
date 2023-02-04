<script lang="ts">
	import Button, { Label } from '@smui/button';

	export let menu = 'N/A';
	export let url = '/acceuil';
	export let img = 'N/A';
</script>

<!-- class="hover:bg-green-500 cursor-pointer border-black  font-bold  border" -->
<Button id="headermenu-item--1" class="" href={url}>
	<Label style="color:#E5B385" class="">
		<img class="hidden h-7  w-7 border lg:inline" src={img} alt="" />
		{menu}</Label
	>
</Button>

<!-- <div id="catalog-subc--menuitem" class="flex place-items-center border">
	<img class="h-10 w-10 border" src={img} alt="" />
	<a
		style="color:#E5A782"
		href={url}
		class="hover:bg-green-500 cursor-pointer border-black  font-bold  border">{menu}</a
	>
</div> -->
