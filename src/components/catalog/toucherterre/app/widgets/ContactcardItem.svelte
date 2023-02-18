<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';

	export let name = 'N/A';
	// export let href = '/';
	export let img = 'N/A';
</script>

<div
	id="ax-contactcard-item--1"
	style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
	class="flex place-items-center "
>
	<img
		style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10 w-10 "
		src={img}
		alt=""
	/>
	<div
		style="color:#583120; border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
		class="ml-2 cursor-pointer   hover:bg-green-500"
	>
		{name}
	</div>
</div>
