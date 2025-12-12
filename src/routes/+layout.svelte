<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';
	import derolas from '$lib/assets/derolas_logo.svg';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		// Global error handler to catch uncaught exceptions
		// This prevents SES_UNCAUGHT_EXCEPTION errors from browser extensions
		const handleError = (event: ErrorEvent) => {
			// Only log if there's actually an error message or it's not from SES
			if (event.error !== null || event.message) {
				console.error('Uncaught error:', event.error || event.message);
			}
			// Prevent default error handling for null errors (often from browser extensions)
			if (event.error === null && !event.message) {
				event.preventDefault();
			}
		};

		const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
			console.error('Unhandled promise rejection:', event.reason);
			// Prevent default handling for null rejections
			if (event.reason === null || event.reason === undefined) {
				event.preventDefault();
			}
		};

		window.addEventListener('error', handleError);
		window.addEventListener('unhandledrejection', handleUnhandledRejection);

		return () => {
			window.removeEventListener('error', handleError);
			window.removeEventListener('unhandledrejection', handleUnhandledRejection);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={derolas} />
</svelte:head>

<NavBar />
<slot />
<Footer />
