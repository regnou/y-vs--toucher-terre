<!-- ####################################################### -->
<!-- route: CMS-SITE-home -->
<!-- ####################################################### -->
<AxFramecms>
	<!-- CMS -->
	<div slot="cms">
		<AxTable
			menus={AX_CONST__FRAME_MENU_cms}
			sortId="id"
		/>
	</div>
	<!-- APP -->
</AxFramecms>

<script lang="ts">
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import AxTable from 'app/components/toucherterre/cms/widgets/AxTable.svelte';
	import { AX_CONST__FRAME_MENU_cms } from 'app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_cms';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { axlog } from 'app/utils/axLog';
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'HOME-APP (cms)');
	});
</script>
