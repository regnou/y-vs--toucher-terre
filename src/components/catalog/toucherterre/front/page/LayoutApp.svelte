<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import LayoutBg1 from '../LayoutBg1.svelte';
	import { Section } from '@smui/top-app-bar';
	import DrawerAx from '../../shared/layout/DrawerAx.svelte';
	import { DATAJSON__HEADERMENU__APP } from '@app/data/MENUS/HEADER_MENU__APP';
	import Fab, { Icon } from '@smui/fab';
	import { onMount } from 'svelte';
	import HeaderMenus from '../../shared/subcomponent/HeaderMenus.svelte';

	// ');
	onMount(() => {
		const style = getComputedStyle(document.body);
		console.log('>>> THEME: ' + style.getPropertyValue('--mdc-theme-primary'));

		// --mdc-theme-primary: #f6c0c0;
		// --mdc-theme-secondary: #676778;
		// --mdc-theme-background: #fff;
		// --mdc-theme-surface: #fff;
		// --mdc-theme-error: #b71c1c;
		// --mdc-theme-on-primary: #fff;
		// --mdc-theme-on-secondary: #fff;
		// --mdc-theme-on-surface: #000;
		// --mdc-theme-on-error: #fff;
		// --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
		// --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
		// --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
		// --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
		// --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
		// --mdc-theme-text-primary-on-dark: white;
		// --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);
		// --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
		// --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);
		// --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);
	});
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

<LayoutBg1 {imgBg}>
	<!--  -->
	<DrawerAx>
		<!--  -->
		<!-- HEADER -->
		<!--  -->
		<slot slot="headerMenusCenter-1" name="headerMenusCenter0">
			<Section class="hidden  sm:inline-flex ">
				<HeaderMenus menus={DATAJSON__HEADERMENU__APP} />
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
		<!--  -->
		<!--  -->

		<!--  -->
		<!-- BODY -->
		<!--  -->

		<slot slot="layoutMainContent-1">
			<!-- hh={'space.' + DATAJSON__HEADER_APP__HEIGHT} -->
			<!-- <LayoutCenter1> -->
			<!--  -->
			<!-- MAIN CONTENT received from PAGE -->
			<!--  -->
			<slot />
			<!-- </LayoutCenter1> -->
		</slot>
	</DrawerAx>
</LayoutBg1>
