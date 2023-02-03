<script lang="ts">
	import Framedrawer from '../../shared/layout/Framedrawer.svelte';
	import HeaderAdmin from '../../shared/layout/HeaderAdmin.svelte';
</script>

<div id="layoutadminapp">
	<Framedrawer isAdmin={true}>
		<!--  -->
		<!-- HEADER -->
		<slot slot="header-1">
			<HeaderAdmin />
		</slot>

		<!-- BODY -->
		<div slot="content-1" id="layoutadminapp-body" class="border-8 border-red-500">
			<!-- SLOT ADMIN -->
			<div
				id="layoutadminapp-body-admin"
				class="flex justify-center border-4 border-black bg-black p-10"
			>
				<slot name="admin" />
			</div>

			<!-- SLOT APP -->
			<slot name="app" id="layoutadminapp-body-app" />
		</div>
		<!--  -->
	</Framedrawer>
</div>
