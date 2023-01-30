<script>
	import { base } from '$app/paths';
	import Paragraph from './Paragraph.svelte';
	import ParagraphLeft from './ParagraphLeft.svelte';

	export let title = '';
	export let text = '';
	let img = '/media/icon/icon-infinity.png';
</script>

<div class="m-2">
	<div id="" class=" flex place-items-center border py-3">
		<img class="w-16  border pr-5" src={img} alt="" />
		<div style="color:#F6BD94" class="uppercase font-bold text-2xl">{title}</div>
	</div>

	<ParagraphLeft {text} />
</div>
