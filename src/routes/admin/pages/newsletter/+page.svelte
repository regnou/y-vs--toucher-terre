<script lang="ts">
	import Layoutadminapp from '@app/components/catalog/toucherterre/admin/layout/Layoutadminapp.svelte';
	import NewsletterApp from '@app/components/catalog/toucherterre/front/TPL/NewsletterApp.svelte';
	// @ts-check
	// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
</script>

<Layoutadminapp>
	<div slot="app">
		<NewsletterApp />
	</div>
	<div slot="admin">
		<!-- <NewsletterAdmin /> -->
	</div>
</Layoutadminapp>
