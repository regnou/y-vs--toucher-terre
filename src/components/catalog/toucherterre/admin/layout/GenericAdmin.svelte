<script lang="ts">
	import FormInjector from './sublayout/Forminjector.svelte';
	import AxForm from './sublayout/AxForm.svelte';

	export let col;
	export let GENERIC_ADD = null;
	export let GENERIC_STORE;
	export let initData;
</script>

<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->

<!-- ADMIN -->
<div id="admin--1" class="  border-4 border-red-300 ">
	<!-- PANEL: form edit -->
	<AxForm {col} {GENERIC_ADD} {GENERIC_STORE} />
	<!-- PANEL: inject -->
	<FormInjector {col} {initData} />
</div>
