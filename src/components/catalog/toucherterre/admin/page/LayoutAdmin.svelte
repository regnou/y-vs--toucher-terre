<script lang="js">
	import ContainerItem1 from '../../front/ContainerItem1.svelte';
	let isAdmin = true;

	import { DATAJSON__HEADERMENU__ADMIN } from '@app/data/MENUS/HEADER_MENU__ADMIN';
	import DrawerAx from '../../shared/layout/2-drawer/DrawerAx.svelte';
	import { Section } from '@smui/top-app-bar';
	import HeaderAdmin from '../HeaderAdmin.svelte';
	import Fab, { Icon } from '@smui/fab';
	import { DATAJSON__HEADER_APP__HEIGHT } from '@app/data/DATAJSON_HEADER_APP';

	let active = 'acceuil';
	let menus = [];

	// onMount(() => {
	// });
</script>

<DrawerAx>
	<slot slot="headerRightMenus1" name="headerRightMenus0">
		<Section>
			<div class="flexy">
				<div class="margins">
					<a href="/acceuil">
						<Fab mini>
							<!-- <img src="media/ax/3.jpg" alt="" /> -->
							<Icon class="material-icons">login</Icon>
						</Fab>
					</a>
				</div>
			</div>

			<!-- <IconButton
				style="color:var(--wa-color-1)"
				class="material-icons"
				on:click={() => (open = !open)}
				>menu
			</IconButton> -->
		</Section>
	</slot>

	<div slot="layout1" id="wa--page-admin" class="bg-white text-black">
		<!-- body -->
		<div class="grid grid-flow-col content-start">
			<!-- hh={'space.' + DATAJSON__HEADER_APP__HEIGHT} -->
			<ContainerItem1>
				<slot name="app" />
			</ContainerItem1>
			<!-- hh={'space.' + DATAJSON__HEADER_APP__HEIGHT} -->
			<ContainerItem1>
				<slot name="admin">
					<div class="">bloc d admin</div>
				</slot>
			</ContainerItem1>
		</div>
	</div>

	<slot slot="headerAdmin1">
		<Section>
			<!-- -- -->
			<!-- -- -->
			<!-- header -->
			<!-- h={DATAJSON__HEADER_APP__HEIGHT} -->
			<HeaderAdmin menus={DATAJSON__HEADERMENU__ADMIN} />
			<!-- -- -->
			<!-- -- -->
		</Section>
	</slot>
</DrawerAx>

<style>
	.bloc-admin.isAdmin {
		@apply block h-full w-96 border border-purple-500;
	}
</style>
