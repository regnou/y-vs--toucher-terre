<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';

	export let text = 'N/A';
</script>

<div
	id="title--1"
	style="color:#E5B385; border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
	class="  text-center text-sm font-bold"
>
	{text}
</div>
