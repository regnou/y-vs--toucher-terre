<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import { TABLE_CREATIONREALISATION } from '@app/z-entities/COLLECTIONS';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';
	import AxForm from '@app/components/catalog/toucherterre/admin/layout/sublayout/AxForm.svelte';

	// const col = 'TABLE_CREATIONREALISATION';
	// const store = '';
</script>

<Layoutadminapp>
	<div slot="app">
		{#if $STORE_CREATIONREALISATION && $STORE_CREATIONREALISATION.length}
			<AxForm
				col={TABLE_CREATIONREALISATION}
				GENERIC_STORE={$STORE_CREATIONREALISATION[0].posts[0].inputValues}
			/>
		{/if}
	</div>
	<!-- <div slot="admin">admin</div> -->
</Layoutadminapp>
