<!-- HEADER APP -->
<!-- ######################################################## -->

<!-- LEFT + CENTER -->
<!-- tip: this part of the header is it is hidden, is MOBILE -->
<!-- .................. -->
<!-- tip responsive: header desapear becoz not enought space -->
<!-- .................. -->
<Section
	align="start"
	class=" hidden lg:flex "
>
	<List>
		{#each AX__HEADERMENU_APP as menu}
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
<Section align="end">
	<!-- <a href="/cms" rel="prefetch"> -->
	<!-- <Fab mini> -->
	<!-- <img src="media/ax/3.jpg" alt="" /> -->
	<!-- <Icon class="material-icons">login</Icon> -->
	<!-- </Fab> -->
	<!-- on:click={() => (action = 'Dismissed')} -->
	<!-- <AxSearchBar /> -->

	<!-- on:click={doSearch} -->
	<Fab
		href="/cms"
		disabled={value === ''}
		color="primary"
		mini
		class="solo-fab"
	>
		<!-- arrow_forward -->
		<Icon class="material-icons">login</Icon>
	</Fab>

	<!-- <IconButton
		href="/cms"
		class="material-icons"
		title="Dismiss">login</IconButton
	> -->
	<!-- </a> -->
</Section>

<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import AxHeadermenuItem from './menuItem/AxHeadermenuItem.svelte';
	import IconButton, { Icon } from '@smui/icon-button';
	import List, { Item, Separator, Text } from '@smui/list';
	import Menu from '@smui/menu';
	import AxSearchBar from '@app/components/catalog/toucherterre/app/widgets/AxSearchBar.svelte';
	import Fab from '@smui/fab';

	// SEARCH

	let value = '';

	function doSearch() {
		alert('Search for ' + value);
	}

	function handleKeyDown(event: CustomEvent | KeyboardEvent) {
		event = event as KeyboardEvent;
		if (event.key === 'Enter') {
			doSearch();
		}
	}
</script>
