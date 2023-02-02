<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import LayoutBg1 from '../LayoutBg1.svelte';
	import { Section } from '@smui/top-app-bar';
	import DrawerAx from '../../shared/layout/DrawerAx.svelte';
	import { DATAJSON__HEADERMENU__APP } from '@app/data/MENUS/HEADER_MENU__APP';
	import Fab, { Icon } from '@smui/fab';
	import HeaderMenus from '../../shared/subcomponent/HeaderMenus.svelte';

	let imgBg = 'N/A';
	const GALLERY: any = {
		'/acceuil': { url: '/media/bg/bg-1.jpg' },
		'/la-demarche': { url: '/media/bg/bg-2.jpg' },
		'/creation-realisation': { url: '/media/bg/bg-3.jpg' },
		'/prochains-rendez-vous': { url: '/media/bg/bg-1.jpg' },
		'/newsletter': { url: '/media/bg/bg-1.jpg' }
	};

	$: {
		const menu: string = $page.url.pathname.replace(base, '');
		const menuUrl = GALLERY[menu] ? GALLERY[menu].url : base;
		imgBg = menuUrl;
	}

	let prominent = false;
	let dense = false;
	let secondaryColor = false;
</script>

<LayoutBg1 {imgBg}>
	<!--  -->
	<DrawerAx isAdmin={false}>
		<!--  -->
		<!-- HEADER -->
		<!--  -->
		<!-- <slot slot="headerMenusLeft-1" name="headerMenusLeft0"> -->
		<slot slot="headerMenusCenter-1" name="headerMenusCenter0">
			<Section class="hidden  sm:inline-flex ">
				<HeaderMenus isAdmin={false} menus={DATAJSON__HEADERMENU__APP} />
			</Section>
		</slot>
		<slot slot="headerMenusRight-1" name="headerMenusRight0">
			<Section>
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
		</slot>

		<!--  -->
		<!-- BODY -->
		<!--  -->
		<slot slot="layoutMainContent-1">
			<slot />
		</slot>
	</DrawerAx>
	<!--  -->
</LayoutBg1>
