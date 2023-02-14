<script lang="ts">
	import { onMount } from 'svelte';
	import { STORE__EVENT } from '@app/stores/store';
	import { AX__COLLECTION__EVENT } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { isEntityEvent } from '@app/utils/guards';
	import Loader from '../widgets/Loader.svelte';
	import Eventcard from '../widgets/Eventcard.svelte';
	import { axlog } from '@app/utils/axLog';
	import { page } from '$app/stores';

	// ----------------------------------------------------------
	// .............................................
	let promise = config__get<I_ENTITY__event>(AX__COLLECTION__EVENT);
	//--------------------------------------------------------------------
	onMount(async () => {
		$STORE__EVENT = await promise; // les types MATCH donc le bding devrait etre bon
		axlog($STORE__EVENT, $page.url.pathname, 'EVENT');
	});
</script>

{#await promise}
	<Loader />
{:then data}
	<main id="page-event-1">
		{#if $STORE__EVENT && $STORE__EVENT.length}
			{#if isEntityEvent($STORE__EVENT)}
				<div id="eventcardlist-1" class="grid grid-flow-col  grid-rows-2">
					{#each $STORE__EVENT as event, ii (ii)}
						<Eventcard bind:event />
					{/each}
				</div>
			{/if}
		{/if}
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!-- title={$STORE__EVENT[i].inputValue}
				src={'/media/gallery/prochains-rdv/' +
					($STORE__EVENT[i].inputValue || 'placeholder.png')} -->
