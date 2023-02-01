<script>
	import LayoutAdmin from '@app/components/catalog/toucherterre/admin/page/LayoutAdmin.svelte';
	import BasePageAdmin from '@app/components/catalog/toucherterre/admin/page/PageAdmin.svelte';
	import AcceuilApp from '@app/components/catalog/toucherterre/front/page/AcceuilApp.svelte';
	import { TABLE_ACCEUIL } from '@app/entities/COLLECTIONS';
	import { STORE_ACCEUIL } from '@app/stores/STORES';
	import { DATAJSON__INJECT_ACCEUIL } from '@app/data/DB-INJECT/Acceuil.json';
</script>

<LayoutAdmin>
	<div slot="app">
		<AcceuilApp />
	</div>
	<div slot="admin">
		<BasePageAdmin col={TABLE_ACCEUIL} store={STORE_ACCEUIL} initData={DATAJSON__INJECT_ACCEUIL} />
	</div>
</LayoutAdmin>
