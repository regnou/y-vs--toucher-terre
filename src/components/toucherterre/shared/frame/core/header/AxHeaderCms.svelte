<!-- HEADER CMS -->
<!-- ######################################################## -->
<!-- ######################################## -->

<!-- on:click={async () => {
	await handleClick();
}} -->
<Section
	style="background:{AX_CONST__FRAME_isDebugBg ? 'purple' : 'none'}"
	class=" flex  justify-center  uppercase"
>
	{$page.url.pathname.replace('/cms/site/', '').replace('-', ' ')}
</Section>
<Section
	align="end"
	style="background:{AX_CONST__FRAME_isDebugBg ? 'green' : 'none'}"
>
	<!-- SAVE -->
	<!-- <div class=" grid grid-flow-col  gap-2 p-10"> -->
	<AxBtnOk
		text="Enregistrer"
		callback={async () => await save(megaconfig?.conf__db, store)}
	/>
	<!-- </div> -->

	<!-- <a href={AX__CONST__homeUrl} rel="prefetch"> -->
	<!-- <Fab mini> -->
	<!-- <img src="media/ax/3.jpg" alt="" /> -->
	<!-- <Icon class="material-icons">login</Icon> -->
	<!-- </Fab> -->
	<!-- </a>  -->
	<!-- FAB not used NOW -->
	<!-- <IconButton
		href={AX__CONST__homeUrl}
		class="material-icons"
		title="Dismiss">logout</IconButton
	> -->
</Section>

<script lang="ts">
	import { page } from '$app/stores';
	import AxBtnOk from '@app/components/catalog/toucherterre/cms/frame-pages/widgets/form-inputValue/AxBtnOk.svelte';
	import { AX_CONST__FRAME_isDebugBg } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { save } from '@app/stores/actionsApi';
	import { Section } from '@smui/top-app-bar';
	// ------------------------------------------------
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;
	// ------------------------------------------------
</script>
