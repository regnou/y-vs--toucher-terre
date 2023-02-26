<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL EDIT -->
<!-- ####################################### -->
<!-- x1 ACCORDION-PANEL -->
{#if item}
	<Panel
		square
		variant="outlined"
		extend
		bind:open
	>
		<Header class="bg-white">
			<!-- <span slot="description"> -->
			<!-- base guard -->
			<div
				style="max-width:250px"
				class=" "
			>
				{#if item}
					{#if isEntityPost(item)}
						{item.titlePost.value}
					{:else if isEntityEvent(item)}
						{item.titleEvent.value}
					{/if}
				{/if}
			</div>
			<!-- </span> -->
			<div
				slot="icon"
				class=""
			>
				<!-- <IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton> -->
				<!-- {#if type === 'blog' || type === 'slideshow'} -->
				<!-- preventDefault -->
				<IconButton on:click={del}>
					<Icon class="material-icons">delete</Icon>
				</IconButton>
				<!-- {/if} -->
			</div>
		</Header>
		<Content class="space-y-5 bg-blue-800">
			{#each Object.entries(item) as [key, prop], pos}
				<AxInputValue
					{pos}
					bind:ivItm={item[key]}
				/>
			{/each}
		</Content>
	</Panel>
{/if}

<script lang="ts">
	export let _DAB_: T_GLOBALS[] | undefined = undefined;
	export let item: T_GLOBAL_ENTITIES | undefined = undefined;
	export let pos: number | undefined = undefined;
	let open = false; // remettre ? export let open = type === 'staticpage' ? true : false;
	import { page } from '$app/stores';
	import { Content, Header, Panel } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import { axlog } from 'app/utils/axLog';
	import { isEntity, isEntityEvent, isEntityPost } from 'app/utils/guards';
	import { onMount } from 'svelte';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'wc -- ax panel edit');
	});
	$: console.log('>>>>>>>>>>>>>> open: ', open);
	// DEL
	// <!-- ######################################################### -->
	const del = () => {
		// <!-- ######################################################### -->

		console.debug('🌎🏎️✅ click >> on:del 1 🟡', _DAB_, pos);
		// XXX
		if (!_DAB_ || !Array.isArray(_DAB_) || pos === undefined) return;

		if (confirm("Supprimer l'article ?")) {
			// guard
			if (isEntity(_DAB_[pos])) {
				// open = false; // tip: HACK - becoz, the click on the fab will also click on the panel->it will open the panel, and if closed, wil open another panel
				_DAB_.splice(pos, 1);
				// refresh (can do diferently - TODO - juste genericStore)
				_DAB_ = _DAB_; // refresh ui
			}
		}
		console.debug('🌎🏎️✅ click << on:del 2 🟨');
	};
</script>
