<!-- ######################################### -->
<!-- POST -->
<!-- ######################################### -->
<div
	id="postentry--1"
	class="m-2"
>
	<!--               -->
	<!-- TITLE ARTICLE -->
	<!--               -->
	<div
		class="flex place-items-center py-3 border:{AX_CONST__FRAME_isDebugBorder
			? '1px solid blue'
			: 'none'}"
	>
		<img
			style="border:{AX_CONST__FRAME_isDebugBorder ? '1px solid blue' : 'none'}"
			class="w-16   pr-5"
			src={imgIcon}
			alt=""
		/>
		<div class="text-2xl font-bold uppercase">
			{post.titlePost.value}
		</div>
	</div>
	<!--                 -->
	<!-- CONTENT ARTICLE -->
	<!--                 -->
	<ParagraphLeft text={post.body.value} />
	<SeparatorMedium />
</div>

<script lang="ts">
	import { AX_CONST__FRAME_isDebugBorder } from '@app/domain/DATACONST/config-uiFrame/AX_CONST__FRAME_debug';
	import ParagraphLeft from './ParagraphLeft.svelte';
	import SeparatorMedium from './SeparatorMedium.svelte';
	// --------------------------------------------
	export let post: I_ENTITY__post;
	// ............................................
	let imgIcon = '/media/icon/icon-infinity--creme.png';
	// title={post.title.iv} richTextArea={post.slug.iv}
	// export let richTextArea = '';
	// --------------------------------------------
</script>
