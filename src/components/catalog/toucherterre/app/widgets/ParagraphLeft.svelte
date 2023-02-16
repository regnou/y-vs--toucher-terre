<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';

	export let text = 'N/A';
</script>

<div id="catalog-paragraph" class="grid place-items-center">
	<div
		style="color:#583120; border:{AX__CONST__isDebugBorder ? '1px solid blue' : 'none'}"
		class="border text-xl   text-amber-900"
	>
		{@html text}
	</div>
</div>
