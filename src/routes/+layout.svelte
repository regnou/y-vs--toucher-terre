<script lang="ts">
	import '@app/app.postcss';

	// splide -Default theme
	import '@splidejs/splide/css';
	// or other themes
	// import '@splidejs/splide/css/skyblue';
	// import '@splidejs/splide/css/sea-green';
	// or only core styles
	// import '@splidejs/splide/css/core';
</script>

<svelte:head>
	<link rel="stylesheet" href="smui.css?v=4" />
	<!-- <link rel="stylesheet" href="smui-dark.css?v=4" media="screen" /> -->

	<!-- 
    https://www.digitalocean.com/community/tutorials/html-preload-prefetch
    // or preload even if not used ?
    <link
  rel="preload"
  as="style"
  href='{base}/smui-dark.css?v=4' />
  <link
  rel="preload"
  as="style"
  href='{base}/smui.css?v=4' /> -->

	<!-- <SeoMetas />
	<FavIcons /> -->
</svelte:head>

<svelte:body class:light-mode={true} />

<slot />
