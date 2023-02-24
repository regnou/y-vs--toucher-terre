<!-- ####################################################### -->
<!-- ####################################### -->
<!--  -->
<!-- ####################################### -->
<Button variant="outlined">
	<Label>{text}</Label>
</Button>
<!-- 2 -->
<!-- BTN CLOSE -->
<!-- <button
    type="submit" -->

<!-- <button
	disabled={isDisabled}
	class="w-44
       items-center
       px-10
       py-3.5
       text-base
       font-medium
       text-center
       transition
       duration-500
       ease-in-out
       transform
       border-2
       border-blue-400
       rounded-xl
       focus:outline-none
       focus:ring-2
       focus:ring-blue-600
       hover:shadow-md
       hover:border-blue-600
    "
>
	<span class="justify-self-end uppercase">{text} </span>
</button> -->
<script lang="ts">
	import Button, { Label } from '@smui/button';
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	// .............................................
	export let text = 'N/A';
	// export let isDisabled = false;
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'wc -- ax btn cancel');
	});
</script>
