<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import { DATAJSON__HEADERMENU__APP } from '@app/DATA/MENUS/DATAJSON__HeaderMenuApp.json';
	import Fab, { Icon } from '@smui/fab';
	import HeaderMenus from '../Headermenus.svelte';
</script>

<!--  -->
<div class="" id="headerapp--1">
	<!-- LEFT + CENTER -->
	<Section id="headerapp-leftcenter--1" class="hidden  sm:inline-flex ">
		<HeaderMenus isAdmin={false} menus={DATAJSON__HEADERMENU__APP} />
	</Section>
	<!-- RIGHT -->
	<Section id="headeradmin-right--1">
		<div class="flexy">
			<div class="margins">
				<a href="/admin/pages" rel="prefetch">
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
