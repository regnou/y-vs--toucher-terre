<script>
	import LayoutAdmin from '@app/components/catalog/toucherterre/admin/page/LayoutAdmin.svelte';
	import BasePageAdmin from '@app/components/catalog/toucherterre/admin/page/PageAdmin.svelte';
	import LaDemarcheApp from '@app/components/catalog/toucherterre/front/page/LaDemarcheApp.svelte';
	import { TABLE_LADEMARCHE } from '@app/entities/COLLECTIONS';
	import { STORE_LADEMARCHE } from '@app/stores/STORES';
	import { DATAJSON__INJECT_LADEMARCHE } from '@app/data/DB-INJECT/LaDemarche.json';
</script>

<LayoutAdmin>
	<div slot="app">
		<LaDemarcheApp />
	</div>
	<div slot="admin">
		<BasePageAdmin
			col={TABLE_LADEMARCHE}
			store={STORE_LADEMARCHE}
			initData={DATAJSON__INJECT_LADEMARCHE}
		/>
	</div>
</LayoutAdmin>
