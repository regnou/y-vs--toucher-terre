<script lang="ts">
	export let imgBg = '';
</script>

<!-- this is a background widget -->
<div
	id="catalog-item1"
	class="fixed inset-0 flex flex-col overflow-y-scroll bg-cover "
	style="background-image: url({imgBg})"
>
	<slot />
</div>
