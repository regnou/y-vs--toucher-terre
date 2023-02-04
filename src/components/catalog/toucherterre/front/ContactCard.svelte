<script lang="ts">
	import { base } from '$app/paths';
	import Separator from './Separator.svelte';
	import ContactCardItem from './ContactcardItem.svelte';

	export let title = 'N/A';
	export let subtitle = 'N/A';
	export let mail = 'N/A';
	export let fb = 'N/A';
	export let tel = 'N/A';
</script>

<div id="contactcard--1" class="rounded-3xl border bg-white/20 p-2">
	<!--  -->
	<div class="grid grid-flow-col place-content-center">
		<img class="h-8 justify-self-end " src="/media/icon/icon-contact-decom--creme.png" alt="" />
		<div class=" text-3xl" style="color:#f4b994">{title}</div>
		<img
			class="h-8 rotate-180  justify-self-start"
			src="/media/icon/icon-contact-decom--creme.png"
			alt=""
		/>
	</div>
	<div class="text-center text-xl" style="color:#f4b994">{subtitle}</div>
	<Separator />
	<ContactCardItem name={mail} img="{base}/media/icon/icon-contact-mail.png" />
	<ContactCardItem name={fb} img="{base}/media/icon/icon-contact-fb.png" />
	<ContactCardItem name={tel} img="{base}/media/icon/icon-contact-tel.png" />
</div>
