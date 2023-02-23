<div
	id="ax-contactcard--1"
	style="border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
	class="mt-5 rounded-2xl  bg-white/10 p-2"
>
	<!--  -->
	<div class="place-body-center grid grid-flow-col">
		<img
			class="h-8 self-center justify-self-end"
			src="/media/icon/icon-contact-decom--creme.png"
			alt=""
		/>
		<div class="m-auto text-4xl">
			{title}
		</div>
		<img
			class="h-8 rotate-180  self-center justify-self-start"
			src="/media/icon/icon-contact-decom--creme.png"
			alt=""
		/>
	</div>
	<div class="text-center text-xl">
		{subtitle}
	</div>
	<Separator />
	<ContactCardItem
		name={mail}
		img="/media/icon/icon-contact-mail.png"
	/>
	<ContactCardItem
		name={fb}
		img="/media/icon/icon-contact-fb.png"
	/>
	<ContactCardItem
		name={tel}
		img="/media/icon/icon-contact-tel.png"
	/>
</div>

<script lang="ts">
	import Separator from './Separator.svelte';
	import ContactCardItem from './ContactcardItem.svelte';
	import { AX_CONST__FRAME_isDebugBorder } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';

	export let title = 'N/A';
	export let subtitle = 'N/A';
	export let mail = 'N/A';
	export let fb = 'N/A';
	export let tel = 'N/A';
</script>
