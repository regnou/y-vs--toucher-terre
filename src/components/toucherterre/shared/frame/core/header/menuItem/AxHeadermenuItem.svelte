<!-- HEADER MENU ITEM -->
<!-- ######################################################## -->
<!-- ######################################## -->
{#if menu}
	<!-- <Item
		href={menu.url}
		on:click={() => {
			console.log('menu.url', menu ? menu.url : '');
		}}
	>
		<img
			class:uiDebug={AX_CONST__FRAME_isDebugBorder}
			class="mr-2 h-7  w-7"
			src={menu.img}
			alt=""
		/>
		<Text>
			{menu.title}
		</Text>
	</Item> -->
	<!-- id="header-menuitem--1" -->
	<!-- activated={active === menu.url} -->
	<Button
		href={menu.url}
		class="{active === menu.url
			? 'bg-white/10'
			: ''} mr-5 border-2 font-bold hover:bg-white/50 hover:text-orange-800"
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
				class:uiDebug={AX_CONST__FRAME_isDebugBorder}
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
	import { page } from '$app/stores';
	import Button, { Label } from '@smui/button';
	import { AX_CONST__FRAME_isDebugBorder } from 'app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	$: active = $page.url.pathname;
	function setActive(value) {
		active = value;
		console.log('current active: ', active);
	}
</script>
