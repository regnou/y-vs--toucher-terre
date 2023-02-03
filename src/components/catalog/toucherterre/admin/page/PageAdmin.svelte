<script lang="ts">
	import FormInjector from '../Forminjector.svelte';
	import FormEdit from '../Formedit.svelte';

	export let col;
	export let store;
	export let initData;
</script>

<!-- ADMIN -->
<div id="pageadmin" class="flex max-w-xl flex-col gap-10">
	<!-- PANEL: form edit -->
	<FormEdit {col} {store} {initData} />
	<!-- PANEL: inject -->
	<FormInjector {initData} />
</div>

<!-- tpl form page admin auto gen -->
<style>
	button {
		@apply m-2 border-2 border-blue-400 bg-white p-2;
	}
	button:hover {
		@apply border-blue-800 bg-green-300;
	}
</style>
