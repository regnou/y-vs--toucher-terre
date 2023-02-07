<script lang="ts">
	export let text = 'N/A';
	export let callback;
	import Button, { Label } from '@smui/button';
</script>

<!-- type="submit" -->
<Button
	on:click={async () => {
		await callback();
	}}
	variant="raised"
>
	<Label>{text}</Label>
</Button>

<!-- <button
	on:click={handle}
	class="
  w-44
       px-10
       py-4
       text-base
       font-medium
       text-center text-white
       transition
       duration-500
       ease-in-out
       transform
       bg-blue-400
       rounded-xl
       hover:bg-blue-600
       focus:outline-none
       focus:ring-2
       focus:ring-offset-2
       focus:ring-blue-600
       hover:shadow-md                  "
>
	OK
</button> -->
