<div
	id="catalog-paragraph"
	class=""
>
	<div
		style="  color:var(--mdc-theme-on-secondary); border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}"
		class="text-xl font-bold"
	>
		{@html text}
	</div>
</div>

<script lang="ts">
	import { AX_CONST__FRAME__isDebugBorder } from 'app/0-config/frame/AX_CONST__FRAME__debug';

	export let text = 'N/A';
</script>
