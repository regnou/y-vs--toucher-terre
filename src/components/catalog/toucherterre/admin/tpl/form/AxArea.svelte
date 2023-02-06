<!-- <svelte:options accessors={true} /> -->
<script lang="ts">
	export let inputValue = '';
	export let label = '';

	// export let inputId;
	let inputId = 0;
	// export let placeholder;
	let placeholder = '--';

	// 3 replace space
	// $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM
</script>

<div class="">
	<!-- <label for={inputId} class="block text-sm font-medium text-neutral-600">
    {labelName}
  </label> -->
	<div class="block  text-sm font-bold capitalize text-neutral-600">
		{label}
	</div>
	<div class="mt-1">
		<!-- value={inputValue ? inputValue : ""} -->
		<!-- type="text" -->
		<!-- TODO -->
		<!-- required="" -->
		<textarea
			name={inputId.toString()}
			bind:value={inputValue}
			aria-label="Edit {label}"
			{placeholder}
			class="btnInputAx"
		/>
	</div>
</div>

<style lang="postcss">
	textarea:hover {
		@apply bg-blue-50;
		outline: 2px solid blue;
	}
	textarea:focus {
		outline: none;
		@apply bg-white;
	}

	.btnInputAx {
		@apply h-32; /* special text area */

		@apply block;
		@apply w-full;
		@apply px-5;
		@apply py-3;
		@apply text-base;
		/* @apply text-neutral-600; */
		@apply placeholder-gray-300;
		@apply transition;
		@apply duration-500;
		@apply ease-in-out;
		@apply transform;
		@apply border;
		@apply border-transparent;
		@apply rounded-lg;
		@apply bg-gray-50;
	}

	.btnInputAx:focus {
		@apply bg-white;
		@apply outline-none;
		@apply ring-2;
		@apply ring-white;
		@apply ring-offset-2;
		@apply ring-offset-gray-300;
	}
</style>
