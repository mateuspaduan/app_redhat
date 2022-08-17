<script lang="ts">
	import ExternalLink from '$ui/components/external-link/ExternalLink.svelte';

	const linkClass =
		'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 transition';
</script>

<footer class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
	<hr class="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
	<slot />
	<div class="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
		<div class="flex flex-col space-y-4">
			<a sveltekit:prefetch href="/" class="{linkClass}" aria-label="{'Footer home link'}"
				>Home</a
			>
			<a
				sveltekit:prefetch
				href="/login"
				class="{linkClass}"
				aria-label="{'Footer about link'}"
			>
				Login
			</a>
			<a
				sveltekit:prefetch
				href="/signup"
				class="{linkClass}"
				aria-label="{'Footer about link'}"
			>
				Sign Up
			</a>
		</div>
		<div class="flex flex-col space-y-4">
			<a
			sveltekit:prefetch
			href="/chat"
			class="{linkClass}"
			aria-label="{'Footer about link'}"
		>
			Chat
		</a>
			<ExternalLink
				href="https://www.linkedin.com/in/asnavneetsharma/"
				cssClasses="{linkClass}"
				ariaLabel="{'Footer LinkedIn link'}">LinkedIn</ExternalLink
			>
			
		</div>
	
	</div>
</footer>
