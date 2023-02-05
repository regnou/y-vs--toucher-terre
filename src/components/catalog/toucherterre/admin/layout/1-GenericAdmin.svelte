<script lang="ts">
	import FormInjector from '../Forminjector.svelte';
	import AxForm from './2-AxForm.svelte';

	export let col;
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
	<AxForm {col} {GENERIC_STORE} />
	<!-- PANEL: inject -->
	<FormInjector {col} {initData} />
</div>
