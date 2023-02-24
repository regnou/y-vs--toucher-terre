<!-- ####################################### -->
<!-- ######################################################## -->
<!-- ####################################################### -->
<!-- FRAME (CMS)  -->
<!-- ####################################################### -->
<AxFrame isAdmin={true}>
	<!-- tip: max-w-6xl -- max width for full screen content -->
	<!-- max-w-6xl  -->
	<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->
	<div
		slot="plugin--frame-body__1"
		style="background: #C16B38"
	>
		<!-- <AxFrameapp> -->
		<slot name="app" />
		<!-- </AxFrameapp> -->
	</div>
	<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->

	<slot slot="plugin--frame-drawer__1">
		<AxDrawerCms
			bind:dataArrDumb
			{megaconfig}
		/>
	</slot>

	<slot
		slot="plugin--frame-header__1"
		name="header-0"
	>
		<HeaderCms
			bind:dataArrDumb
			{megaconfig}
		/>
	</slot>
</AxFrame>

<!-- ####################################################### -->
<script lang="ts">
	import AxFrameapp from '../app/AxFrameapp.svelte';
	import AxFrame from '../shared/frame/core/AxFrame.svelte';
	import AxDrawerCms from '../shared/frame/core/drawer/AxDrawerCms.svelte';
	import HeaderCms from '../shared/frame/core/header/AxHeaderCms.svelte';
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	// tip: this prop exists becoz it give us the ability to bind the APP-component (that will load the data), and the admin CMS that will modify them
	export let dataArrDumb: T_pageItemStore[] | undefined = undefined;
</script>
