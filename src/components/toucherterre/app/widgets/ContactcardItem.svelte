<div
	style="  color:var(--mdc-theme-on-secondary);   border:{AX_CONST__FRAME_isDebugBorder
		? '1px solid blue'
		: 'none'}"
	class="flex place-items-center font-bold "
>
	<img
		style="border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
		class="h-10 w-10 "
		src={img}
		alt=""
	/>
	<div
		style=" border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
		class="ml-2  cursor-pointer text-xl hover:underline"
	>
		{name}
	</div>
</div>

<script lang="ts">
	import { AX_CONST__FRAME_isDebugBorder } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';

	export let name = 'N/A';
	// export let href = '/';
	export let img = 'N/A';
</script>
