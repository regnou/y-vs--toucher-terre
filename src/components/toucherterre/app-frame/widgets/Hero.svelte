<div
	id="ax-hero"
	class="  grid place-items-center "
>
	<img
		style="border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="h-52   "
		src={img}
	/>
	<img
		style="border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="mt-2  h-10  "
		src={text}
	/>
</div>

<script lang="ts">
	import { AX_CONST__FRAME__isDebugBorder } from 'app/0-config/frame/AX_CONST__FRAME__debug';

	export let img = 'N/A';
	export let text = 'N/A';
</script>
