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

		<Textfield
			style=" width: 100%; height: 200px; "
			textarea
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
		<div class=" grid place-items-center ">
			<!-- <div class=" ">{ivItm.label}</div> -->
			<Axfileupload
				bind:ivItm
				{pos}
			/>
		</div>
	{/if}
{/if}

<!-- <div class="mb-5" /> -->
<script lang="ts">
	import { AX_CONST__formatMedia } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	import Textfield from '@smui/textfield';
	import Axfileupload from './AxFileupload.svelte';
	export let pos: number;
	export let ivItm: I_UI__inputValue | undefined = undefined; // take a reference to the STORE
</script>
