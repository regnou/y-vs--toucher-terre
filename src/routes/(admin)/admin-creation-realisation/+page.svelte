<script>
	import BasePageAdmin from '@app/components/catalog/toucherterre/admin/page/PageAdmin.svelte';
	import LayoutAdmin from '@app/components/catalog/toucherterre/admin/page/LayoutAdmin.svelte';
	import { TABLE_REALISATIONCREATION } from '@app/entities/COLLECTIONS';
	import { STORE_CREATIONREALISATION, STORE_LADEMARCHE } from '@app/stores/STORES';
	import { DATA_INIT_CREATIONREALISATION } from '@app/data/STORES_ADMIN_JSON/CreationRealisation.json';
	import CreationRealisationApp from '@app/components/catalog/toucherterre/front/page/CreationRealisationApp.svelte';
</script>

<LayoutAdmin>
	<div slot="app">
		<CreationRealisationApp />
	</div>
	<div slot="admin">
		<BasePageAdmin
			col={TABLE_REALISATIONCREATION}
			store={STORE_CREATIONREALISATION}
			initData={DATA_INIT_CREATIONREALISATION}
		/>
	</div>
</LayoutAdmin>
