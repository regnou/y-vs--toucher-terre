<script lang="ts">
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import AxTable from '@app/components/catalog/toucherterre/cms/generic-cms/form/widgets/AxTable.svelte';
	import { AX__HEADERMENU_CMS } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_CMS.json';
</script>

<!-- ####################################################### -->
<!-- route: CMS-SITE-home -->
<!-- ####################################################### -->

<Framecms>
	<!-- CMS -->
	<div slot="cms">
		<AxTable menus={AX__HEADERMENU_CMS} sortId="id" />
	</div>
	<!-- APP -->
</Framecms>
