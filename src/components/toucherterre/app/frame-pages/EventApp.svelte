<!-- +################################### -->
<!-- ####################################### -->
<!-- comp-site: EVENT APP                    -->
<!-- ####################################### -->
{#await promise}
	<Loader />
{:then data}
	<!-- .................. -->
	<!-- MAX WIDTH for APP -->
	<!-- .................. -->
	<main
		id="wc-app--site-event--1"
		class="m-auto max-w-{AX_CONST__FRAME_maxBodyApp} {AX_CONST__FRAME_distanceFromHeader}"
	>
		{#if dataArrDumb && dataArrDumb.length}
			<LayoutGrid>
				{#each dataArrDumb as event, ii (ii)}
					<Cell spanDevices={{ desktop: 2, tablet: 4, phone: 4 }}>
						<!-- <div class="demo-cell"> -->
						<Eventcard bind:event />
						<!-- </div> -->
					</Cell>
				{/each}
			</LayoutGrid>
			<!-- {:else}
			{openSnack('error', `❌ [ page-data ] UNDEFINED or NO-DATA ❌`)} -->
		{/if}
	</main>
{:catch error}
	<p style="">{error.message}</p>
{/await}

<script lang="ts">
	import Eventcard from '../widgets/Eventcard.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import { config__get } from '@app/domain/services/configService';
	import { onMount } from 'svelte';
	import { AX_COLLECTION__event } from '@app/domain/DATACONST/config-db/schema/AX_CONST__SCHEMA_collections';
	import Loader from '../widgets/Loader.svelte';
	import {
		AX_CONST__FRAME_distanceFromHeader,
		AX_CONST__FRAME_maxBodyApp
	} from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_ui';
	// --------------------------------------------------------
	export let dataArrDumb: I_ENTITY__event[] | undefined = undefined;
	let promise = config__get<I_ENTITY__event>(AX_COLLECTION__event);
	// --------------------------------------------------------
	onMount(async () => {
		console.debug('...');
		dataArrDumb = await promise;
	});
</script>
