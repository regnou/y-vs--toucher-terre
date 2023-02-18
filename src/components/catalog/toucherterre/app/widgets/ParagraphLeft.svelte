<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';

	export let text = 'N/A';
</script>

<div id="catalog-paragraph" class="grid place-items-center">
	<div
		style="color:#583120; border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
		class="border text-xl   text-amber-900"
	>
		{@html text}
	</div>
</div>
