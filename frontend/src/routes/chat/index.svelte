<style>
	.footerChat {
		display: grid;
		grid-template-columns: 4fr 1fr;
		padding: 2rem;
		grid-gap: 1rem;
	}

	.mainChat {
		height: 100%;
		flex-grow: 20;
		flex-shrink: 0;
		overflow-y: scroll;
	}
	.chat {
		height: 100%;
		display: grid;
		grid-template-rows: 1fr 10fr 1fr;
	}
	.chatHeader {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: end;
		align-items: center;
	}

	.icon {
		height: 32px;
		display: flex;
	}
</style>

<script>
	import FaRegUserCircle from 'svelte-icons/fa/FaRegUserCircle.svelte';
	import { goto } from '$app/navigation';
	import { io } from 'socket.io-client';
	import { user, chat } from '../../stores/index';
	import { onMount, afterUpdate, tick } from 'svelte';
	import Message from './message.svelte';
	import FaArrowAltCircleLeft from 'svelte-icons/fa/FaArrowAltCircleLeft.svelte';
	let chatDiv;
	let serverUrl = 'http://localhost:4000';
	let socket
	if (import.meta.env.SERVER_URL) {
		serverUrl = import.meta.SVELTEKIT_STARTER_SERVER_URL;
	}
	onMount(async () => {
		if ($user.authenticated) {
			console.log('you can stay here');
		} else {
			console.log('you cant stay here');
			goto('/login', { replaceState: true });
		}
		socket = io(serverUrl, {
			auth: {
				username: $user.username,
			},
		});
		socket.on('connect', () => {
			console.log(socket.id);
		});

		socket.on('new_user', (newuserUsername) => {
			socket.emit("message", {socketID:socket.id, message:"test"})
			console.log(`New user ${newuserUsername} connected`); // x8WIv7-mJelg7on_ALbx
		});
		socket.on('message', (messagePayload) => {
			console.log("new message");
			console.log(messagePayload)
			$chat.messages.push({ username: messagePayload.username, text: messagePayload.text });
			$chat.messages=$chat.messages //svelte update is triggered by assignments
		});
		socket.on('disconnect', () => {
			console.log(socket.id); // undefined
		});
	});

	async function sendMessage() {
		socket.emit("message", {socketID:socket.id, message:$chat.currentMessage})
		$chat.currentMessage = '';


	}

	afterUpdate(() => {
		console.log('afterUpdate');
		if ($chat.messages.length > 0) scrollToBottom(chatDiv);
	});

	$: if ($chat.messages.length > 0 && chatDiv) {
		console.log('tick');
		scrollToBottom(chatDiv);
	}

	const scrollToBottom = async (node) => {
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	};
</script>

<div class="chat">
	<div class="chatHeader bg-gray-900 ">
		<div class="icon text-white">
			<FaArrowAltCircleLeft />
			<FaRegUserCircle />
		</div>
		<p class="text-white underline tracking-wide font-bold text-2xl text-center"
			>{$user.username}</p
		>
	</div>
	<div class="mainChat" bind:this="{chatDiv}">
		{#each $chat.messages as { username, text }}
			<Message username="{username}" message="{text}" />
		{/each}
	</div>
	<form on:submit|preventDefault="{() => sendMessage}">
		<div class="footerChat bg-gray-900">
			<input
				bind:value="{$chat.currentMessage}"
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				id="inline-full-name"
				type="text"
				placeholder="Type your message here"
			/>
			<button
				on:click="{sendMessage}"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Send
			</button>
		</div>
		<form></form>
	</form></div
>
