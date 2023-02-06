<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import AcceuilApp from '@app/components/catalog/toucherterre/front/TPL/AcceuilApp.svelte';
	import { STORE_ACCEUIL } from '@app/stores/STORES';
	import { DATAJSON__INJECT_ACCEUIL } from '@app/DATA/DB-INJECT/DATAJSON__Acceuil.json';
	import GenericAdmin from '@app/components/catalog/toucherterre/admin/layout/GenericAdmin.svelte';
	import { TABLE_ACCEUIL } from '@app/z-entities/COLLECTIONS';
</script>

<Layoutadminapp>
	<div slot="admin">
		<GenericAdmin
			col={TABLE_ACCEUIL}
			GENERIC_STORE={STORE_ACCEUIL}
			initData={DATAJSON__INJECT_ACCEUIL}
		/>
	</div>

	<div slot="app">
		<AcceuilApp />
	</div>
</Layoutadminapp>
