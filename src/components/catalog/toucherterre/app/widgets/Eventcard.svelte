<script lang="ts">
	import Separator from './Separator.svelte';

	export let event; // it is an array
	// export let src = 'N/A';
	// export let title = 'N/A';
	// export let text = 'N/A';
</script>

{#if event && event.length}
	<div id="ax-eventcard-1" class="flex flex-col  items-center border text-center">
		<img class="w-40" src={event[3].iv} alt="" />
		<div>{event[0].iv}</div>
		<Separator />
		<div>{event[2].iv}</div>
		<Separator />
		<div>{event[1].iv}</div>
	</div>
{/if}
