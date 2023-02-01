export const TPL_UIADMIN = `
<script> 
	import XXXApp from '@app/components/catalog/toucherterre/pagecomponent/XXXApp.svelte'; 
	import LayoutAdmin from '@app/components/catalog/toucherterre/admin/pagecomponent/LayoutAdmin.svelte'; 
	import BasePageAdmin from '@app/components/catalog/toucherterre/admin/pagecomponent/BasePageAdmin.svelte'; 
	import { TABLE_YYY } from '@app/domain/2dao/firebase/COLLECTIONS'; 
	import { STORE_YYY } from '@app/stores/stores'; 
	import { DATAJSON__INJECT_YYY } from '@app/components/catalog/toucherterre/admin/pagecomponent/JSON/XXX.json'; 
</script> 

<LayoutAdmin> 
	<div slot='app'> 
		<XXXApp /> 
	</div> 
	<div slot='admin'> 
		<BasePageAdmin col={TABLE_YYY} store={STORE_YYY} initData={DATAJSON__INJECT_YYY} /> 
	</div> 
</LayoutAdmin> 
`;
