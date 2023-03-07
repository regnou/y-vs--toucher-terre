<!-- ####################################################### -->
<!-- INPUT VALUE                             -->
<!-- ####################################### -->
{#if ivItm}
	<!-- TODO - a remettre, je fais une version sans imge, ni slideshow -->
	<!-- {#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === 'video')} -->
	{#if ivItm.tag === 'text' || (ivItm.tag === 'file' && ivItm.format && ivItm.format === AX_CONST__FRAME__formatMedia.video)}
		<!-- TXT -->
		<!-- ####################################### -->
		<Textfield
			variant="filled"
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={ivItm.value}
			label={ivItm.label}
		/>
	{:else if ivItm.tag === 'area'}
		<!-- TXT AREA -->
		<!-- ####################################### -->
		<Textfield
			style=" height: 200px;"
			textarea
			class="w-full border-8 border-gray-100 bg-gray-100   outline-gray-100 hover:bg-gray-200 focus:bg-gray-500 "
			bind:value={ivItm.value}
			label={ivItm.label}
		/>
	{:else if ivItm.tag === 'file'}
		<!-- FILE -->
		<!-- ####################################### -->
		<!-- {pos} -->
		<Axfileupload bind:ivItm />
	{/if}
{/if}

<script lang="ts">
	export let ivItm: I_ENTITY__uiinputValue | I_DTO__uiInputValue | undefined = undefined; // take a reference to the STORE
	// export let pos: number | undefined = undefined;
	// onMount(() => {
	// too verbose
	// axlog({ ivItm, pos }, $page.url.pathname, 'wc -- ax input value', false, 'MOUNT', true);
	// });
	import Textfield from '@smui/textfield';
	import { AX_CONST__FRAME__formatMedia } from 'app/0-config/frame/AX_CONST__FRAME';
	// import { onMount } from 'svelte';
	import Axfileupload from './AxFileupload.svelte';
</script>
