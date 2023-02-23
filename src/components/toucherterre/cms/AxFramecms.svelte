<!-- ######################################################## -->
<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FRAME (CMS)  -->
<!-- ####################################### -->

<AxFrame isAdmin={true}>
	<!-- slot: DRAWER -->
	<!-- ................... -->
	<slot slot="plugin--frame-drawer--1">
		<AxDrawerCms
			bind:store
			{megaconfig}
		/>
	</slot>

	<!-- slot: HEADER -->
	<!-- ................... -->
	<slot
		slot="plugin--frame-header--1"
		name="header-0"
	>
		<HeaderCms
			bind:store
			{megaconfig}
		/>
	</slot>

	<!-- ................... -->
	<!-- slot: BODY -->
	<!-- ................... -->
	<!-- tip: max-w-6xl -- max width for full screen content -->
	<!-- max-w-6xl  -->
	<div
		slot="plugin--frame-body--1"
		class="justify-center  lg:flex"
	>
		<!-- y en a plus, c finis ! -->
		<!-- <slot name="cms" /> -->

		<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->
		<slot name="app" />
		<!-- 🟢🟢🟢🟢🟢🟢🟢🟢🟢 -->
	</div>
</AxFrame>

<script lang="ts">
	import AxFrame from '../shared/frame/core/AxFrame.svelte';
	import AxDrawerCms from '../shared/frame/core/drawer/AxDrawerCms.svelte';
	import HeaderCms from '../shared/frame/core/header/AxHeaderCms.svelte';
	export let megaconfig: I_megaconfig__cms<T_pageItemStore> | undefined = undefined;
	export let store: T_pageItemStore[] | undefined = undefined;
</script>
