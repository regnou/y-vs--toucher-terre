<script>
	import LayoutAdmin from '@app/components/catalog/toucherterre/admin/page/LayoutAdmin.svelte';
	import BasePageAdmin from '@app/components/catalog/toucherterre/admin/page/PageAdmin.svelte';
	import ProchainsRdvApp from '@app/components/catalog/toucherterre/front/page/ProchainsRdvApp.svelte';
	import { TABLE_PROCHAINSRDV } from '@app/entities/COLLECTIONS';
	import { STORE_PROCHAINSRDV } from '@app/stores/STORES';
	import { DATAJSON__INJECT_PROCHAINSRDV } from '@app/data/DB-INJECT/ProchainsRdv.json';
</script>

<LayoutAdmin>
	<div slot="app">
		<ProchainsRdvApp />
	</div>
	<div slot="admin">
		<BasePageAdmin
			col={TABLE_PROCHAINSRDV}
			store={STORE_PROCHAINSRDV}
			initData={DATAJSON__INJECT_PROCHAINSRDV}
		/>
	</div>
</LayoutAdmin>
