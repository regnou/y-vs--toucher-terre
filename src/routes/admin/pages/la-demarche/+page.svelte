<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import GenericAdmin from '@app/components/catalog/toucherterre/admin/layout/GenericAdmin.svelte';
	import LaDemarcheApp from '@app/components/catalog/toucherterre/front/TPL/LaDemarcheApp.svelte';
	import { STORE_LADEMARCHE } from '@app/stores/STORES';
	import { DATAJSON__INJECT_LADEMARCHE } from '@app/DATA/DB-INJECT/DATAJSON__INJECT_LaDemarche.json';
	import { TABLE_LADEMARCHE } from '@app/z-entities/COLLECTIONS';
</script>

<Layoutadminapp>
	<div slot="app">
		<LaDemarcheApp />
	</div>
	<div slot="admin">
		<GenericAdmin
			col={TABLE_LADEMARCHE}
			GENERIC_STORE={STORE_LADEMARCHE}
			initData={DATAJSON__INJECT_LADEMARCHE}
		/>
	</div>
</Layoutadminapp>
