<script lang="ts">
	export let name = 'N/A';
	// export let href = '/';
	export let img = 'N/A';
</script>

<div id="contactcard-item--1" class="flex place-items-center border">
	<img class="h-10 w-10 border" src={img} alt="" />
	<div style="color:#583120" class="ml-2 cursor-pointer border border-black  hover:bg-green-500">
		{name}
	</div>
</div>
