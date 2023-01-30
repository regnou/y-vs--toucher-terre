<script lang="ts">
	// @ts-check
	// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
	// https://stackoverflow.com/questions/71789793/how-to-handle-reset-layout
	// https://stackoverflow.com/questions/72217145/layout-reset-has-been-removed-in-favour-of-named-layouts
	// need to change +layout.svelte to _layout.svelte
	// Have been depreciated, cf :
	// https://stackoverflow.com/questions/70269348/how-can-i-ignore-default-layout-in-svelte-kit
	// => replaced by Advanced routes :
	//     Do NOT change this layout, change the root declinaison inside '(app)' or create your own instead
	// https://kit.svelte.dev/docs/advanced-routing#advanced-layouts
	// import '@app/app.postcss';
</script>

<slot />
