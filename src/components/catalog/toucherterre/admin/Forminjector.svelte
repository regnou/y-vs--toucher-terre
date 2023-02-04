<script>
	import {
		service_addIdInput,
		service_modInput
	} from '@app/utils/tecnology/firebase/services/adminPageServices';
	import Button, { Label } from '@smui/button';

	export let col;
	export let initData;

	const injectScript = async () => {
		await service_addIdInput(col, 'summaryId', { data: initData });
	};
</script>

<div
	id="pageadmin-panelviewer"
	class=" rounded-xl border-4 bg-black p-5 text-center  text-yellow-300 "
>
	<div class="mb-10 text-center font-bold">SCRIPTS DB</div>

	<Button on:click={injectScript} variant="raised" class="button-shaped-round">
		<Label>INJECT DATA</Label>
	</Button>
</div>
