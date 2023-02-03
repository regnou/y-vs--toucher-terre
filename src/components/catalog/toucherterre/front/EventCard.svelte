<script>
	import Separator from './Separator.svelte';

	export let src = 'N/A';
	export let title = 'N/A';
	export let text = 'N/A';
</script>

<div id="eventcard--1" class="flex flex-col  items-center border text-center">
	<img class="w-40" {src} alt="" />
	<div class="">{title}</div>
	<Separator />
	<div class="">{text}</div>
</div>
