<script lang="ts">
	import Textfield from '@smui/textfield';
	import Axfileupload from '../form/Axfileupload.svelte';
	import AxBlog from '../tpl/blog/AxBlog.svelte';

	export let files = null;
	export let item;

	// replace space
	// $: labelFormName = labelName.toLowerCase().replace(/\s/g, ""); // 3 to use as the name for the FORM
</script>

<div>
	{#if item.type === 'text'}
		<Textfield
			style="width: 100%;"
			helperLine$style="width: 100%;"
			bind:value={item.inputValue}
			label={item.label}
		>
			<!-- <HelperText slot="helper">Helper Text</HelperText> -->
		</Textfield>
	{:else if item.type === 'file'}
		<div class="max-w-xs">
			<div class="text-xs text-gray-400">{item.label}</div>
			<Axfileupload bind:files bind:urlStorage={item.inputValue} />
		</div>
	{:else if item.type === 'area'}
		<Textfield
			style="width: 100%; height: 200px;"
			textarea
			bind:value={item.inputValue}
			label={item.label}
		/>
		<!-- input$maxlength={500} -->
		<!-- helperLine$style="width: 100%;" -->
		<!-- <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter> -->
	{:else if item.type === 'blog'}
		<!-- <AxDataTable items={posts} sortId={'label'} /> -->
		<AxBlog posts={item.posts} />
	{/if}
</div>
