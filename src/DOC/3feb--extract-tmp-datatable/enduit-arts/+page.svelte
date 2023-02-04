<script lang="ts">
	import AxForm from '@app/components/catalog/toucherterre/admin/layout/AxForm.svelte';
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import { TABLE_CREATIONREALISATION } from '@app/entities/COLLECTIONS';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
</script>

<Layoutadminapp>
	<div slot="app">
		<AxForm postId={4} col={TABLE_CREATIONREALISATION} GENERIC_STORE={STORE_CREATIONREALISATION} />
	</div>
	<!-- <div slot="admin">admin</div> -->
</Layoutadminapp>
