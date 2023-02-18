<script lang="ts">
	import AxFrame from '../shared/frame/core/AxFrame.svelte';
	import HeaderCms from '../shared/frame/core/header/AxHeaderCms.svelte';
</script>

<!-- +#################################### -->
<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FRAME (CMS)  -->
<!-- ####################################### -->

<AxFrame isAdmin={true}>
	<!-- slot: HEADER -->
	<!-- ................... -->
	<slot slot="plugin--frame-header--1" name="header-0">
		<HeaderCms />
	</slot>

	<!-- slot: BODY -->
	<!-- ................... -->
	<!-- tip: max-w-6xl -- max width for full screen content -->
	<div slot="plugin--frame-body--1" class="max-w-6xl">
		<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->
		<slot name="cms" />
		<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->
		<slot name="app" />
	</div>
</AxFrame>
