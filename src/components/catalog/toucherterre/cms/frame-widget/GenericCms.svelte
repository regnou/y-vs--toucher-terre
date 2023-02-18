<script lang="ts">
	import AxForm from './widgets/form/AxForm.svelte';
	import AxFormDbInjector from './widgets/form-injector/AxFormDbInjector.svelte';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	// ----------------------------------------------
	// ROOT CONFIG CMS (generique)
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;

	// .............................................
</script>

<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->

<!-- ####################################################### -->
<!-- ####################################### -->
<!--  -->
<!-- ####################################### -->
<!-- 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀 -->
<!-- WELCOME TO THE GENERIC-CMS-PAGE COMPONENT       -->
<!-- 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀 -->
<div id="genericcms--1" style=" border:{AX__UI__CONST_isDebugBorder ? '4px solid red' : 'none'}">
	<!-- ---------------- -->
	<!-- PANEL: form edit (CA FAIT AUSSI UN READ) -->
	<!-- ---------------- -->
	<AxForm {megaconfig} bind:store />

	<!-- ------------- -->
	<!-- PANEL: inject -->
	<!-- ------------- -->
	<AxFormDbInjector {megaconfig} />
</div>
