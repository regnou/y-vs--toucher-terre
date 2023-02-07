<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import GenericAdmin from '@app/components/catalog/toucherterre/admin/layout/GenericAdmin.svelte';
	import ProchainsRdvApp from '@app/components/catalog/toucherterre/front/TPL/ProchainsRdvApp.svelte';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import { DATAJSON__INJECT_PROCHAINSRDV } from '@app/DATA/DB-INJECT/DATAJSON__INJECT_ProchainsRdv.json';
	import { TABLE_PROCHAINSRDV } from '@app/z-entities/COLLECTIONS';
	import { DATAJSON__ADD_PROCHAINSRDV } from '@app/DATA/DB-ADD/DATAJSON__ADD_ProchainsRdv.json';
</script>

<Layoutadminapp>
	<div slot="app">
		<ProchainsRdvApp />
	</div>
	<div slot="admin">
		<GenericAdmin
			col={TABLE_PROCHAINSRDV}
			GENERIC_STORE={STORE_PROCHAINSRDV}
			GENERIC_ADD={DATAJSON__ADD_PROCHAINSRDV}
			initData={DATAJSON__INJECT_PROCHAINSRDV}
		/>
	</div>
</Layoutadminapp>
