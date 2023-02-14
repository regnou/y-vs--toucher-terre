<script lang="ts">
	import AxTable from '@app/components/catalog/toucherterre/cms/generic-cms/form-user/widgets/AxTable.svelte';
	import Framecms from '@app/components/catalog/toucherterre/cms/Framecms.svelte';
	import { AX__HEADERMENU_CMS } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_CMS.json';
</script>

<!-- ##############################@@ -->
<!-- CMS / quelle page du site editer ? -->
<!-- ##############################@@ -->
<!-- MENU to navigate throught the pages to EDIT -->
<Framecms>
	<div slot="cms">
		<AxTable menus={AX__HEADERMENU_CMS} sortId="id" />
	</div>
</Framecms>
