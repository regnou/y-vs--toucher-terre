<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import Admin from '@app/components/catalog/toucherterre/admin/page/Admin.svelte';
	import AcceuilApp from '@app/components/catalog/toucherterre/front/page/AcceuilApp.svelte';
	import { TABLE_ACCEUIL } from '@app/entities/COLLECTIONS';
	import { STORE_ACCEUIL } from '@app/stores/STORES';
	import { DATAJSON__INJECT_ACCEUIL } from '@app/data/DB-INJECT/DATAJSON__Acceuil.json';
</script>

<Layoutadminapp>
	<div slot="admin">
		<Admin col={TABLE_ACCEUIL} store={STORE_ACCEUIL} initData={DATAJSON__INJECT_ACCEUIL} />
	</div>

	<div slot="app">
		<AcceuilApp />
	</div>
</Layoutadminapp>
