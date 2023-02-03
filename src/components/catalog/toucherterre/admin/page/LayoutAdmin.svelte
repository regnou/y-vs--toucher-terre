<script lang="ts">
	import Framedrawer from '../../shared/layout/Framedrawer.svelte';
	import HeaderAdmin from '../../shared/layout/HeaderAdmin.svelte';
</script>

<!--  -->
<Framedrawer isAdmin={true}>
	<!--  -->
	<!-- HEADER -->
	<slot slot="header-1">
		<HeaderAdmin />
	</slot>

	<!-- BODY -->
	<div slot="content-1" id="layoutadmin" class="border-8 border-red-500">
		<!-- ADMIN -->
		<div class="flex justify-center border-4 border-black bg-black p-10">
			<slot name="admin" />
		</div>
		<!-- APP -->
		<slot name="app" />
	</div>
	<!--  -->
</Framedrawer>
