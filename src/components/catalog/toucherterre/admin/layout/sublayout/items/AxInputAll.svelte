<script lang="ts">
	import Textfield from '@smui/textfield';
	import Axfileupload from '../../../TPL/form/Axfileupload.svelte';

	export let ivItm; // take a reference to the GENERIC_STORE
</script>

<div>
	<!--  -->
	<!--  -->
	<!-- TXT -->
	{#if ivItm.type === 'text'}
		<Textfield
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={ivItm.inputValue}
			label={ivItm.label}
		>
			<!-- <HelperText slot="helper">Helper Text</HelperText> -->
		</Textfield>
		<!--  -->
		<!--  -->
		<!-- TXT AREA -->
	{:else if ivItm.type === 'area'}
		<Textfield
			style="width: 100%; height: 200px;"
			textarea
			bind:value={ivItm.inputValue}
			label={ivItm.label}
		/>
		<!-- input$maxlength={500} -->
		<!-- helperLine$style="width: 100%;" -->
		<!-- <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter> -->
		<!--  -->
		<!--  -->
		<!-- FILE -->
	{:else if ivItm.type === 'file'}
		<div class="max-w-xs">
			<div class="text-xs text-gray-400">{ivItm.label}</div>
			<Axfileupload bind:ivItm />
			<!-- <Axfileupload bind:files bind:urlStorage={ivItm.inputValue} /> -->
		</div>
	{/if}
</div>
