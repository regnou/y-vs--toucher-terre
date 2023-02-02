<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import { DATAJSON__HEADERMENU__APP } from '@app/data/MENUS/HEADER_MENU__APP';
	import Fab, { Icon } from '@smui/fab';
	import HeaderMenus from '../../shared/HeaderMenus.svelte';
</script>

<!--  -->
<div class="" id="headerApp">
	<!-- LEFT + CENTER -->
	<Section id="headerSectionLeftcenter-app" class="hidden  sm:inline-flex ">
		<HeaderMenus isAdmin={false} menus={DATAJSON__HEADERMENU__APP} />
	</Section>
	<!-- RIGHT -->
	<Section id="headerSectionRight-app">
		<div class="flexy">
			<div class="margins">
				<a href="/admin-acceuil">
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
