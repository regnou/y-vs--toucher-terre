<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import BaseAdmin from '@app/components/catalog/toucherterre/admin/layout/GenericAdmin.svelte';
	import ProchainsRdvApp from '@app/components/catalog/toucherterre/front/TPL/ProchainsRdvApp.svelte';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import { DATAJSON__INJECT_PROCHAINSRDV } from '@app/DATA/DB-INJECT/DATAJSON__ProchainsRdv.json';
	import { TABLE_PROCHAINSRDV } from '@app/z-entities/COLLECTIONS';
</script>

<Layoutadminapp>
	<div slot="app">
		<ProchainsRdvApp />
	</div>
	<div slot="admin">
		<BaseAdmin
			col={TABLE_PROCHAINSRDV}
			GENERIC_STORE={STORE_PROCHAINSRDV}
			initData={DATAJSON__INJECT_PROCHAINSRDV}
		/>
	</div>
</Layoutadminapp>
