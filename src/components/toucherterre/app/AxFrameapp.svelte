<!-- +################################### -->
<!-- ####################################### -->
<!-- FRAME (APP) = la configuration specialisee du FRAME GENERIQUE-->
<!-- ####################################### -->
<LayoutBg1 isAdmin={false}>
	<AxFrame isAdmin={false}>
		<!-- slot: DRAWER -->
		<slot
			slot="plugin--frame-drawer--1"
			name="drawer-0"
		>
			<AxDrawerApp />
		</slot>

		<!-- slot: HEADER -->
		<!-- tip: header-0 is necesary or it will put content in both slots -->
		<slot
			slot="plugin--frame-header--1"
			name="header-0"
		>
			<HeaderApp />
		</slot>

		<!-- slot: BODY -->

		<slot slot="plugin--frame-body--1">
			<slot />
		</slot>
	</AxFrame>
</LayoutBg1>

<script lang="ts">
	import AxFrame from '../shared/frame/core/AxFrame.svelte';
	import AxDrawerApp from '../shared/frame/core/drawer/AxDrawerApp.svelte';
	import HeaderApp from '../shared/frame/core/header/AxHeaderApp.svelte';
	import LayoutBg1 from './AxLayoutbg1.svelte';
</script>
