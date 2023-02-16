<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';
	import FormInjector from './form-injector/FormDbInjector.svelte';
	import Form from './form-user/Form.svelte';
	// import { get } from 'svelte/store';
	// ----------------------------------------------
	export let megaconfig; // Page init this config, that goes throught childrens
	// .............................................
</script>

<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->

<!-- 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀 -->
<!-- WELCOME TO THE GENERIC-CMS-PAGE COMPONENT       -->
<!-- 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀 -->
<div id="genericcms-1" style=" border:{AX__CONST__isDebugBorder ? '4px solid red' : 'none'}">
	<!-- ---------------- -->
	<!-- PANEL: form edit (CA FAIT AUSSI UN READ) -->
	<!-- ---------------- -->
	<Form {megaconfig} />

	<!-- ------------- -->
	<!-- PANEL: inject -->
	<!-- ------------- -->
	<FormInjector {megaconfig} />
</div>
