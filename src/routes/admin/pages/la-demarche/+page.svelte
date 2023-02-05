<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import BaseAdmin from '@app/components/catalog/toucherterre/admin/layout/1-GenericAdmin.svelte';
	import LaDemarcheApp from '@app/components/catalog/toucherterre/front/page/LaDemarcheApp.svelte';
	import { TABLE_LADEMARCHE } from '@app/entities/COLLECTIONS';
	import { STORE_LADEMARCHE } from '@app/stores/STORES';
	import { DATAJSON__INJECT_LADEMARCHE } from '@app/data/DB-INJECT/DATAJSON__LaDemarche.json';
</script>

<Layoutadminapp>
	<div slot="app">
		<LaDemarcheApp />
	</div>
	<div slot="admin">
		<BaseAdmin
			col={TABLE_LADEMARCHE}
			GENERIC_STORE={STORE_LADEMARCHE}
			initData={DATAJSON__INJECT_LADEMARCHE}
		/>
	</div>
</Layoutadminapp>
