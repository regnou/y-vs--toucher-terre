<!-- +################################### -->
<!-- HEADER-APP                              -->
<!-- ####################################### -->
<!-- LEFT + CENTER -->
<!-- tip: this part of the header is it is hidden, is MOBILE -->
<!-- .................. -->
<!-- tip responsive: header desapear becoz not enought space -->
<!-- border-2 to debug (bg can not work ?) -->
<!-- .................. -->
<!-- ######################################## -->
<!-- DIALOGn cf cms -->
<!-- ######################################## -->
<Section
	style="background:{AX_CONST__FRAME__isDebugBg ? 'greenyellow' : 'none'}"
	class="hidden justify-center   lg:flex"
>
	<!-- lg:grid  lg:grid-flow-col lg:justify-center   lg:gap-10 -->
	<!-- <List> -->
	{#each AX_CONST__FRAME_MENU__app as menu}
		<AxHeadermenuItem {menu} />
	{/each}
	<!-- </List> -->
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
	style="background:{AX_CONST__FRAME__isDebugBg ? 'green' : 'none'}"
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
		href={AX_CONST__FRAME_URL__homeCms}
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
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'wc -- ax header app', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/icon-button';
	import { Section } from '@smui/top-app-bar';
	import { AX_CONST__FRAME_MENU__app } from 'app/0-config/config-frame/AX_CONST__FRAME_MENU__app.json';
	import { AX_CONST__FRAME__isDebugBg } from 'app/0-config/config-frame/AX_CONST__FRAME__debug';
	import { AX_CONST__FRAME_URL__homeCms } from 'app/0-config/config-frame/AX_CONST__FRAME__urls';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
	import AxHeadermenuItem from '../shared-frame-widgets/AxHeaderMenuItem.svelte';
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
