<script lang="ts">
	import FormInjector from '../Forminjector.svelte';
	import FormEdit from '../Formedit.svelte';

	export let col;
	export let store;
	export let initData;
</script>

<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->
<!-- tpl form page admin auto gen -->

<!-- ADMIN -->
<div id="admin--1" class="  border-4 border-red-300 ">
	<!-- PANEL: form edit -->
	<FormEdit {col} {store} />
	<!-- PANEL: inject -->
	<FormInjector {col} {initData} />
</div>
