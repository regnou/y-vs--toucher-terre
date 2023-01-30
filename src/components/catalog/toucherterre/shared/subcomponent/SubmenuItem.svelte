<script lang="ts">
	import Menu from '@smui/menu';
	import { Anchor } from '@smui/menu-surface';
	import List, { Item, Separator, Text, PrimaryText, SecondaryText } from '@smui/list';
	import Button, { Label } from '@smui/button';

	let menuMD: Menu;
	let anchor: HTMLDivElement;
	let anchorClasses: { [k: string]: boolean } = {};
	let clicked = 'nothing yet';

	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	export let submenus = [];
	export let menu = 'N/A';
	export let url = '/acceuil';
	export let img = 'N/A';
</script>

<div style="min-width: 100px;">
	<Button on:click={() => menu.setOpen(true)}>
		<Label>Gestion des pages</Label>
	</Button>

	<Menu bind:this={menu}>
		<List>
			{#each submenus as item}
				<a href={item.url}>
					<Item>
						<Text>{item.menu}</Text>
					</Item>
				</a>
			{/each}
		</List>
	</Menu>
</div>

<!-- on:SMUI:action={() => goto(item.url)} -->

<!-- <div id="catalog-subc--menuitem" class="flex place-items-center border">
		<img class="h-10 w-10 border" src={img} alt="" />
		<a
			style="color:#E5A782"
			href={item.url}
			class="hover:bg-green-500 cursor-pointer border-black  font-bold  border">{menu}</a
		>
	</div> -->
