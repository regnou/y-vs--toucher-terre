<script lang="ts">
	import LayoutAdminApp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import AxMenus from '@app/components/catalog/toucherterre/admin/TPL/AxMenus.svelte';
	import { DATAJSON__PAGES } from '@app/domain/DATA/MENUS/DATAJSON__Pages.json';
</script>

<LayoutAdminApp>
	<div slot="admin">
		<AxMenus items={DATAJSON__PAGES} sortId="id" />
	</div>
</LayoutAdminApp>
