<script lang="ts">
	import ContainerItem1 from '../../front/ContainerItem1.svelte';
	import HeaderAdmin from '../HeaderAdmin.svelte';
	import { ADMIN_HEADER_MENU } from '../../../../../data/MENUS/HEADER_MENU__ADMIN';
	// https://stackoverflow.com/questions/71789793/how-to-handle-reset-layout
	// https://stackoverflow.com/questions/72217145/layout-reset-has-been-removed-in-favour-of-named-layouts
	// need to change +layout.svelte to _layout.svelte
	// Have been depreciated, cf :
	// https://stackoverflow.com/questions/70269348/how-can-i-ignore-default-layout-in-svelte-kit
	// => replaced by Advanced routes :
	//     Do NOT change this layout, change the root declinaison inside '(app)' or create your own instead
	// https://kit.svelte.dev/docs/advanced-routing#advanced-layouts
	// import '@app/app.postcss';

	let isAdmin = true;
	const HEADER_H = 16;
</script>

<div id="wa--page-admin" class="bg-white text-black">
	<!-- ContainerItem1  -->
	<HeaderAdmin h={HEADER_H} menus={ADMIN_HEADER_MENU} />

	<div class="grid grid-flow-col content-start   ">
		<ContainerItem1 hh={'space.' + HEADER_H}>
			<slot name="app" />
		</ContainerItem1>

		<!-- <div class:isAdmin>
		<slot name="app" />
	</div> -->
		<ContainerItem1 hh={'space.' + HEADER_H}>
			<!-- <div class:isAdmin class="bloc-admin hidden"> -->
			<slot name="admin">
				<div class="">bloc d admin</div>
			</slot>
			<!-- </div> -->
		</ContainerItem1>
	</div>
</div>

<style>
	/* .isAdmin {
		width: 1024px;
	} */

	.bloc-admin.isAdmin {
		@apply w-96 block h-full border-purple-500 border;
	}
</style>
