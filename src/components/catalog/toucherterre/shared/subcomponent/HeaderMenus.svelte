<script lang="ts">
	import HeaderMenuItem from './HeaderMenuItem.svelte';
	import HeaderSubmenuItem from './HeaderSubmenuItem.svelte';

	export let menus = [];
</script>

<!-- <div class="flex gap-5"> -->
<!-- <div class="flex gap-6" id="headerMenus"> -->
{#each menus as item}
	{#if item.submenus}
		<HeaderSubmenuItem menu={item.menu} submenus={item.submenus} />
	{:else}
		<HeaderMenuItem img={item.img} url={item.url} menu={item.menu} />
	{/if}
{/each}
<!-- </div> -->
