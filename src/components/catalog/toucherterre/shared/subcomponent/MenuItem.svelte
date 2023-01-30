<script>
	import { base } from '$app/paths';

	export let menu = 'N/A';
	export let url = '/acceuil';
	export let img = 'N/A';
</script>

<div id="catalog-subc--menuitem" class="flex place-items-center border">
	<img class="h-10 w-10 border" src={img} alt="" />
	<a
		style="color:#E5A782"
		href={url}
		class="hover:bg-green-500 cursor-pointer border-black  font-bold  border">{menu}</a
	>
</div>

<style>
</style>
