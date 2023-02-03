<script lang="ts">
	import { DATAJSON__PAGES } from '@app/data/MENUS/DATAJSON__PAGES';
	import DataTable, { Head, Body, Row, Cell, Label, SortValue } from '@smui/data-table';
	import IconButton from '@smui/icon-button';

	type PageMenus = {
		id: number;
		page: string;
		url: string;
	};
	let items: PageMenus[] = DATAJSON__PAGES;
	let sort: keyof PageMenus = 'id';
	let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';

	// if (typeof fetch !== 'undefined') {
	// 	fetch(
	// 		'https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json'
	// 	)
	// 		.then((response) => response.json())
	// 		.then((json) => (items = json));
	// }

	function handleSort() {
		items.sort((a, b) => {
			const [aVal, bVal] = [a[sort], b[sort]][
				sortDirection === 'ascending' ? 'slice' : 'reverse'
			]();
			if (typeof aVal === 'string' && typeof bVal === 'string') {
				return aVal.localeCompare(bVal);
			}
			return Number(aVal) - Number(bVal);
		});
		items = items;
	}
</script>

<DataTable
	sortable
	bind:sort
	bind:sortDirection
	on:SMUIDataTable:sorted={handleSort}
	table$aria-label="User list"
	style="width: 100%;"
>
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
			<Cell numeric columnId="id">
				<!-- For numeric columns, icon comes first. -->
				<IconButton class="material-icons">arrow_upward</IconButton>
				<Label>Id</Label>
			</Cell>
			<Cell numeric columnId="page">
				<Label>Page</Label>
			</Cell>
			<!-- <Cell columnId="name" style="width: 100%;"> -->
			<!-- <Label>Name</Label> -->
			<!-- For non-numeric columns, icon comes second. -->
			<!-- <IconButton class="material-icons">arrow_upward</IconButton> -->
			<!-- </Cell> -->
			<!-- You can turn off sorting for a column. -->
			<!-- <Cell sortable={false}>Website</Cell> -->
		</Row>
	</Head>
	<Body>
		<!-- {#each DATAJSON__PAGES as item (item.id)} -->
		{#each items as item (item.page)}
			<Row>
				<Cell numeric>{item.id}</Cell>
				<Cell>
					<a href={'/admin/posts' + item.url} rel="prefetch">
						{item.page}
					</a>
				</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
