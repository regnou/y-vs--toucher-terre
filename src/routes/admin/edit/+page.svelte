<script>
	import LayoutAdminApp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import AxDataTable from '@app/components/catalog/toucherterre/shared/AxDataTable.svelte';
	import Accordeon from '@app/components/catalog/toucherterre/tmp/Accordeon.svelte';
	import { DATAJSON__PAGES } from '@app/data/MENUS/DATAJSON__PAGES';
	import { Item } from '@smui/image-list';
	import List, { Text } from '@smui/list';
</script>

<LayoutAdminApp>
	<div slot="admin">
		<AxDataTable />

		<!-- <PageAdmin col={TABLE_ACCEUIL} store={STORE_ACCEUIL} initData={DATAJSON__INJECT_ACCEUIL} /> -->
	</div>

	<!-- <div slot="app">
	</div> -->
</LayoutAdminApp>
