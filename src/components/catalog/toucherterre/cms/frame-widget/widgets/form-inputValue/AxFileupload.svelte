<script lang="ts">
	export let pos: number = 0;
	export let ivItm: I_UI__inputValue | undefined = undefined; // we have to dynamically add a field, that is the blob UPLOADED
	// to upload binary
	// let imgFromElement: string | ArrayBuffer | null | undefined = undefined; // cf type FileReader
	let imgFromElement;
	let hasUploaded_aLocalImg = false;
	// TOLERATED BUG TYPE
	let files: any | null = null;

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			imgFromElement = e.target?.result;
			if (ivItm) {
				console.log('blob file added', files, 'ivItm', ivItm);

				// ca ne marche PAS ! c le meme file
				// const deepCopyFiles = structuredClone(files);
				// deepCopyFiles === files ? console.log('ERRROR c egal') : '';
				// ivItm.blobs = deepCopyFiles;
				ivItm.blobs = files;
			}
		};
	};

	// $: {
	// 	if (files && files.length) {
	// 		let reader = new FileReader();
	// 		// Note that `files` is of type `FileList`, not an Array:
	// 		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
	// 		// console.debug('🚔FILES HAS CHANGED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<');
	// 		// console.debug(files.length, ' ', files);
	// 		// for (const file of files) {
	// 		debugger;
	// 		const file = files[0];
	// 		// BUG - why does this loop ? when I load an image...it does not stop looping this log
	// 		// console.debug(`🚔${file.name}: ${file.size} bytes`);

	// 		reader.readAsDataURL(file);
	// 		// reader.onload = (e) => {
	// 		// 	imgFromElement = e.target?.result;
	// 		// 	hasUploaded_aLocalImg = true;
	// 		// 	// DYNAMIC ADD THIS ATTRIBUTE -> type ...
	// 		// 	if (ivItm) {
	// 		// 		ivItm.blobs = files;

	// 		// 		//
	// 		// 		// console.log('blob file added');
	// 		// 	}
	// 		// 	// console.debug($STORE_PROCHAINSRDV[0].posts);
	// 		// };
	// 		// }
	// 	}
	// }
</script>

<!-- ####################################################### -->
<!-- ####################################### -->
<!-- FILE UPLOAD-->
<!-- ####################################### -->
<!-- 2 -->
<!-- uploader -->
<section class="flex h-full w-full flex-col overflow-auto p-1">
	<header
		class="text-blueGray-500
            focus:shadow-outline relative
            flex
            h-44
            transform
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-lg
            border border-dashed
            bg-white
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
		<!-- name="upload-id" -->
		<!-- id="axfileupload--1" -->
		<!--  -->
		<!-- name=`upload-id${pos}` -->
		<input
			on:change={(e) => onFileSelected(e)}
			bind:files
			name={'upload-id' + pos}
			accept="image/png, image/jpeg"
			type="file"
			class="custom-file-input z-10"
		/>

		<!-- <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} > -->

		{#if files}
			{#each Array.from(files) as file}
				<!-- {#if imgFromElement} -->
				<img src={imgFromElement} alt="" class="absolute inset-0 z-0 mt-10 object-cover" />
				<!-- {/if} -->

				<!-- <img
					src={URL.createObjectURL(file)}
					alt=""
					class=" z-0 mt-10 absolute inset-0 object-cover"
				/> -->
			{/each}
		{:else if ivItm && ivItm.value}
			<img src={ivItm.value} alt="" class="absolute inset-0 z-0 mt-10 object-cover" />
			<!-- {:else if urlStorage}
			<img src={urlStorage} alt="" class="absolute inset-0 z-0 mt-10 object-cover" /> -->
		{/if}
	</header>
</section>

<!-- <p
      class="z-10
              flex flex-wrap
              justify-center
              mb-3
              text-xs
              leading-7
              text-blueGray-500
          "
    >
      {#if files}
        {#each Array.from(files) as file}
          <p>{file.name} ({file.size} bytes)</p>
        {/each}
      {/if}
    </p> -->

<!-- hover:bg-blueGray-100
    px-2
    py-1
    my-2
    w-auto
    transition
    duration-500
    ease-in-out
    transform
    border
    rounded-md
    text-blueGray-500
    hover:text-blueGray-600
    text-md
    focus:shadow-outline focus:outline-none focus:ring-2
    ring-offset-current ring-offset-2
    hover:bg-black
    hover:text-white -->
<style lang="postcss">
	.custom-file-input {
		color: transparent;
		@apply w-full;
	}
	.custom-file-input::-webkit-file-upload-button {
		visibility: hidden;
	}
	.custom-file-input:hover::before {
		/* @apply bg-gray-500; */
		@apply bg-black/30;
		@apply text-white;
	}
	.custom-file-input::before {
		@apply text-center;
		@apply absolute;
		@apply inset-0;
		@apply pt-2;
		@apply text-xs;
		content: 'Upload image';
		color: black;
		/* display: inline-block; */
		/* background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3); */
		/* border: 1px solid #999; */
		/* border-radius: 3px; */
		/* padding: 5px 8px; */
		outline: none;
		white-space: nowrap;
		-webkit-user-select: none;
		user-select: none;
		cursor: pointer;
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
