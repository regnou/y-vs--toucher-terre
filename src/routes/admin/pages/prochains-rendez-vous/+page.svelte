<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import BaseAdmin from '@app/components/catalog/toucherterre/admin/page/Admin.svelte';
	import ProchainsRdvApp from '@app/components/catalog/toucherterre/front/page/ProchainsRdvApp.svelte';
	import { TABLE_PROCHAINSRDV } from '@app/entities/COLLECTIONS';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import { DATAJSON__INJECT_PROCHAINSRDV } from '@app/data/DB-INJECT/DATAJSON__ProchainsRdv.json';
</script>

<Layoutadminapp>
	<div slot="app">
		<ProchainsRdvApp />
	</div>
	<div slot="admin">
		<BaseAdmin
			col={TABLE_PROCHAINSRDV}
			store={STORE_PROCHAINSRDV}
			initData={DATAJSON__INJECT_PROCHAINSRDV}
		/>
	</div>
</Layoutadminapp>
