<!-- +################################### -->
<!-- comp-site: ACCEUIL APP                  -->
<!-- ####################################### -->
<!-- .................. -->
<!-- MAX WIDTH for APP -->
<!-- .................. -->
<main class="m-auto p-10 max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}">
	<!-- <main class="m-auto space-y-5 max-w-{AX_CONST__FRAME__maxBodyApp} {AX_CONST__FRAME__distanceFromHeader}"> -->
	<!-- 👮👮👮👮👮👮👮👮👮👮👮👮👮👮👮 -->
	{#if $AX_STORE__CONTENT.length && isEntityInputValues($AX_STORE__CONTENT)}
		<Hero
			img={$AX_STORE__CONTENT[0].value}
			text={$AX_STORE__CONTENT[1].value}
		/>
		<SeparatorMedium />
		<Title text={$AX_STORE__CONTENT[2].value} />
		<SeparatorMedium />
		<Paragraph text={$AX_STORE__CONTENT[3].value} />
		<SeparatorMedium />
		<Twocol>
			<Contactcard
				title={$AX_STORE__CONTENT[4].value}
				subtitle={$AX_STORE__CONTENT[5].value}
				mail={$AX_STORE__CONTENT[6].value}
				fb={$AX_STORE__CONTENT[7].value}
				tel={$AX_STORE__CONTENT[8].value}
			/>
			<div
				id="slider--1"
				class="grid place-items-center border-4 border-white "
			>
				<Slider />
			</div>
		</Twocol>
	{/if}
</main>

<script lang="ts">
	onMount(async () => {
		console.debug('🚔 🏎️🐶 ... -- acceuil-app');
		await ACTION__getallSorted<I_ENTITY__uiinputValue>(AX_CONST__DB_COLLECTION__acceuil, AX_CONST__DATASET__acceuil, []);
		axlog({ data: $AX_STORE__CONTENT, db: $AX_STORE__CONTENT_DB }, $page.url.pathname, 'wc -- ****** ACCEUIL_APP ******', false, 'MOUNT', true);
	});
	//

	onDestroy(() => {
		console.log('destroy -------------------------------');
		$AX_STORE__CONTENT = [];
		$AX_STORE__CONTENT_DB = undefined;
	});
	import { page } from '$app/stores';
	import { AX_CONST__DATASET__acceuil } from 'app/0-config/db/datasets/AX_CONST__DATASET_acceuil.json';
	import { AX_CONST__FRAME__distanceFromHeader, AX_CONST__FRAME__maxBodyApp } from 'app/0-config/frame/AX_CONST__FRAME';
	import { axlog } from 'app/lib/utils/axLog';
	import { isEntityInputValues } from 'app/lib/utils/guards';
	import { SERVICE__getAllCollections_Sorted } from 'app/stores/AX_BASE3__STORE_SERVICES';
	import { AX_STORE__CONTENT, AX_STORE__CONTENT_DB } from 'app/stores/AX_BASE1__STORE_CONTENT';
	import { onDestroy, onMount } from 'svelte';
	import Contactcard from '../widgets/Contactcard.svelte';
	import Hero from '../widgets/Hero.svelte';
	import Paragraph from '../widgets/Paragraph.svelte';
	import SeparatorMedium from '../widgets/SeparatorMedium.svelte';
	import Title from '../widgets/Title.svelte';
	import Twocol from '../widgets/Twocol.svelte';
	import { AX_CONST__DB_COLLECTION__acceuil } from 'app/0-config/db/firebase/AX_CONST__dbColletions';
	import { ACTION__getallSorted } from 'app/stores/AX_BASE2__STORE_ACTIONS';
	import Slider from '../widgets/Slider.svelte';
	import { post_s1 } from 'app/0-config/db/datasets/AX_CONST__SLIDESHOW_LOCA';
</script>
