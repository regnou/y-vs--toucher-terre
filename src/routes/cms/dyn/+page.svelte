<!-- ####################################################### -->
<!-- route: CMS-SITE-home -->
<!-- ####################################################### -->

<AxTable
	menus={AX_CONST__FRAME_MENU__cms}
	sortId="id"
/>

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'HOME-APP ');
	});
	import { page } from '$app/stores';
	import AxTable from 'app/components/toucherterre/cms-frame/widgets/AxTable.svelte';
	import { AX_CONST__FRAME_MENU__cms } from 'app/0-config/config-frame/AX_CONST__FRAME_MENU__cms.json';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
