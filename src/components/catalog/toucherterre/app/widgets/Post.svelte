<!-- ######################################### -->
<!-- POST -->
<!-- ######################################### -->
<div
	id="postentry--1"
	class="m-2"
>
	<!-- TITLE ARTICLE -->
	<div
		class="flex place-items-center py-3 border:{AX__UI__CONST_isDebugBorder
			? '1px solid blue'
			: 'none'}"
	>
		<img
			style="border:{AX__UI__CONST_isDebugBorder ? '1px solid blue' : 'none'}"
			class="w-16   pr-5"
			src={imgIcon}
			alt=""
		/>
		<div
			style="color:#F6BD94"
			class="text-2xl font-bold uppercase"
		>
			{post.titlePost.value}
		</div>
	</div>
	<!-- CONTENT ARTICLE -->
	<ParagraphLeft text={post.body.value} />
	<SeparatorMedium />
</div>

<script lang="ts">
	import { AX__UI__CONST_isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__UI__CONST_isDebugBorder';
	import ParagraphLeft from './ParagraphLeft.svelte';
	import Separator from './Separator.svelte';
	import SeparatorMedium from './SeparatorMedium.svelte';
	// --------------------------------------------
	export let post: I_ENTITY__post;
	// ............................................
	let imgIcon = '/media/icon/icon-infinity--creme.png';
	// title={post.title.iv} richTextArea={post.slug.iv}
	// export let richTextArea = '';
	// --------------------------------------------
</script>
