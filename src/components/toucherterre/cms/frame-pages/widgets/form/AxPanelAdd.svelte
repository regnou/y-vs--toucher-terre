<!-- ####################################################### -->
<!-- ####################################### -->
<!-- PANEL ADD -->
<!-- ####################################### -->
{#if _M_ && _M_.conf__genericAdd}
	<Panel
		class="bg-green-600"
		square
		variant="outlined"
		extend
		bind:open
	>
		<!--  -->
		<Header>
			<span>AJOUTER</span>
			<div slot="icon">
				<!-- <IconButton toggle pressed={(open = !open)}>
					<Icon class="material-icons" on>unfold_less</Icon>
					<Icon class="material-icons">unfold_more</Icon>
				</IconButton> -->
				<IconButton>
					<Icon class="material-icons">add</Icon>
				</IconButton>
			</div>
		</Header>
		<!--  -->
		<Content class="space-y-5  bg-green-800 text-center">
			{#each _M_.conf__genericAdd as ivItm, pos}
				<AxInputValue
					bind:ivItm
					{pos}
				/>
			{/each}
			<!-- <div > -->
			<!-- class="grid grid-flow-col place-items-center gap-2 p-10" -->
			<!-- <AxBtnCancel text="cancel" /> -->
			<Button
				variant="raised"
				on:click={add}
			>
				<Label>ajouter</Label>
			</Button>
			<!-- <AxBtnOk
				text="ajouter"
				on:click={add}
			/> -->
			<!-- </div> -->
		</Content>
	</Panel>
{/if}
<!-- NEW BIG LOOP FOR UNION -->
<!-- {#if ivItm.union} -->
<!-- content here -->
<!-- TAB -->
<!-- <div > -->
<!-- <TabBar tabs={[...Array(2)].map((_v, i) => i + 1)} let:tab> -->
<!-- <TabBar tabs={['image', 'video']} let:tab bind:activeTab>
							<Tab
								{tab}
								on:click={() => {
									activeTab = tab;
								}}
							>
								<Label>{tab}</Label>
							</Tab>
						</TabBar> -->
<!-- ################## -->
<!-- BEROUT -->
<!-- ################## -->
<!-- {#if activeTab === 'video'}
							<AxInputValue bind:ivItm={ivItm.union[0]} />
						{:else if activeTab === 'image'}
							<AxInputValue bind:ivItm={ivItm.union[1]} />
						{/if} -->
<!-- </div> -->
<!-- {:else} -->

<!-- {/if} -->
<script lang="ts">
	export let _M_: I_DB_CONFIG<T_GLOBAL_ENTITIES, T_GLOBAL_DTOS> | undefined = undefined;
	export let _DAB_: T_GLOBAL_ENTITIES[] | undefined = undefined;
	let open = false;
	onMount(() => {
		axlog(_DAB_, $page.url.pathname, 'wc -- ax panel add', false, 'MOUNT', true);
	});

	import { page } from '$app/stores';
	import { Content, Header, Panel } from '@smui-extra/accordion';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';
	import { ConfigServices } from 'app/domain/services/ConfigServices';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	import AxInputValue from '../form-inputValue/AxInputValue.svelte';
	// ADD
	// TODO- et pour add les events, c louche ?
	// BEN OUI, il faut un TYPE ! cf, tag ? je pe savoir le type avec le PREMIER ELEMENT DUDATAARRDUMP, si il a titlePost ou titleEvent ...
	// <!-- ######################################################### -->
	const add = async () => {
		// <!-- ######################################################### -->
		// if (!_DAB_ || !Array.isArray(_DAB_) || !_M_ || !_M_.conf__genericAdd)
		if (!_DAB_ || !_M_ || !_M_.conf__genericAdd) return;
		// const post:T_genericItem => bon, pour l instant, on ajoute QUE DES POSTS !
		console.debug('🌎🏎️✅ click >> on:add 1 🟡');
		if (confirm("Ajouter l'entité ?")) {
			// create a doc, get a reference on it

			// TODO - je n ai pas reussi a le type, et c post ou event
			const post: I_DTO__post = {
				titlePost: structuredClone(_M_.conf__genericAdd[0]),
				slug: structuredClone(_M_.conf__genericAdd[1]),
				body: structuredClone(_M_.conf__genericAdd[2]),
				// https://github.com/firebase/snippets-web/blob/486e5c67bcb895a00ccab90f1b20cefdba6c9e3a/snippets/firestore-next/test-firestore/server_timestamp_resolution_options.js
				// createdAt: Timestamp.fromDate(new Date()).toMillis(), // => absure
				// -----------------------------------------------------------
				// -----------------------------------------------------------
				// -----------------------------------------------------------
				createdAt: Date.now() // dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
				// -----------------------------------------------------------
				// -----------------------------------------------------------
				// -----------------------------------------------------------
				// -----------------------------------------------------------
				// -----------------------------------------------------------
				// I bypass the timestamp difficulty
				// createdAt: serverTimestamp().toMillis()
				// https://www.rowy.io/blog/firestore-timestamp
			};
			// we must add it in the DB, before the UI

			const postId = await ConfigServices.getInstance().config__add(_M_.conf__db, post);
			const post2 = { ...post, idDoc: postId };
			_DAB_.push(post2);
			// tip: reset form
			_M_.conf__genericAdd.forEach((itm) => {
				itm.value = '';
			});
			// attention, chaque refresh update sa vue
			// _M_ = _M_; // refresh ui : vue = ADD
			_DAB_ = _DAB_; // refresh ui : vue = COLLECTION__EDIT
			console.debug('🌎🏎️✅ click << on:add 2 🟨, _DAB_', _DAB_);
		}
	};
	// <!-- ######################################################### -->
</script>
