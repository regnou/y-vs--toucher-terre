<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import Fab, { Icon } from '@smui/fab';
	import HeadermenuItem from './menuItem/AxHeadermenuItem.svelte';
</script>

<!-- HEADER APP -->
<!-- ######################################################## -->

<!-- LEFT + CENTER -->
<Section class="hidden  md:inline-flex ">
	{#each AX__HEADERMENU_APP as menu}
		<HeadermenuItem {menu} />
	{/each}
</Section>

<!-- RIGHT -->
<Section align="end">
	<a href="/cms" rel="prefetch">
		<Fab mini>
			<!-- <img src="media/ax/3.jpg" alt="" /> -->
			<Icon class="material-icons">login</Icon>
		</Fab>
	</a>
</Section>
