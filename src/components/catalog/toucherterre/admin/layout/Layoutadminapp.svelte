<script lang="ts">
	import Framedrawer from '../../shared/layout/Framedrawer.svelte';
	import HeaderAdmin from '../../shared/layout/HeaderAdmin.svelte';
</script>

<div id="layoutadminapp--1">
	<Framedrawer isAdmin={true}>
		<!-- SLOT: HEADER -->
		<slot slot="header-1">
			<HeaderAdmin />
		</slot>

		<!-- SLOT: BODY -->
		<!-- TIP: le flex ci dessous, permet de mettre l admin a cote ou au dessus du viewer -->
		<div slot="content-1" id="layoutadminapp-body--1" class=" max-w-6xl  ">
			<!-- SLOT: ADMIN -->
			<div id="vieweradmin--1" class=" border-4 border-blue-500 ">
				<slot name="admin" />
			</div>

			<!-- SLOT: APP -->
			<slot name="app" id="viewerapp--1" />
		</div>
		<!--  -->
	</Framedrawer>
</div>
