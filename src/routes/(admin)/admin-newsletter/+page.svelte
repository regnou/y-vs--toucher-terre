<script lang="ts">
	import LayoutAdmin from '@app/components/catalog/toucherterre/admin/page/LayoutAdmin.svelte';
	import NewsletterApp from '@app/components/catalog/toucherterre/front/page/NewsletterApp.svelte';
	// @ts-check
	// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
</script>

<LayoutAdmin>
	<div slot="app">
		<NewsletterApp />
	</div>
	<div slot="admin">
		<!-- <NewsletterAdmin /> -->
	</div>
</LayoutAdmin>
