<script>
	import LayoutAdminApp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import AxDataTable from '@app/components/catalog/toucherterre/admin/AxDataTable.svelte';
	import { DATAJSON__PAGES } from '@app/data/MENUS/DATAJSON__PAGES';
</script>

<LayoutAdminApp>
	<div slot="admin">
		<AxDataTable items={DATAJSON__PAGES} sortId="id" />
	</div>
</LayoutAdminApp>
