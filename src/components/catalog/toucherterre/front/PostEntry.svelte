<script>
	import ParagraphLeft from './ParagraphLeft.svelte';

	export let title = '';
	export let text = '';

	let img = '/media/icon/icon-infinity.png';
</script>

<div class="m-2">
	<div id="postentry--1" class=" flex place-items-center border py-3">
		<img class="w-16  border pr-5" src={img} alt="" />
		<div style="color:#F6BD94" class="text-2xl font-bold uppercase">{title}</div>
	</div>

	<ParagraphLeft {text} />
</div>
