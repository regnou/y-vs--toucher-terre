<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import SubmenuItem from './SubmenuItem.svelte';

	export let menus = [];
</script>

<!-- <div class="flex gap-5"> -->
<div class="flex gap-6">
	{#each menus as item}
		{#if item.submenus}
			<SubmenuItem menu={item.menu} submenus={item.submenus} />
		{:else}
			<MenuItem img={item.img} url={item.url} menu={item.menu} />
		{/if}
	{/each}
</div>
