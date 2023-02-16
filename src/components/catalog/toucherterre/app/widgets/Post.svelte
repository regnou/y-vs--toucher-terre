<script lang="ts">
	import { AX__CONST__isDebugBorder } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__isDebugBorder';
	import ParagraphLeft from './ParagraphLeft.svelte';
	// --------------------------------------------
	export let post: I_ENTITY__post;
	// ............................................
	let imgIcon = '/media/icon/icon-infinity.png';
	// title={post.title.iv} richTextArea={post.slug.iv}
	// export let richTextArea = '';
	// --------------------------------------------
</script>

<!-- ######################################### -->
<!-- POST -->
<!-- ######################################### -->
<div id="postentry-1" class="m-2">
	<!-- TITLE ARTICLE -->
	<div class="flex place-items-center border py-3">
		<img
			style="border:{AX__CONST__isDebugBorder ? '1px solid blue' : 'none'}"
			class="w-16   pr-5"
			src={imgIcon}
			alt=""
		/>
		<div style="color:#F6BD94" class="text-2xl font-bold uppercase">{post.titlePost.value}</div>
	</div>
	<!-- CONTENT ARTICLE -->
	<ParagraphLeft text={post.body.value} />
</div>
