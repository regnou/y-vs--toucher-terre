<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';

	export let text = 'N/A';
</script>

<div id="paragraph-1" class="grid place-items-center">
	<div
		style="color:#583120; border:{AX__CONST__isDebugBorder ? '1px solid blue' : 'none'}"
		class="w-3/4 text-center"
	>
		{@html text}
	</div>
</div>

<style lang="postcss">
	/* .po {
		color: #583120;
	} */
</style>
