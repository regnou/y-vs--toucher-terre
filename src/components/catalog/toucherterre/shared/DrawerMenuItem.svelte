<script lang="ts">
	import { page } from '$app/stores';
	import { Item, Text } from '@smui/list';
	import { onMount } from 'svelte';

	export let url = 'N/A';
	export let menu = 'N/A';

	let active = $page.url.pathname;
	//
	onMount(() => {
		console.log($page.url.pathname + ' - (why so much ? ) mount -- ');
	});

	// UTILS
	function setActive(value) {
		active = value;
	}
</script>

<a href={url} class="w-full" rel="prefetch">
	<Item on:click={() => setActive(url)} activated={active === url}>
		<Text>
			{menu}
		</Text>
	</Item>
</a>
