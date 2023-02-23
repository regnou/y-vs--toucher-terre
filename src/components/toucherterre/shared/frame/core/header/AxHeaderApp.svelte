<!-- HEADER APP -->
<!-- ######################################################## -->
<!-- ######################################## -->

<!-- LEFT + CENTER -->
<!-- tip: this part of the header is it is hidden, is MOBILE -->
<!-- .................. -->
<!-- tip responsive: header desapear becoz not enought space -->
<!-- .................. -->
<Section
	style="background:{AX_CONST__FRAME_isDebugBg ? 'purple' : 'none'}"
	class="hidden   lg:flex  lg:justify-center "
>
	<List>
		{#each AX_CONST__FRAME_MENU_app as menu}
			<AxHeadermenuItem {menu} />
		{/each}
	</List>

	<!-- <Menu static> -->
	<!-- <List class="grid grid-flow-col">
		<Item href="www.google.com">
			<Text>Cut</Text>
		</Item>
		<Item>
			<Text>Copy</Text>
		</Item>
		<Item>
			<Text>Paste</Text>
		</Item>
		<Separator />
		<Item>
			<Text>Delete</Text>
		</Item>
	</List> -->
	<!-- </Menu> -->
</Section>

<!-- RIGHT -->
<Section
	style="background:{AX_CONST__FRAME_isDebugBg ? 'green' : 'none'}"
	align="end"
>
	<!-- <a href="/cms" rel="prefetch"> -->
	<!-- <Fab mini> -->
	<!-- <img src="media/ax/3.jpg" alt="" /> -->
	<!-- <Icon class="material-icons">login</Icon> -->
	<!-- </Fab> -->
	<!-- on:click={() => (action = 'Dismissed')} -->
	<!-- <AxSearchBar /> -->

	<!-- on:click={doSearch} -->

	<!-- disabled={value === ''} -->
	<Fab
		href="/cms"
		color="primary"
		mini
		class="mr-2"
	>
		<!-- arrow_forward -->
		<Icon class="material-icons">person</Icon>
	</Fab>

	<!-- <IconButton
		href="/cms"
		class="material-icons"
		title="Dismiss">login</IconButton
	> -->
	<!-- </a> -->
</Section>

<script lang="ts">
	import { AX_CONST__FRAME_isDebugBg } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import { AX_CONST__FRAME_MENU_app } from '@app/domain/DATACONST/config-uiFrame/menus/AX_CONST__FRAME_MENU_app.json';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/icon-button';
	import List from '@smui/list';
	import { Section } from '@smui/top-app-bar';
	import AxHeadermenuItem from './menuItem/AxHeadermenuItem.svelte';

	// SEARCH (off)
	// let value = '';
	// function doSearch() {
	// 	alert('Search for ' + value);
	// }
	// function handleKeyDown(event: CustomEvent | KeyboardEvent) {
	// 	event = event as KeyboardEvent;
	// 	if (event.key === 'Enter') {
	// 		doSearch();
	// 	}
	// }
</script>
