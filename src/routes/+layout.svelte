<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/derolas_logo.svg';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />
<slot />
<Footer />
