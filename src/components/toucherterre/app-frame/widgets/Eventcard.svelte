<!-- ######################################### -->
<!-- EVENT -->
<!-- ######################################### -->
<div
	style="border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}"
	class="flex flex-col items-center  text-center  font-bold"
>
	<img
		class="w-40"
		src={event.image.value}
		alt=""
	/>
	<div style="">{event.date.value}</div>
	<!-- tip: vinz n a pas mis le tag -->
	<!-- <SeparatorMedium />
	<div>{event.titleEvent.value}</div> -->

	<SeparatorMedium />
	<div
		class="font-bold"
		style="color:var(--mdc-theme-on-secondary)"
	>
		{event.body.value}
	</div>
</div>

<script lang="ts">
	import SeparatorMedium from './SeparatorMedium.svelte';
	import { AX_CONST__FRAME__isDebugBorder } from 'app/0-config/frame/AX_CONST__FRAME__debug';

	export let event: I_ENTITY__event; // it is an array
</script>
