<!-- ####################################################### -->
<!-- ####################################### -->
<!-- TEXT AREA                               -->
<!-- ####################################### -->
<Textfield
	variant="filled"
	style="width: 100%;"
	helperLine$style="width: 100%;"
	bind:value={inputValue}
	{label}
	textarea
>
	<!-- <HelperText slot="helper">Helper Text</HelperText> -->
</Textfield>
<!-- <div class="block  text-sm font-bold capitalize ">
	{label}
</div>
<textarea
	class=""
	name={inputId.toString()}
	bind:value={inputValue}
	aria-label="Edit {label}"
	{placeholder}
/> -->
<!-- <svelte:options accessors={true} /> -->
// $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM

<!-- <style lang="postcss">
	textarea:hover {
		outline: 2px solid blue;
	}
	textarea:focus {
		outline: none;
	}
	.btnInputAx {
		@apply h-32;
		@apply block;
		@apply w-full;
		@apply px-5;
		@apply py-3;
		@apply text-base;
		@apply placeholder-gray-300;
		@apply transition;
		@apply duration-500; 
		@apply ease-in-out;
		@apply transform;
		@apply border;
		@apply border-transparent;
		@apply rounded-lg;
	}
	.btnInputAx:focus {
		@apply outline-none;
		@apply ring-2;
		@apply ring-white;
		@apply ring-offset-2;
		@apply ring-offset-gray-300;
	}
</style> -->
<script lang="ts">
	import Textfield from '@smui/textfield';
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	export let inputValue = '';
	export let label = '';
	// let inputId = 0;
	// let placeholder = '--';
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'wc -- ax area');
	});
</script>
