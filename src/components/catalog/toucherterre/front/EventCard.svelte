<script>
	import Separator from './Separator.svelte';

	export let src = 'N/A';
	export let title = 'N/A';
	export let text = 'N/A';
</script>

<div class="flex flex-col  items-center border text-center" id="catalog-eventcard">
	<img class="w-40" {src} alt="" />
	<div class="">{title}</div>
	<Separator />
	<div class="">{text}</div>
</div>
