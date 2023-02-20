<!-- <div
	id="paragraph--1"
	class="grid place-items-center"
> -->
<div
	style="color:var(--ax-client__color-0--dark); border:{AX__UI__CONST_isDebugBorder
		? '1px solid blue'
		: 'none'}"
	class="m-auto w-3/4 text-center  font-bold"
>
	{@html text}
</div>

<!-- </div> -->
<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';

	export let text = 'N/A';
</script>
