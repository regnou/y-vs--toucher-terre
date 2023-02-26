<!-- ####################################################### -->

<!-- ########################################### -->
<!-- TABLE -->
<!-- ########################################### -->
<DataTable
	sortable
	bind:sort
	bind:sortDirection
	on:SMUIDataTable:sorted={handleSort}
	table$aria-label="User list"
	style="width: 100%;"
>
	<!--  -->
	<!-- BODY -->
	<!--  -->
	<Head>
		<Row>
			<!--
        Note: whatever you supply to "columnId" is
        appended with "-status-label" and used as an ID
        for the hidden label that describes the sort
        status to screen readers.

        You can localize those labels with the
      "sortAscendingAriaLabel" and
      "sortDescendingAriaLabel" props on the DataTable.
      -->
			<Cell
				numeric
				columnId="id"
			>
				<!-- For numeric columns, icon comes first. -->
				<IconButton class="material-icons">arrow_upward</IconButton>
				<Label>Id</Label>
			</Cell>
			<!-- <Cell numeric columnId="page">
				<Label>Page</Label>
			</Cell> -->
			<!-- <Cell columnId="name" style="width: 100%;"> -->
			<!-- <Label>Name</Label> -->
			<!-- For non-numeric columns, icon comes second. -->
			<!-- <IconButton class="material-icons">arrow_upward</IconButton> -->
			<!-- </Cell> -->
			<!-- You can turn off sorting for a column. -->
			<!-- <Cell sortable={false}>Website</Cell> -->
		</Row>
	</Head>
	<!--  -->
	<!-- BODY -->
	<!--  -->
	<Body>
		{#each menus as menu}
			<Row>
				<!-- <Cell numeric>
					<a href={$page.url.pathname + menu.url} rel="prefetch">
						{menu.title}
					</a>
				</Cell> -->
				<Cell>
					<a
						href={$page.url.pathname + menu.url}
						rel="prefetch"
					>
						{menu.title}
					</a>
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

<script lang="ts">
	import { page } from '$app/stores';
	import DataTable, { Body, Cell, Head, Label, Row, SortValue } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	// ----------------------------------------------
	export let sortId;
	export let menus: I_ui__menu[];
	// let sort: keyof PageMenus = 'id';
	let sort = sortId;
	let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
	// ----------------------------------------------
	// if (typeof fetch !== 'undefined') {
	// 	fetch(
	// 		'https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json'
	// 	)
	// 		.then((response) => response.json())
	// 		.then((json) => (items = json));
	// }
	// ----------------------------------------------
	function handleSort() {
		menus.sort((a, b) => {
			const [aVal, bVal] = [a[sort], b[sort]][
				sortDirection === 'ascending' ? 'slice' : 'reverse'
			]();
			if (typeof aVal === 'string' && typeof bVal === 'string') {
				return aVal.localeCompare(bVal);
			}
			return Number(aVal) - Number(bVal);
		});
		menus = menus;
	}

	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'wc -- ax table');
	});
</script>
