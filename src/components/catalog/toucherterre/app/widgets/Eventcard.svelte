<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';
	import Separator from './Separator.svelte';

	export let event: I_ENTITY__event; // it is an array
</script>

<!-- ######################################### -->
<!-- EVENT -->
<!-- ######################################### -->
<div
	id="ax-eventcard-1"
	style="border:{AX__CONST__isDebugBorder ? '1px solid blue' : 'none'}"
	class="flex flex-col  items-center  text-center"
>
	<img class="w-40" src={event.image.value} alt="" />
	<div>{event.titleEvent.value}</div>
	<Separator />
	<div>{event.date.value}</div>
	<Separator />
	<div>{event.body.value}</div>
</div>
