<script lang="ts">
	import HeaderMenusItem from './HeadermenusItem.svelte';
	// import HeaderSubmenuItem from './HeaderSubmenuItem.svelte';

	export let isAdmin = false;
	export let menus = [];
</script>

{#if isAdmin}
	<!-- <div class="sm:hidden">
		<HeaderSubmenuItem submenus={menus} />
	</div> -->
{:else}
	{#each menus as item}
		<HeaderMenusItem img={item.img} url={item.url} menu={item.menu} />
	{/each}
{/if}
