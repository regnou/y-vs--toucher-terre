<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	// -------------------------------
	export let imgBg = '';
</script>

<!-- +################################### -->
<!-- ####################################### -->
<!-- LAYOUT BG -->
<!-- ####################################### -->
<!-- this is a background widget -->
<!-- tip: scroll de la page selon overflow ici -->
<div
	id="layoutbg--1"
	class="fixed inset-0 h-full w-full overflow-y-auto  bg-cover bg-fixed bg-left-bottom"
	style="background-image: url({imgBg});
	 border:{AX__UI__CONST_isDebugBorder ? '4px solid yellow' : 'none'}
"
>
	<slot />
</div>

<!-- class=" h-full w-full border-4  bg-cover bg-fixed bg-left-bottom bg-no-repeat" -->
<!-- tuto bg: https://www.youtube.com/watch?v=ywLgqJjLUm4 -->
