<style>
	.main {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mainForm {
		width: 50%;
	}
</style>

<script>
	import { user } from '../../../stores/index';
	export let type;
  export let handleSubmit
	/**
* @type {string}
*/
	let textButton;
	if (type === 'login') {
		textButton = 'Sign In';
	} else {
		textButton = 'Sign Up';
	}
	function validate() {
		console.log($user.username);
    handleSubmit()
	}
</script>

<div class="main">
	<div class="mainForm">
		<div class="w-full max-w-xs">
			<form
				class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				on:submit|preventDefault="{validate}"
			>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
						Username
					</label>
					<input
						bind:value="{$user.username}"
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						placeholder="Username"
					/>
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
						Password
					</label>
					<input
						bind:value="{$user.password}"
						class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
					/>
					<p class="text-red-500 text-xs italic">Please choose a password.</p>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						{textButton}
					</button>
					{#if type=="login"}
						<a
							class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a>
					{/if}
				</div>
			</form>
			<p class="text-center text-gray-500 text-xs">
				&copy;2020 Acme Corp. All rights reserved.
			</p>
		</div>
	</div>
</div>
