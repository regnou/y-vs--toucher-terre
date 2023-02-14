<script lang="ts">
	import { onMount } from 'svelte';
	import { STORE__PAGEITEMS } from '@app/stores/store';
	import { AX__COLLECTION__EVENT } from '@app/domain/DATA/backend/db-schema/COLLECTIONS';
	import { config__get } from '@app/domain/services/configService';
	import { isEntityEvent } from '@app/utils/guards';
	import Loader from '../widgets/Loader.svelte';
	import Eventcard from '../widgets/Eventcard.svelte';
	// .............................................
	let promise = config__get<I_ENTITY__event>(AX__COLLECTION__EVENT);
	//--------------------------------------------------------------------
	onMount(async () => {
		$STORE__PAGEITEMS = await promise; // les types MATCH donc le bding devrait etre bon
		console.debug('🚔');
		console.dir($STORE__PAGEITEMS);
		console.debug('🚔\n');
	});
	//--------------------------------------------------------------------
</script>

{#await promise}
	<Loader />
{:then data}
	<main id="page-event-1">
		{#if $STORE__PAGEITEMS && $STORE__PAGEITEMS.length}
			{#if isEntityEvent($STORE__PAGEITEMS)}
				<div id="eventcardlist-1" class="grid grid-flow-col  grid-rows-2">
					{#each $STORE__PAGEITEMS as event, ii (ii)}
						<Eventcard bind:event />
					{/each}
				</div>
			{/if}
		{/if}
	</main>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<!-- title={$STORE__PAGEITEMS[i].inputValue}
				src={'/media/gallery/prochains-rdv/' +
					($STORE__PAGEITEMS[i].inputValue || 'placeholder.png')} -->
