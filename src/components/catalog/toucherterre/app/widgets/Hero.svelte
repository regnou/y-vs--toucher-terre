<div
	id="ax-hero"
	class="mt-9  grid place-items-center "
>
	<img
		style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="h-52   "
		src={img}
	/>
	<img
		style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
		alt=""
		class="mt-2  h-10  "
		src={text}
	/>
</div>

<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';

	export let img = 'N/A';
	export let text = 'N/A';
</script>
