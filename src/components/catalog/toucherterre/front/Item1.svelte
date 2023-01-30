<script lang="ts">
	export let imgBg = '';
</script>

<!-- this is a background widget -->
<div id="catalog-item1" class="flex flex-col bg-cover " style="background-image: url({imgBg})">
	<slot />
</div>
