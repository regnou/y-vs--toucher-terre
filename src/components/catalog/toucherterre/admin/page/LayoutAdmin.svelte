<script lang="ts">
	import DrawerFrame from '../../shared/layout/DrawerFrame.svelte';
	import HeaderAdmin from '../../shared/layout/HeaderAdmin.svelte';
</script>

<!--  -->
<DrawerFrame isAdmin={true}>
	<!--  -->
	<!-- HEADER -->
	<slot slot="header-1">
		<HeaderAdmin />
	</slot>

	<!-- BODY -->
	<div slot="content-1" id="content-1--pageAdmin" class="border-8 border-red-500">
		<!-- ADMIN -->
		<div class="flex justify-center border-4 border-black bg-black p-10">
			<slot name="admin" />
		</div>
		<!-- APP -->
		<slot name="app" />
	</div>
	<!--  -->
</DrawerFrame>
