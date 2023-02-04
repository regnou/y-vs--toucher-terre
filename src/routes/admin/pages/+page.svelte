<script lang="ts">
	import LayoutAdminApp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import AxDataTable from '@app/components/catalog/toucherterre/admin/tpl/AxMenus.svelte';
	import { DATAJSON__PAGES } from '@app/data/MENUS/DATAJSON__Pages.json';
</script>

<LayoutAdminApp>
	<div slot="admin">
		<AxDataTable items={DATAJSON__PAGES} sortId="id" />
	</div>
</LayoutAdminApp>
