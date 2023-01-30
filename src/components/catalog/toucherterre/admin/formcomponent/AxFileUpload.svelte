<!-- <svelte:options accessors={true} /> -->
<script lang="ts">
	// to upload binary
	let imgFromElement;
	let hasUploaded_aLocalImg = false;

	// export let storeIndex = 0;
	export let files = null;
	export let urlStorage = '';

	$: (async () => {
		if (files) {
			let reader = new FileReader();
			// Note that `files` is of type `FileList`, not an Array:
			// https://developer.mozilla.org/en-US/docs/Web/API/FileList
			console.log('FILES HAS CHANGED >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<');
			console.log(files.length, ' ', files);
			for (const file of files) {
				console.log(`${file.name}: ${file.size} bytes`);
				reader.readAsDataURL(file);
				reader.onload = (e) => {
					imgFromElement = e.target.result;
					hasUploaded_aLocalImg = true;
				};
			}
			// // FAST and BAD - upload image now
			// const { STORAGE } = getFirebase();
			// urlStorage = await upload(STORAGE, files[0]);
			// console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><');
			// console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><');
			// console.log('UPDATED to new URL STORAGE : ', urlStorage);
		}
	})();

	// gs://y-toucherterre.appspot.com/gallery/la-demarche/cuisiniere-terre-crue-rocketstove-enduits-habitats-reversibles-poele-de-masse_01.png
</script>

<!-- 2 -->
<!-- uploader -->
<section class="flex flex-col w-full h-full p-1 overflow-auto">
	<header
		class="h-44
            flex flex-col
            items-center
            justify-center
            text-base
            transition
            duration-500
            ease-in-out
            transform
            bg-white
            border border-dashed
            rounded-lg
            text-blueGray-500
            focus:border-blue-500
            focus:outline-none
            focus:shadow-outline
            focus:ring-2
            ring-offset-current
            ring-offset-2
            relative
            overflow-hidden
          "
	>
		<input
			accept="image/png, image/jpeg"
			bind:files
			id="upload-id"
			name="upload-id"
			type="file"
			class="z-10 custom-file-input"
		/>

		{#if files}
			{#each Array.from(files) as file}
				<img src={imgFromElement} alt="" class="z-0 mt-10 absolute inset-0 object-cover" />

				<!-- <img
					src={URL.createObjectURL(file)}
					alt=""
					class="z-0 mt-10 absolute inset-0 object-cover"
				/> -->
			{/each}
		{:else if urlStorage}
			<img src={urlStorage} alt="" class="z-0 mt-10 absolute inset-0 object-cover" />
		{/if}
	</header>
</section>

<!-- <p
      class=" z-10
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
<style>
	.custom-file-input {
		color: transparent;
		@apply w-full;
	}
	.custom-file-input::-webkit-file-upload-button {
		visibility: hidden;
	}
	.custom-file-input:hover::before {
		@apply bg-gray-500;
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
