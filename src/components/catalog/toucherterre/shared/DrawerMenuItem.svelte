<script>
	import { page } from '$app/stores';
	import { Item, Text } from '@smui/list';
	import { onMount } from 'svelte';

	export let url = 'N/A';
	export let menu = 'N/A';

	let active = $page.url.pathname;
	//
	onMount(() => {
		console.log('mount -- ' + $page.url.pathname);
	});

	// UTILS
	function setActive(value) {
		active = value;
	}
</script>

<Item on:click={() => setActive(url)} activated={active === url}>
	<a href={url} class="w-full" rel="prefetch">
		<Text>{menu}</Text>
	</a>
</Item>
