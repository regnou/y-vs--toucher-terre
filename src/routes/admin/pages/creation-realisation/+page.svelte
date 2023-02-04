<script>
	import Admin from '@app/components/catalog/toucherterre/admin/page/Admin.svelte';
	import LayoutAdminapp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import { TABLE_CREATIONREALISATION } from '@app/entities/COLLECTIONS';
	import { STORE_CREATIONREALISATION, STORE_LADEMARCHE } from '@app/stores/STORES';
	import { DATAJSON__INJECT_CREATIONREALISATION } from '@app/data/DB-INJECT/CreationRealisation.json';
	import CreationRealisationApp from '@app/components/catalog/toucherterre/front/page/CreationRealisationApp.svelte';
</script>

<LayoutAdminapp>
	<div slot="admin">
		<Admin
			col={TABLE_CREATIONREALISATION}
			store={STORE_CREATIONREALISATION}
			initData={DATAJSON__INJECT_CREATIONREALISATION}
		/>
	</div>
	<!--  -->
	<div slot="app">
		<CreationRealisationApp />
	</div>
</LayoutAdminapp>
