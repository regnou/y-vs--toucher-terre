<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import AxForm from '@app/components/catalog/toucherterre/admin/layout/sublayout/AxForm.svelte';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
	import { TABLE_CREATIONREALISATION } from '@app/z-entities/COLLECTIONS';
</script>

<Layoutadminapp>
	<div slot="app">
		<AxForm postId={2} col={TABLE_CREATIONREALISATION} GENERIC_STORE={STORE_CREATIONREALISATION} />
	</div>
	<!-- <div slot="admin">admin</div> -->
</Layoutadminapp>
