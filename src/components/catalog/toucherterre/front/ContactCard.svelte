<script>
	import { base } from '$app/paths';
	import Separator from './Separator.svelte';
	import ContactItem from './subcomponent/ContactItem.svelte';

	export let title = 'N/A';
	export let subtitle = 'N/A';
	export let mail = 'N/A';
	export let fb = 'N/A';
	export let tel = 'N/A';
</script>

<div id="catalog-contact-card" class="rounded-3xl border bg-white/20 p-2">
	<div class="grid grid-flow-col place-content-center">
		<img class="h-8 justify-self-end " src="media/icon/icon-contact-decom--creme.png" alt="" />
		<div class=" text-3xl" style="color:#f4b994">{title}</div>
		<img
			class="h-8 rotate-180  justify-self-start"
			src="media/icon/icon-contact-decom--creme.png"
			alt=""
		/>
	</div>
	<div class="text-center text-xl" style="color:#f4b994">{subtitle}</div>
	<Separator />
	<ContactItem name={mail} img="{base}/media/icon/icon-contact-mail.png" />
	<ContactItem name={fb} img="{base}/media/icon/icon-contact-fb.png" />
	<ContactItem name={tel} img="{base}/media/icon/icon-contact-tel.png" />
</div>
