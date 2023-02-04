<script lang="ts">
	import LayoutAdminapp from '@app/components/catalog/toucherterre/admin/page/Layoutadminapp.svelte';
	import NewsletterApp from '@app/components/catalog/toucherterre/front/page/NewsletterApp.svelte';
	// @ts-check
	// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
</script>

<LayoutAdminapp>
	<div slot="app">
		<NewsletterApp />
	</div>
	<div slot="admin">
		<!-- <NewsletterAdmin /> -->
	</div>
</LayoutAdminapp>
