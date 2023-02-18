<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import FormInjector from './form-injector/FormDbInjector.svelte';
	import Form from './form/Form.svelte';
	// import { get } from 'svelte/store';
	// ----------------------------------------------
	// Page init this config, that goes throught childrens
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
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
	<Form {megaconfig} />

	<!-- ------------- -->
	<!-- PANEL: inject -->
	<!-- ------------- -->
	<FormInjector {megaconfig} />
</div>
