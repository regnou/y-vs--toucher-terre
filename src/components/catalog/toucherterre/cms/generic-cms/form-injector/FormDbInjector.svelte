<script lang="ts">
	import { config__add } from '@app/domain/services/configService';
	import Button, { Label } from '@smui/button';

	export let megaconfig;

	const injectScript = async () => {
		console.debug('🌎🏎️✅ click >> on:inject 1 🟡');
		if (megaconfig.conf__dataset) await config__add(megaconfig.conf__col, megaconfig.conf__dataset);
		console.debug('🌎🏎️✅ click << on:inject 2 🟨');
	};
</script>

<!-- ###################################### -->
<!-- FORM INJECTOR -->
<!-- ###################################### -->
<div id="pageadmin-panelviewer" class="rounded-xl  bg-gray-500 p-5 text-center  text-yellow-300 ">
	<div class="mb-10 text-center font-bold">SCRIPTS DB</div>

	<Button on:click={injectScript} variant="raised" class="button-shaped-round">
		<Label>INJECT DATASET</Label>
	</Button>
</div>
