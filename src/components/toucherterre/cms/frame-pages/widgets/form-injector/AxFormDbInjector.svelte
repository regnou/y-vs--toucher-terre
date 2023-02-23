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
	<AxBtnOk
		text={'Reset page ' + $page.url.pathname.replace('/cms/site/', '')}
		callback={injectScript}
	/>
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
	import { page } from '$app/stores';
	import { config__add } from '@app/domain/services/configService';
	import AxBtnOk from '../form-inputValue/AxBtnOk.svelte';
	// ------------------------------------------
	export let megaconfig;
	// ------------------------------------------
	const injectScript = async () => {
		console.debug('🌎🏎️✅ click >> on:inject 1 🟡');
		if (megaconfig.conf__db_dataset)
			await config__add(megaconfig.conf__db, megaconfig.conf__db_dataset);
		console.debug('🌎🏎️✅ click << on:inject 2 🟨');
	};
</script>
