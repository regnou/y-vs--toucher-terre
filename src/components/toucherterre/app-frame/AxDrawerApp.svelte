<!-- +################################### -->
<!-- DRAWER APP                              -->
<!-- ####################################### -->
<Content class="bg-orange-200">
	<!-- ................. -->
	<Subheader>Mon compte</Subheader>
	<Separator />
	<AxDrawermenuItem menu={{ title: 'CMS', url: AX_CONST__FRAME_URL__homeCms, img: AX_CONST__FRAME__favicon }} />
	<!-- <Separator /> -->
	<Subheader>Menu</Subheader>
	<Separator />
	<List>
		{#each AX_CONST__FRAME_MENU__app as menu}
			<!-- isDark={false} -->
			<AxDrawerMenuItem {menu} />
		{/each}
	</List>
	<Separator />
</Content>

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'wc -- ax drawer app', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import { Content } from '@smui/drawer';
	import List, { Subheader } from '@smui/list';
	import Separator from '@smui/list/src/Separator.svelte';
	import { AX_CONST__FRAME__favicon } from 'app/0-config/config-frame/AX_CONST__FRAME';
	import { AX_CONST__FRAME_MENU__app } from 'app/0-config/config-frame/AX_CONST__FRAME_MENU__app.json';
	import { AX_CONST__FRAME_URL__homeCms } from 'app/0-config/config-frame/AX_CONST__FRAME__urls';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
	import { default as AxDrawerMenuItem, default as AxDrawermenuItem } from '../shared-frame-widgets/AxDrawerMenuitem.svelte';
</script>
