export const TPL_UIADMIN = `
<script lang='ts'> 
	import XXXApp from '@app/components/catalog/toucherterre/pagecomponent/XXXApp.svelte'; 
	import Framecms from '@app/components/catalog/toucherterre/site/pagecomponent/Framecms.svelte'; 
	import BaseAdmin from '@app/components/catalog/toucherterre/site/pagecomponent/BaseAdmin.svelte'; 
	import { DB__YYY } from '@app/domain/2dao/firebase/COLLECTIONS'; 
	import { STORE_YYY } from '@app/stores/stores'; 
	import { AX__INJECT_YYY } from '@app/components/catalog/toucherterre/site/pagecomponent/JSON/XXX.json'; 
</script> 

<Framecms> 
	<div slot='app'> 
		<XXXApp /> 
	</div> 
	<div slot='admin'> 
		<BaseAdmin col={DB__YYY} store={STORE_YYY} dataset={AX__INJECT_YYY} /> 
	</div> 
</Framecms> 
`;
