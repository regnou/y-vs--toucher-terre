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

<div id="catalog-contact-card" class="border">
	<div class="grid grid-flow-col place-items-center">
		<img
			class="h-10 justify-self-end "
			src="{base}/media/icon/icon-contact-decom--creme.png"
			alt=""
		/>
		<div class=" text-5xl" style="color:#f4b994">{title}</div>
		<img
			class="justify-self-start h-10 rotate-180"
			src="{base}/media/icon/icon-contact-decom--creme.png"
			alt=""
		/>
	</div>
	<div class="text-2xl text-center" style="color:#f4b994">{subtitle}</div>
	<Separator />
	<ContactItem name={mail} img="{base}/media/icon/icon-contact-mail.png" />
	<ContactItem name={fb} img="{base}/media/icon/icon-contact-fb.png" />
	<ContactItem name={tel} img="{base}/media/icon/icon-contact-tel.png" />
</div>
