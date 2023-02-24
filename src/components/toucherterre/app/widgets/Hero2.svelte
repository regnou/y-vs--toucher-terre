<div class="grid  place-items-center ">
	<div
		style="border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
		class=" text-3xl font-bold uppercase"
	>
		{title}
	</div>
	<img
		alt=""
		style="border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10  w-20  "
		src={img}
	/>
</div>

<script lang="ts">
	import { AX_CONST__FRAME_isDebugBorder } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';

	export let title = 'N/A';
	const img = '/media/icon/icon-infinity--creme.png';
</script>
