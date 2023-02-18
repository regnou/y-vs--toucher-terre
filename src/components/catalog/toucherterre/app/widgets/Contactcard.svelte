<script lang="ts">
	import Separator from './Separator.svelte';
	import ContactCardItem from './ContactcardItem.svelte';
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';

	export let title = 'N/A';
	export let subtitle = 'N/A';
	export let mail = 'N/A';
	export let fb = 'N/A';
	export let tel = 'N/A';
</script>

<div
	id="ax-contactcard--1"
	style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
	class="rounded-3xl  bg-white/20 p-2"
>
	<!--  -->
	<div class="place-body-center grid grid-flow-col">
		<img class="h-8 justify-self-end " src="/media/icon/icon-contact-decom--creme.png" alt="" />
		<div class="text-3xl" style="color:#f4b994">{title}</div>
		<img
			class="h-8 rotate-180  justify-self-start"
			src="/media/icon/icon-contact-decom--creme.png"
			alt=""
		/>
	</div>
	<div class="text-center text-xl" style="color:#f4b994">{subtitle}</div>
	<Separator />
	<ContactCardItem name={mail} img="/media/icon/icon-contact-mail.png" />
	<ContactCardItem name={fb} img="/media/icon/icon-contact-fb.png" />
	<ContactCardItem name={tel} img="/media/icon/icon-contact-tel.png" />
</div>
