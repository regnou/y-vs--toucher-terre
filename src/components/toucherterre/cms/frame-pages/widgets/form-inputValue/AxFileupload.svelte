<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FILE UPLOAD-->
<!-- ####################################### -->
<!-- focus:shadow-outline items-center justify-center text-center text-base ring-offset-2 ring-offset-current -->
<!-- transition duration-500 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 -->
<div
	id="FU--header"
	class="
relative
mx-auto
my-2
h-44
max-w-xs
overflow-hidden
rounded-xl
border-2
border-black
bg-gray-100
text-center
hover:bg-black/30
"
>
	<!-- ########################################################## -->
	<!-- ########################################################## -->
	<!-- bind:files -->
	<!-- TODO - remtrre si bug -->
	<!-- class={"custom-file-input z-10  before:content-[\'"+ivItm?.label+"\']"} -->
	<!-- before:content-[' + ivItm?.label + ']' -->
	<input
		id="FU--input"
		on:change={(e) => onFileSelected(e)}
		name={'upload-id' + pos}
		accept="image/png, image/jpeg"
		type="file"
		class="    
		megacenter
		absolute
		left-0 
		top-0
		bottom-0
		z-10
		h-44
		cursor-pointer
		rounded-lg
		"
	/>
	<!-- <div class="relative"> -->
	<!-- ########################################################## -->
	{#if imgFromElement}
		<!-- en 2eme, on affiche l img que le user vient de chercher -->
		<!-- {#each Array.from(files) as file}
				<img src={imgFromElement} alt="" class="absolute inset-0 z-0 mt-10 object-cover" />
			{/each} -->
		<!-- REMETRE -->
		<img
			id="FU--img-newLoaded"
			src={imgFromElement}
			alt=""
			class="megacenter max-h-44 max-w-xs bg-white bg-contain "
		/>
		<!-- ########################################################## -->
	{:else if ivItm && ivItm.value}
		<!-- il existe deja une img du storage, et donc on l affiche en 1er -->
		<img
			id="FU--img-initiale"
			src={ivItm.value}
			alt=""
			class="megacenter max-h-44 max-w-xs bg-white bg-contain "
		/>
		<!-- ########################################################## -->
	{/if}
	<!-- </div> -->
</div>

<!-- // $: console.debug('label', ivItm?.label.replaceAll(' ', '_'));
// to upload binary
// let imgFromElement: string | ArrayBuffer | null | undefined = undefined; // cf type FileReader
// let hasUploaded_aLocalImg = false;
// TOLERATED BUG TYPE
// let files: any | null = null; -->
<style lang="postcss">
	.megacenter {
		@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform;
	}
</style>

<script lang="ts">
	export let ivItm: I_DTO__uiinputValue | undefined = undefined; // we have to dynamically add a field, that is the blob UPLOADED
	export let pos: number | undefined = undefined;
	let imgFromElement;
	onMount(() => {
		axlog({ ivItm, pos }, $page.url.pathname, 'wc -- ax file upload', false, 'MOUNT', true);
	});
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	$: console.debug('imgFromElement', imgFromElement);
	// -----------------------------------------
	// UPLOADED IMG
	// -----------------------------------------
	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			imgFromElement = e.target?.result;
			if (ivItm) {
				console.debug('imgFromElement::::', imgFromElement);
				ivItm.value = imgFromElement;
				console.debug('blob file added', image, 'ivItm', ivItm);
				// step 1 - we add the file to the blob, so we update it to the storage when the user will click on SAVE
				// EROR HERE
				// ivItm.blobs = files;
				ivItm.blobs = image;
			}
		};
	};
</script>
