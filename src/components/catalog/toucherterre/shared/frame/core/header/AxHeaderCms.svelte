<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import Fab, { Icon } from '@smui/fab';
	import { AX__CONST__homeUrl } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__homeUrl';
	import { STORE_UI__DRAWER_IS_OPEN } from '@app/stores/storeUiItems';
	import { goto } from '$app/navigation';
	import IconButton from '@smui/icon-button';

	// const handleClick = async () => {
	// 	console.log('CLICKED RETOUR VERS app');
	// 	await goto(AX__CONST__homeUrl);
	// 	// $STORE_UI__DRAWER_IS_OPEN = false;
	// };
</script>

<!-- HEADER CMS -->
<!-- ######################################################## -->

<!-- on:click={async () => {
	await handleClick();
}} -->
<Section>
	<!-- <a href={AX__CONST__homeUrl} rel="prefetch"> -->
	<!-- <Fab mini> -->
	<!-- <img src="media/ax/3.jpg" alt="" /> -->
	<!-- <Icon class="material-icons">login</Icon> -->
	<!-- </Fab> -->
	<!-- </a>  -->
	<IconButton href={AX__CONST__homeUrl} class="material-icons" title="Dismiss">login</IconButton>
</Section>
<!-- mdc-top-app-bar__ -->
