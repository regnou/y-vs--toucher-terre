<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';

	export let text = 'N/A';
</script>

<div
	id="title-1"
	style="color:#E5B385; border:{AX__CONST__isDebugBorder ? '1px solid blue' : 'none'}"
	class="  text-center text-sm font-bold"
>
	{text}
</div>
