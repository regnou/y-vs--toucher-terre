<!-- ######################################### -->
<!-- POST -->
<!-- ######################################### -->
{#if post}
	<div class="m-2">
		<!--               -->
		<!-- TITLE ARTICLE -->
		<!--               -->
		<div class="flex place-items-center py-3 border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}">
			<img
				style="border:{AX_CONST__FRAME__isDebugBorder ? '1px solid blue' : 'none'}"
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
		<div class="mdc-typography--caption">Crée le {post.createdAt}</div>
		<SeparatorMedium />
	</div>
{/if}

<script lang="ts">
	export let post: I_ENTITY__post | undefined = undefined;
	let imgIcon = '/media/icon/icon-infinity--creme.png';
	//
	// title={post.title.iv} richTextArea={post.slug.iv}
	// export let richTextArea = '';
	import { AX_CONST__FRAME__isDebugBorder } from 'app/0-config/config-frame/AX_CONST__FRAME__debug';
	import ParagraphLeft from './ParagraphLeft.svelte';
	import SeparatorMedium from './SeparatorMedium.svelte';
</script>
