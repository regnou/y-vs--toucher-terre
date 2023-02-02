<script lang="ts">
	import { DATAJSON__HEADERMENU__ADMIN } from '@app/data/MENUS/HEADER_MENU__ADMIN';
	import DrawerFrame from '../../shared/layout/DrawerFrame.svelte';
	import { Section } from '@smui/top-app-bar';
	import Fab, { Icon } from '@smui/fab';
	import HeaderMenus from '../../shared/HeaderMenus.svelte';
	import HeaderAdmin from '../../shared/layout/HeaderAdmin.svelte';
</script>

<div id="headerAdmin" class="">
	<!-- LEFT + CENTER -->
	<Section id="headerSectionLeftcenter-admin">
		<HeaderMenus isAdmin={true} menus={DATAJSON__HEADERMENU__ADMIN} />
	</Section>

	<!-- RIGHT -->
	<Section id="headerSectionRight-admin">
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
</div>
