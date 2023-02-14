<script lang="ts">
	import FormInjector from './form-injector/FormDbInjector.svelte';
	import Form from './form-user/Form.svelte';
	// import { get } from 'svelte/store';
	// .............................................
	export let megaconfig; // Page init this config, that goes throught childrens
	// .............................................
</script>

<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->

<!-- 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀 -->
<!-- WELCOME TO THE GENERIC-CMS-PAGE COMPONENT -->
<!-- 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀 -->
<div id="genericcms-1" class="border-4  border-red-300">
	<!-- ---------------- -->
	<!-- PANEL: form edit (CA FAIT AUSSI UN READ) -->
	<!-- ---------------- -->
	<Form {megaconfig} />

	<!-- ------------- -->
	<!-- PANEL: inject -->
	<!-- ------------- -->
	<FormInjector {megaconfig} />
</div>
