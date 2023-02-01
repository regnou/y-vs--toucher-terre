<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Item1 from '../Item1.svelte';
	import { Section } from '@smui/top-app-bar';
	import DrawerAx from '../../shared/layout/2-drawer/DrawerAx.svelte';
	import HeaderApp from '../HeaderApp.svelte';
	import { DATAJSON__HEADERMENU__APP } from '@app/data/MENUS/HEADER_MENU__APP';
	import Fab, { Icon } from '@smui/fab';

	const DATAJSON__HEADER_APP__HEIGHT = 16;
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

<Item1 {imgBg}>
	<DrawerAx>
		<slot slot="headerRightMenus1" name="headerRightMenus0">
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

		<slot slot="headerApp1" name="headerApp0">
			<Section class="bg-black/20">
				<HeaderApp menus={DATAJSON__HEADERMENU__APP} />
			</Section>
		</slot>

		<slot slot="layout1" />
	</DrawerAx>
</Item1>
