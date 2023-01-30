<script lang="ts">
	import { base } from '$app/paths';
	import MenuItem from './MenuItem.svelte';
	import SubmenuItem from './SubmenuItem.svelte';

	export let menus: any[] = [];
</script>

<div class="flex gap-5">
	{#each menus as item}
		{#if item.submenus}
			<SubmenuItem menu={item.menu} submenus={item.submenus} />
		{:else}
			<MenuItem img={item.img} url={item.url} menu={item.menu} />
		{/if}
	{/each}
</div>
