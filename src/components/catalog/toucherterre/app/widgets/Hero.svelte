<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';

	export let img = 'N/A';
	export let text = 'N/A';
</script>

<div id="ax-hero" class="grid  place-items-center ">
	<img
		style="border:{AX__CONST__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="h-44   "
		src={img}
	/>
	<img
		style="border:{AX__CONST__isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="mt-2  h-7  "
		src={text}
	/>
</div>
