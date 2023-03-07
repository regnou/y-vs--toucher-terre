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
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'HOME ');
	});
	import { page } from '$app/stores';
	import AxFramecms from 'app/components/toucherterre/cms-frame/Ax1FrameCms.svelte';
	import { axlog } from 'app/lib/utils/axLog';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';

	import { onMount } from 'svelte';
</script>
