<script lang="ts">
	// Start: Local Imports

	// Start: External Imports
	import '../styles/tailwind.css';

	// End: External Imports

	// Core services

	// Components
	import Header from '$ui/components/headers/Header.svelte';
	import Footer from '$ui/components/footers/Footer.svelte';
	// End: Local Imports

	// Start: Local component properties

	// End: Local component properties

	// Start: Local component methods

	const toggleThemeMode = (event: CustomEvent<{ dark: boolean }>): void => {
		const htmlTag = document.getElementsByTagName('html').item(0);
		if (htmlTag) {
			htmlTag.className = event.detail.dark ? 'dark' : 'light';
		}
	};

	// End: Local component methods
</script>

<div class="bg-white dark:bg-black main">
	<!-- Start: Header Navigation -->
	<!-- End: Header Navigation -->
	<main>
		<article
		>
			<!-- Start: Defaull layout slot -->
			<slot />
			<!-- End: Defaull layout slot -->
			<!-- Start: Footer -->
			<!-- End: Footer -->
		</article>
	</main>
</div>

<style>
	.main,article,main{
		height: 100%;
	
	}

</style>