<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import HeadermenuItem from './menuItem/AxHeadermenuItem.svelte';
	import IconButton from '@smui/icon-button';
</script>

<!-- HEADER APP -->
<!-- ######################################################## -->

<!-- LEFT + CENTER -->
<Section class="hidden  md:inline-flex ">
	<!-- <List> -->
	{#each AX__HEADERMENU_APP as menu}
		<HeadermenuItem {menu} />
	{/each}
	<!-- </List> -->
</Section>

<!-- RIGHT -->
<Section align="end">
	<!-- <a href="/cms" rel="prefetch"> -->
	<!-- <Fab mini> -->
	<!-- <img src="media/ax/3.jpg" alt="" /> -->
	<!-- <Icon class="material-icons">login</Icon> -->
	<!-- </Fab> -->
	<!-- on:click={() => (action = 'Dismissed')} -->
	<IconButton href="/cms" class="material-icons" title="Dismiss">login</IconButton>
	<!-- </a> -->
</Section>
