<script lang="ts">
	import { AX__ENUM__formatMedia } from '@app/domain/DATA/backend/AX__ENUM__formatMedia';
	// import { STORE__PAGEITEMS } from '@app/stores/store';
	import Textfield from '@smui/textfield';
	import Axfileupload from './AxFileupload.svelte';
	// ....................................................
	export let ivItm: I_UI__inputValue; // take a reference to the STORE

	// $: {
	// MEGACONFIG_CMS.conf__STORE__PAGEITEMS.set($STORE__PAGEITEMS);
	// console.debug('🚔STORE__PAGEITEMS ', $STORE__PAGEITEMS);
	// console.debug('🚔MEGACONFIG_CMS.conf__STORE__PAGEITEMS ', get(MEGACONFIG_CMS.conf__STORE__PAGEITEMS));
	// }

	// $: {
	// 	MEGACONFIG_CMS.conf__STORE__PAGEITEMS.set($STORE__PAGEITEMS);
	// 	// MEGACONFIG_CMS = MEGACONFIG_CMS;
	// 	// MEGACONFIG_CMS.conf__STORE__PAGEITEMS = MEGACONFIG_CMS.conf__STORE__PAGEITEMS;
	// 	// get(MEGACONFIG_CMS.conf__STORE__PAGEITEMS)[] = MEGACONFIG_CMS;
	// 	console.debug('🚔STORE__PAGEITEMS ', $STORE__PAGEITEMS);
	// 	console.debug('🚔MEGACONFIG_CMS.conf__STORE__PAGEITEMS ', get(MEGACONFIG_CMS.conf__STORE__PAGEITEMS));
	// }
</script>

<!-- ############################################## -->
<!-- INPUT VALUE -->
<!-- ############################################## -->
<div>
	<!-- TODO - a remettre, je fais une version sans imge, ni slideshow -->
	<!-- {#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === 'video')} -->
	{#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === AX__ENUM__formatMedia.video)}
		<!--  -->
		<!-- TXT -->
		<!--  -->
		<Textfield
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={ivItm.value}
			label={ivItm.label}
		>
			<!-- <HelperText slot="helper">Helper Text</HelperText> -->
		</Textfield>
	{:else if ivItm.tag === 'area'}
		<!--  -->
		<!-- TXT AREA -->
		<!--  -->
		<Textfield
			style="width: 100%; height: 200px;"
			textarea
			bind:value={ivItm.value}
			label={ivItm.label}
		/>
		<!-- input$maxlength={500} -->
		<!-- helperLine$style="width: 100%;" -->
		<!-- <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter> -->
	{:else if ivItm.tag === 'file'}
		<!--  -->
		<!-- FILE -->
		<!--  -->
		<div class="max-w-xs">
			<div class="text-xs text-gray-400">{ivItm.label}</div>
			<Axfileupload bind:ivItm />
			<!-- <Axfileupload bind:files bind:urlStorage={ivItm.iv} /> -->
		</div>
	{/if}
</div>
