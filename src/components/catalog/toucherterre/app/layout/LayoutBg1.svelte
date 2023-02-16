<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';

	export let imgBg = '';
</script>

<!-- ########################################### -->
<!-- LAYOUT-BG -->
<!-- ########################################### -->
<!-- this is a background widget -->
<!-- overflow-y-scroll -->
<!-- class=" h-full w-full border-4  bg-cover bg-fixed bg-left-bottom bg-no-repeat" -->

<!-- https://www.youtube.com/watch?v=ywLgqJjLUm4 -->
<!-- flex flex-col overflow-y-auto -->
<div
	id="layoutbg-1"
	class="bg-cover bg-fixed bg-left-bottom"
	style="background-image: url({imgBg});
	 border:{AX__CONST__isDebugBorder ? '4px solid yellow' : 'none'}
"
>
	<slot />
</div>
<!-- <div class="h-4/5">jojo</div> -->
