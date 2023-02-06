<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
	import { DATAJSON__INJECT_CREATIONREALISATION } from '@app/DATA/DB-INJECT/DATAJSON__CreationRealisation';
	import CreationRealisationApp from '@app/components/catalog/toucherterre/front/TPL/CreationRealisationApp.svelte';
	import GenericAdmin from '@app/components/catalog/toucherterre/admin/layout/GenericAdmin.svelte';
	import { TABLE_CREATIONREALISATION } from '@app/z-entities/COLLECTIONS';
</script>

<Layoutadminapp>
	<!-- ADMIN -->
	<div slot="admin">
		<GenericAdmin
			col={TABLE_CREATIONREALISATION}
			GENERIC_STORE={STORE_CREATIONREALISATION}
			initData={DATAJSON__INJECT_CREATIONREALISATION}
		/>
	</div>
	<!-- APP -->
	<div slot="app">
		<CreationRealisationApp />
	</div>
</Layoutadminapp>
