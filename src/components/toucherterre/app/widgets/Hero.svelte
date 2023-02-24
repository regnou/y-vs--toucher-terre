<div
	id="ax-hero"
	class="  grid place-items-center "
>
	<img
		style="border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="h-52   "
		src={img}
	/>
	<img
		style="border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="mt-2  h-10  "
		src={text}
	/>
</div>

<script lang="ts">
	import { AX_CONST__FRAME_isDebugBorder } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';

	export let img = 'N/A';
	export let text = 'N/A';
</script>
