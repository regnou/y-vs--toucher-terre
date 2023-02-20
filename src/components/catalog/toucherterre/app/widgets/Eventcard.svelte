<!-- ######################################### -->
<!-- EVENT -->
<!-- ######################################### -->
<div
	id="ax-eventcard--1"
	style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
	class="flex flex-col  items-center  text-center"
>
	<img
		class="w-40"
		src={event.image.value}
		alt=""
	/>
	<div style="color:var(--ax-client__color-0--light)">{event.date.value}</div>
	<!-- tip: vinz n a pas mis le tag -->
	<!-- <SeparatorMedium />
	<div>{event.titleEvent.value}</div> -->

	<SeparatorMedium />
	<div>{event.body.value}</div>
</div>

<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import Separator from './Separator.svelte';
	import SeparatorMedium from './SeparatorMedium.svelte';

	export let event: I_ENTITY__event; // it is an array
</script>
