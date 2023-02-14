<script lang="ts">
	export let imgBg = '';
</script>

<!-- ########################################### -->
<!-- LAYOUT-BG -->
<!-- ########################################### -->
<!-- this is a background widget -->
<!-- overflow-y-scroll -->
<div
	id="layoutbg-1"
	class="fixed inset-0 flex flex-col overflow-y-auto border-4  border-yellow-300 bg-cover"
	style="background-image: url({imgBg})"
>
	<slot />
</div>
