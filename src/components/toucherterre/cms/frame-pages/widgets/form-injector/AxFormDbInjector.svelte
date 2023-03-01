<!-- ####################################################### -->
<!-- ####################################### -->
<!--  -->
<!-- ####################################### -->
<!-- ###################################### -->
<!-- FORM INJECTOR -->
<!-- ###################################### -->
<!-- <div id="pageadmin-panelviewer" class="rounded-xl  p-5 text-center   "> -->
<!-- <div class="mb-10 text-center font-bold">SCRIPTS DB</div> -->
<div class=" grid grid-flow-col place-items-center gap-2 p-10">
	<Button
		on:click={injectScript}
		variant="raised"
	>
		<Label>{'Reset page: ' + $page.url.pathname.replace('/cms/app/', '')}</Label>
	</Button>
</div>
<!-- <Button
	on:click={injectScript}
	variant="raised"
	class="button-shaped-round"
>
	<Label>INJECT DATASET</Label>
</Button> -->

<!-- </div> -->
<script lang="ts">
	export let _M_;
	import { page } from '$app/stores';
	import Button, { Label } from '@smui/button';
	import { ConfigServices } from 'app/domain/services/ConfigServices';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'wc -- ax form injector');
	});
	const injectScript = async () => {
		console.debug('🌎🏎️✅ click >> on:inject 1 🟡');
		if (!_M_.conf__db_dataset) return;

		if (!confirm('Effacer toute les donnees et injecter DEFAULT ?')) return;

		await ConfigServices.getInstance().clearCollection(_M_.conf__db);

		await ConfigServices.getInstance().config__adds(_M_.conf__db, _M_.conf__db_dataset);
		// ...............
		console.debug('🌎🏎️✅ click << on:inject 2 🟨');
	};
</script>
