<script lang="ts">
	import AxFrame from '../shared/frame/core/AxFrameDrawer.svelte';
	import HeaderCms from '../shared/frame/core/header/HeaderCms.svelte';
</script>

<!-- ############################################### -->
<!-- ############################################### -->
<!-- ROOT-LAYOUT -- CMS-APP -->
<!-- ############################################### -->
<!-- ############################################### -->
<!-- ############################################## -->
<!-- LE LAYOUT DEFINIS UNE PART DU CHASSIS -- CMS (le chassis est dans le layout) -->
<!-- ############################################## -->
<AxFrame isAdmin={true}>
	<!-- ------------------------------------------ -->
	<!-- SLOT: NON-PREDEFINIS :: 🟨 SLOT: HEADER_B 🟨 -->
	<!-- ------------------------------------------ -->
	<!-- ⬛ -->
	<slot slot="plugin--frame-header-1">
		<HeaderCms />
	</slot>

	<!-- ------------------------------------------ -->
	<!-- 🟨 SLOT: BODY -- LE LAYOUT PASSE 2 PARAM POUR LE BODY DU CHASSIS-->
	<!-- ------------------------------------------ -->
	<!-- TIP: le flex ci dessous, permet de mettre l admin a cote ou au dessus du viewer -->
	<div slot="plugin--frame-body-1" class="max-w-6xl">
		<!-- ......... -->
		<!-- SLOT: CMS -->
		<!-- ......... -->
		<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->
		<slot name="cms" />

		<!-- ......... -->
		<!-- SLOT: APP -->
		<!-- ......... -->
		<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->
		<slot name="app" />
	</div>
</AxFrame>
