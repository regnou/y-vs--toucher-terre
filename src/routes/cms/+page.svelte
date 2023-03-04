<!-- ####################################################### -->
<!-- route: HOME-->
<!-- ####################################################### -->
<AxFramecms>
	<div slot="cms">
		<div class="">
			Tableau de bord
			<br />
			WELCOME TO THE DASHBOARD !
			<br />
			NB: rien a afficher pour l instant dans cet onglet.
		</div>
	</div>
</AxFramecms>

<script lang="ts">
	onMount(() => {
		axlog($AX_STORE__CONTENT, $page.url.pathname, 'HOME ');
	});
	import { page } from '$app/stores';
	import AxFramecms from 'app/components/toucherterre/cms-frame/AxFrameCms.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onMount } from 'svelte';
</script>
