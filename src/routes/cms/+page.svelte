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

<script>
	import AxFramecms from 'app/components/toucherterre/cms/AxFrameCms.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { axlog } from 'app/utils/axLog';
	onMount(() => {
		axlog('🍃', $page.url.pathname, 'HOME ');
	});
</script>
