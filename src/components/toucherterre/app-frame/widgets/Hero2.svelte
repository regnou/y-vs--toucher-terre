<div class="grid  place-items-center ">
	<div
		style="border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}"
		class=" text-3xl font-bold uppercase"
	>
		{title}
	</div>
	<img
		alt=""
		style="border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10  w-20  "
		src={img}
	/>
</div>

<script lang="ts">
	import { AX_CONST__FRAME__isDebugBorder } from 'app/0-config/config-frame/AX_CONST__FRAME__debug';

	export let title = 'N/A';
	const img = '/media/icon/icon-infinity--creme.png';
</script>
