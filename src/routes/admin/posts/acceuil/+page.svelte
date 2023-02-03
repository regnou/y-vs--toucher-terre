<script>
	import LayoutAdminapp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import PageAdmin from '@app/components/catalog/toucherterre/admin/page/Pageadmin.svelte';
	import AcceuilApp from '@app/components/catalog/toucherterre/front/page/AcceuilApp.svelte';
	import { TABLE_ACCEUIL } from '@app/entities/COLLECTIONS';
	import { STORE_ACCEUIL } from '@app/stores/STORES';
	import { DATAJSON__INJECT_ACCEUIL } from '@app/data/DB-INJECT/Acceuil.json';
</script>

<LayoutAdminapp>
	<div slot="admin">
		<PageAdmin col={TABLE_ACCEUIL} store={STORE_ACCEUIL} initData={DATAJSON__INJECT_ACCEUIL} />
	</div>

	<div slot="app">
		<AcceuilApp />
	</div>
</LayoutAdminapp>
