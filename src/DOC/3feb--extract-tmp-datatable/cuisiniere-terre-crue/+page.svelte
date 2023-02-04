<script lang="ts">
	import Formedit from '@app/components/catalog/toucherterre/admin/Formedit.svelte';
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import { TABLE_CREATIONREALISATION } from '@app/entities/COLLECTIONS';
	import { STORE_CREATIONREALISATION } from '@app/stores/STORES';

	// const col = 'TABLE_CREATIONREALISATION';
	// const store = '';
</script>

<Layoutadminapp>
	<div slot="app">
		{#if $STORE_CREATIONREALISATION && $STORE_CREATIONREALISATION.length}
			<Formedit
				col={TABLE_CREATIONREALISATION}
				store={$STORE_CREATIONREALISATION[0].posts[0].inputValues}
			/>
		{/if}
	</div>
	<!-- <div slot="admin">admin</div> -->
</Layoutadminapp>
