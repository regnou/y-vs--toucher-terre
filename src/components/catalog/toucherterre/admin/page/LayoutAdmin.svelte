<script lang="ts">
	import { DATAJSON__HEADERMENU__ADMIN } from '@app/data/MENUS/HEADER_MENU__ADMIN';
	import DrawerAx from '../../shared/layout/DrawerAx.svelte';
	import { Section } from '@smui/top-app-bar';
	import Fab, { Icon } from '@smui/fab';
	import HeaderMenus from '../../shared/subcomponent/HeaderMenus.svelte';
</script>

<DrawerAx isAdmin={true}>
	<!--  -->
	<!-- HEADER -->
	<!--  -->
	<!-- <slot slot="headerMenusLeft-1" name="headerMenusLeft0"></slot> -->
	<slot slot="headerMenusCenter-1">
		<Section>
			<HeaderMenus isAdmin={true} menus={DATAJSON__HEADERMENU__ADMIN} />
		</Section>
	</slot>
	<slot slot="headerMenusRight-1" name="headerMenusRight-0">
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

	<!--  -->
	<!-- BODY -->
	<!--  -->
	<div slot="layoutMainContent-1" id="layoutMainContent-1--pageAdmin" class="bg-white text-black">
		<slot name="app" />
		<slot name="admin" />
	</div>
</DrawerAx>
