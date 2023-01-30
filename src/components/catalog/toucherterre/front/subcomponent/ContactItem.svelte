<script>
	export let name = 'N/A';
	// export let href = '/';
	export let img = 'N/A';
</script>

<div id="catalog-subc--contactitem" class="flex place-items-center border">
	<img class="h-10 w-10 border" src={img} alt="" />
	<div
		style="color:#E5A782"
		class="hover:bg-green-500 cursor-pointer border-black  font-bold  border"
	>
		{name}
	</div>
</div>
