<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import Fab, { Icon } from '@smui/fab';
	import HeaderMenus from '../Headermenus.svelte';
</script>

<div id="headeradmin--1" class="">
	<!-- LEFT + CENTER -->
	<Section id="headeradmin-leftcenter--1">
		<HeaderMenus menus={[]} isAdmin={true} />
	</Section>

	<!-- RIGHT -->
	<Section id="headeradmin-right--1">
		<div class="flexy">
			<div class="margins">
				<a href="/acceuil" rel="prefetch">
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
