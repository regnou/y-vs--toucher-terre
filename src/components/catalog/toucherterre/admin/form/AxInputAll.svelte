<!-- <svelte:options accessors={true} /> -->
<script>
	import AxArea from './AxArea.svelte';
	import AxFileUpload from './AxFileUpload.svelte';

	export let type = '';
	export let inputValue = '';
	export let label = '';
	export let files = null;

	// hack refresh img
	// export let storeIndex = 0;

	// export let inputId;
	let inputId = '0';
	// export let placeholder;
	let placeholder = '--';
	import CharacterCounter from '@smui/textfield/character-counter';

	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	// $: if (inputValue) console.log("inside : " + inputValue);
	// 3 replace space
	// $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM
</script>

<div>
	<!-- <label for={inputId} class="block text-sm font-medium text-neutral-600">
    {labelName}
  </label> -->
	<!-- <div class="capitalize  block text-sm font-bold text-neutral-600">
		{label}
	</div> -->
	<!-- <div class="mt-1"> -->
	<!-- value={inputValue ? inputValue : ""} -->
	{#if type === 'text'}
		<!-- <input
				type="text"
				name={inputId}
				bind:value={inputValue}
				aria-label="Edit {label}"
				{placeholder}
				autocomplete="off"
				class="btnInputAx"
			/> -->

		<Textfield style="width: 100%;" helperLine$style="width: 100%;" bind:value={inputValue} {label}>
			<!-- <HelperText slot="helper">Helper Text</HelperText> -->
		</Textfield>
	{:else if type === 'file'}
		<AxFileUpload bind:files bind:urlStorage={inputValue} />
	{:else if type === 'area'}
		<!-- <AxArea bind:inputValue name={inputId} /> -->
		<!-- -->
		<!-- input$maxlength={500} -->
		<Textfield style="width: 100%; height: 200px;" textarea bind:value={inputValue} {label} />
		<!-- helperLine$style="width: 100%;" -->
		<!-- <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter> -->
	{/if}
	<!-- </div> -->
</div>

<style>
	/* 
	input:hover {
		@apply bg-blue-50;
		outline: 2px solid blue;
	}
	input:focus {
		outline: none;
		@apply bg-white;
	}

.btnInputAx {
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
		@apply bg-gray-50;
	}

	.btnInputAx:focus {
		@apply bg-white;
		@apply outline-none;
		@apply ring-2;
		@apply ring-white;
		@apply ring-offset-2;
		@apply ring-offset-gray-300;
	} */
</style>
