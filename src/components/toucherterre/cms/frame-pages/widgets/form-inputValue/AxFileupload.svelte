<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FILE UPLOAD-->
<!-- ####################################### -->
<section class="max-w-xs ">
	<header
		class="
focus:shadow-outline
relative
flex
h-44
transform
flex-col
items-center
justify-center
overflow-hidden
rounded-lg
border
border-dashed
bg-white
text-center
text-base
ring-offset-2
ring-offset-current
transition
duration-500
ease-in-out
focus:border-blue-500
focus:outline-none
focus:ring-2
			"
	>
		<!-- bind:files -->
		<!-- TODO - remtrre si bug -->
		<!-- class={"custom-file-input z-10  before:content-[\'"+ivItm?.label+"\']"} -->
		<input
			on:change={(e) => onFileSelected(e)}
			name={'upload-id' + pos}
			accept="image/png, image/jpeg"
			type="file"
			class={'custom-file-input before:content-[  z-10' + ivItm?.label + ']'}
		/>
		{#if imgFromElement}
			<!-- en 2eme, on affiche l img que le user vient de chercher -->
			<!-- {#each Array.from(files) as file}
				<img src={imgFromElement} alt="" class="absolute inset-0 z-0 mt-10 object-cover" />
			{/each} -->
			<img
				src={imgFromElement}
				alt=""
				class="absolute inset-0 z-0 mt-10 object-contain"
			/>
		{:else if ivItm && ivItm.value}
			<!-- il existe deja une img du storage, et donc on l affiche en 1er -->
			<img
				src={ivItm.value}
				alt=""
				class="absolute inset-0 z-0 mt-10 object-contain"
			/>
		{/if}
	</header>
</section>

<style lang="postcss">
	.custom-file-input {
		color: transparent;
		@apply w-full;
	}
	.custom-file-input::-webkit-file-upload-button {
		visibility: hidden;
	}
	.custom-file-input:hover::before {
		@apply bg-black/30;
	}

	.custom-file-input::before {
		@apply text-center;
		@apply absolute;
		@apply inset-0;
		@apply pt-2;
		@apply text-xs;
		/* content: 'Image'; */
		outline: none;
		white-space: nowrap;
		-webkit-user-select: none;
		user-select: none;
		cursor: pointer;
		/* display: inline-block; */
		/* background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3); */
		/* border: 1px solid #999; */
		/* border-radius: 3px; */
		/* padding: 5px 8px; */

		/* text-shadow: 1px 1px #fff; */
		/* font-weight: 700; */
		/* font-size: 10pt; */
	}

	.custom-file-input:hover::before {
		border-color: black;
	}
	.custom-file-input:active {
		outline: 0;
	}
	.custom-file-input:active::before {
		background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
	}
</style>

<script lang="ts">
	export let pos = 0;
	export let ivItm: I_UI__inputValue | undefined = undefined; // we have to dynamically add a field, that is the blob UPLOADED
	$: console.log('label', ivItm?.label.replaceAll(' ', '_'));
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
				console.log('blob file added', image, 'ivItm', ivItm);
				// step 1 - we add the file to the blob, so we update it to the storage when the user will click on SAVE
				// EROR HERE
				// ivItm.blobs = files;
				ivItm.blobs = image;
			}
		};
	};
</script>
