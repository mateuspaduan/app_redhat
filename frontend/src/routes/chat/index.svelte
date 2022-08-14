<script>
	import { goto } from '$app/navigation';
	import { user } from '../../stores/index';
	import { onMount } from 'svelte';

	onMount(async () => {
		if ($user.authenticated) {
			console.log('you can stay here');
		} else {
			console.log('you cant stay here');
			goto('/login', { replaceState: true });
		}
	});
</script>

<h1>Welcome to the chat</h1>>
