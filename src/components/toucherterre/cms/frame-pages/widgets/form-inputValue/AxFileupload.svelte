<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FILE UPLOAD-->
<!-- ####################################### -->
<!-- focus:shadow-outline items-center justify-center text-center text-base ring-offset-2 ring-offset-current -->
<!-- transition duration-500 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 -->
<header
	id="FU--header"
	class="
relative
h-44
overflow-hidden
rounded-lg
border-2
border-black
bg-slate-500
"
>
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
		class="  absolute inset-0 z-10 "
	/>
	<!-- ########################################################## -->
	{#if imgFromElement}
		<!-- en 2eme, on affiche l img que le user vient de chercher -->
		<!-- {#each Array.from(files) as file}
				<img src={imgFromElement} alt="" class="absolute inset-0 z-0 mt-10 object-cover" />
			{/each} -->
		<img
			id="FU--img-newLoaded"
			src={imgFromElement}
			alt=""
			class="absolute inset-0 mt-10 "
		/>
	{:else if ivItm && ivItm.value}
		<!-- il existe deja une img du storage, et donc on l affiche en 1er -->
		<img
			id="FU--img-initiale"
			src={ivItm.value}
			alt=""
			class="absolute inset-0  mx-auto mt-10 "
		/>
	{/if}
</header>

<script lang="ts">
	export let ivItm: I_DTO__uiinputValue | undefined = undefined; // we have to dynamically add a field, that is the blob UPLOADED
	export let pos: number | undefined = undefined;
	import { page } from '$app/stores';
	import { axlog } from 'app/utils/axLog';
	import { onMount } from 'svelte';
	// $: console.log('label', ivItm?.label.replaceAll(' ', '_'));
	$: console.log('imgFromElement', imgFromElement);
	// to upload binary
	// let imgFromElement: string | ArrayBuffer | null | undefined = undefined; // cf type FileReader
	let imgFromElement;
	// let hasUploaded_aLocalImg = false;
	// TOLERATED BUG TYPE
	// let files: any | null = null;
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
				console.log('imgFromElement::::', imgFromElement);
				ivItm.value = imgFromElement;

				console.log('blob file added', image, 'ivItm', ivItm);
				// step 1 - we add the file to the blob, so we update it to the storage when the user will click on SAVE
				// EROR HERE
				// ivItm.blobs = files;
				ivItm.blobs = image;
			}
		};
	};
	onMount(() => {
		axlog(undefined, $page.url.pathname, 'wc -- ax file uplad');
	});
</script>
