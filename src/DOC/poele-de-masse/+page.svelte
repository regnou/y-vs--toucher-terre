<script>
	import Formedit from '@app/components/catalog/toucherterre/admin/Formedit.svelte';
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import { TABLE_CREATIONREALISATION } from '@app/entities/COLLECTIONS';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
</script>

<Layoutadminapp>
	<div slot="app">
		<Formedit postId={2} col={TABLE_CREATIONREALISATION} store={STORE_CREATIONREALISATION} />
	</div>
	<!-- <div slot="admin">admin</div> -->
</Layoutadminapp>
