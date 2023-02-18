<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';

	export let title = 'N/A';
	const img = '/media/icon/icon-infinity.png';
</script>

<div id="hero2--1" class="grid  place-items-center ">
	<div
		style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
		class=" text-2xl uppercase"
	>
		{title}
	</div>
	<img
		alt=""
		style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10  w-20  "
		src={img}
	/>
</div>
