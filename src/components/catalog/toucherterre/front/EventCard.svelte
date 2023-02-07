<script lang="ts">
	import Separator from './Separator.svelte';

	export let event; // it is an array
	// export let src = 'N/A';
	// export let title = 'N/A';
	// export let text = 'N/A';
</script>

{#if event && event.length}
	<div id="eventcard--1" class="flex flex-col  items-center border text-center">
		<img class="w-40" src={event[3].inputValue} alt="" />
		<div class="">{event[0].inputValue}</div>
		<Separator />
		<div class="">{event[2].inputValue}</div>
		<Separator />
		<div class="">{event[1].inputValue}</div>
	</div>
{/if}
