<script lang="ts">
	import Separator from './Separator.svelte';

	export let event: I_ENTITY__event; // it is an array
</script>

<!-- ######################################### -->
<!-- EVENT -->
<!-- ######################################### -->
<div id="ax-eventcard-1" class="flex flex-col  items-center border text-center">
	<img class="w-40" src={event.image.value} alt="" />
	<div>{event.titleEvent.value}</div>
	<Separator />
	<div>{event.date.value}</div>
	<Separator />
	<div>{event.body.value}</div>
</div>
