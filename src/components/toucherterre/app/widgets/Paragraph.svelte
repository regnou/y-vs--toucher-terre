<!-- <div
	id="paragraph--1"
	class="grid place-items-center"
> -->
<div
	style="color:var(--mdc-theme-on-secondary); border:{AX_CONST__FRAME_isDebugBorder
		? '1px solid blue'
		: 'none'}"
	class="m-auto w-3/4 text-center  font-bold"
>
	{@html text}
</div>

<!-- </div> -->
<script lang="ts">
	import { AX_CONST__FRAME_isDebugBorder } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';

	export let text = 'N/A';
</script>
