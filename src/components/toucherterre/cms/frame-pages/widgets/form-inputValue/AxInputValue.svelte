<!-- ####################################################### -->
<!-- ####################################### -->
<!-- INPUT VALUE -->
<!-- ####################################### -->
{#if ivItm}
	<!-- TODO - a remettre, je fais une version sans imge, ni slideshow -->
	<!-- {#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === 'video')} -->
	{#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === AX_CONST__formatMedia.video)}
		<!--     -->
		<!-- TXT -->
		<!--     -->
		<!-- class="shaped-outlined" -->
		<!-- variant="outlined" -->
		<!-- or -->
		<!-- variant="filled" -->
		<Textfield
			variant="filled"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={ivItm.value}
			label={ivItm.label}
		>
			<!-- <HelperText slot="helper">Helper Text</HelperText> -->
		</Textfield>
	{:else if ivItm.tag === 'area'}
		<!--          -->
		<!-- TXT AREA -->
		<!--          -->
		<!-- helperLine$style="width: 100%;"
		 " -->
		<Textfield
			style=" height: 200px;"
			textarea
			class="w-full border-8 border-gray-100 bg-gray-100   outline-gray-100 hover:bg-gray-200 focus:bg-gray-500 "
			bind:value={ivItm.value}
			label={ivItm.label}
		/>
		<!-- input$maxlength={500} -->
		<!-- helperLine$style="width: 100%;" -->
		<!-- <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter> -->
	{:else if ivItm.tag === 'file'}
		<!--      -->
		<!-- FILE -->
		<!--      -->
		<!-- <div class=" grid place-items-center "> -->
		<!-- <div class=" ">{ivItm.label}</div> -->
		<Axfileupload
			bind:ivItm
			{pos}
		/>
		<!-- </div> -->
	{/if}
{/if}

<!-- <style lang="postcss">
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__leading) {
		border-radius: 28px 0 0 28px;
		width: 28px;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__trailing) {
		border-radius: 0 28px 28px 0;
	}
	* :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
		max-width: calc(100% - 28px * 2);
	}
	*
		:global(
			.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating)
				.mdc-floating-label
		) {
		left: 16px;
	}
	* :global(.shaped-outlined + .mdc-text-field-helper-line) {
		padding-left: 32px;
		padding-right: 28px;
	}
</style> -->

<!-- <div class="mb-5" /> -->
<script lang="ts">
	// tip: it is a DTO, it is dumb, it is just to display the informations and metas
	export let ivItm: I_DTO__uiinputValue | undefined = undefined; // take a reference to the STORE
	export let pos: number | undefined = undefined;
	onMount(() => {
		axlog({ ivItm, pos }, $page.url.pathname, 'wc -- ax input value', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import Textfield from '@smui/textfield';
	import { AX_CONST__formatMedia } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	import Axfileupload from './AxFileupload.svelte';
</script>
