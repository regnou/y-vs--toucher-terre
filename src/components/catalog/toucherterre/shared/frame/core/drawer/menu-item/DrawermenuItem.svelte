<script lang="ts">
	import { page } from '$app/stores';
	import { Item, Text } from '@smui/list';
	// ------------------------------------------------
	export let url = 'N/A';
	export let menu = 'N/A';
	// ................................................
	let active = $page.url.pathname;
	$: active = $page.url.pathname;
	// ------------------------------------------------
	// UTILS
	function setActive(value) {
		active = value;
	}
	// ------------------------------------------------
</script>

<!-- ########################################### -->
<!-- DRAWER MENU ITEM -->
<!-- ########################################### -->
<a id="drawer-menuItem-1" href={url} class="w-full" rel="prefetch">
	<Item on:click={() => setActive(url)} activated={active === url}>
		<Text>
			{menu}
		</Text>
	</Item>
</a>
