<!-- ######################################## -->
<!-- MENU ITEM: HEADER                        -->
<!-- ######################################## -->
{#if menu}
	<Button
		href={menu.url}
		class="{active === menu.url ? 'bg-white/10' : ''} mr-5 border-2 font-bold hover:bg-white/50 hover:text-orange-800"
		on:click={() => {
			setActive(menu?.url);
		}}
	>
		<!-- <a href={menu.url}> -->
		<Label style="">
			<!-- .................. -->
			<!-- tip responsive: icon desapear becoz not enought space -->
			<!-- .................. -->
			<img
				class:uiDebug={AX_CONST__FRAME__isDebugBorder}
				class="hidden h-5  w-5 lg:inline "
				src={menu.img}
				alt=""
			/>
			{menu.title}</Label
		>
		<!-- </a> -->
	</Button>
{/if}

<style lang="postcss">
	.uiDebug {
		@apply border border-blue-500;
	}

	* :global(.mdc-button--raised) {
		background: #282728 !important;
	}
</style>

<script lang="ts">
	export let menu: I_ui__menu | undefined = undefined;
	let active: string | undefined = undefined;
	//
	$: active = $page.url.pathname;
	//
	function setActive(value) {
		active = value;
	}
	//
	import { page } from '$app/stores';
	import Button, { Label } from '@smui/button';
	import { AX_CONST__FRAME__isDebugBorder } from 'app/0-config/frame/AX_CONST__FRAME__debug';
</script>
