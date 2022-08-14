<style>
	.footerChat{
		display: grid;
		grid-template-columns: 4fr 1fr;
		grid-column-gap: 1rem;
		padding: 1rem;
	}
</style>

<script>
	import { goto } from '$app/navigation';
	import { user } from '../../stores/index';
	import { onMount } from 'svelte';
	import Message from './message.svelte'
	onMount(async () => {
		if ($user.authenticated) {
			console.log('you can stay here');
		} else {
			console.log('you cant stay here');
			//goto('/login', { replaceState: true });
		}
	});
</script>

<div class="chat">
	<div class="mainChat"> 
		<Message username="lucas" message="rooooi?"></Message>
		<Message username="mateus" message="e ai tudo bem?"></Message>

	</div>
	<div class="footerChat">
		<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Type your message here">
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Send
		  </button>
	</div>
</div>
