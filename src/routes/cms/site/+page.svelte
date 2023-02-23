<!-- ####################################################### -->
<!-- route: CMS-SITE-home -->
<!-- ####################################################### -->

<Framecms>
	<!-- CMS -->
	<div slot="cms">
		<AxTable
			menus={AX_CONST__FRAME_MENU_cms}
			sortId="id"
		/>
	</div>
	<!-- APP -->
</Framecms>

<script lang="ts">
	import Framecms from '@app/components/catalog/toucherterre/cms/AxFramecms.svelte';
	import AxTable from '@app/components/catalog/toucherterre/cms/widgets/AxTable.svelte';
	import { AX_CONST__FRAME_MENU_cms } from '@app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_cms';
</script>
