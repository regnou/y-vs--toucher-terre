<script>
	export let hh = 'space.0';
	let hhh = 'N/A';
	$: {
		hhh = 'h-[calc(100vh-theme(' + hh + '))]';
		console.log('ici:', hhh);
	}
	// TODO - dj mike, met l interpolation
</script>

<!-- this is a bg-container widget -->
<!-- TODO MIKU - il faut automate la var -->
<div class="grid justify-center border-green-500 border	">
	<div
		id="catalog-container-item1"
		class="relative overflow-y-scroll   border-red-500 border-2 h-[calc(100vh-theme(space.12)-12px)]   "
		style="max-width: 1080px;"
	>
		<slot />
	</div>
</div>
