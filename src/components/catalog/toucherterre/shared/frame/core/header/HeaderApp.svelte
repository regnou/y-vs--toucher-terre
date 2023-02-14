<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import { AX__HEADERMENU_APP } from '@app/domain/DATA/clientend/ui-frame/menus/AX__HEADERMENU_APP.json';
	import Fab, { Icon } from '@smui/fab';
	import HeadermenuItem from './menuItem/HeadermenuItem.svelte';
	import IconButton from '@smui/icon-button';
</script>

<!-- #######################################################  -->
<!-- HEADER APP -->
<!-- ####################################################### -->
<!-- LEFT + CENTER -->
<Section class="hidden  sm:inline-flex ">
	{#each AX__HEADERMENU_APP as menu}
		<HeadermenuItem {menu} />
	{/each}
</Section>

<!-- RIGHT -->
<!-- <Section align="end"> -->
<Section>
	<a href="/cms/site" rel="prefetch">
		<Fab mini>
			<!-- <img src="media/ax/3.jpg" alt="" /> -->
			<Icon class="material-icons">login</Icon>
		</Fab>
	</a>
</Section>
