<script>
	import Form from '../../lib/shared/components/Form.svelte';
	import { user } from '../../stores/index';
	import { goto } from '$app/navigation';
    import {doPost} from '$lib/utils/requests'

	let lastError = '';

	async function handleOnSubmit() {
		console.log('Handling submit on SignUp');

		try {
			const res = await doPost(
				{ username: $user.username, password: $user.password },
				'/register',
			);

			if (res.status === 200) {
				console.log('sign up worked');
				$user.authenticated = true;
				goto('/chat');
			} else {
				console.error(`Error: ${res.status} \n`);
				lastError = "something went wrong with sign up'";
				console.log(lastError);
				$user.password = '';
			}
		} catch (err) {
			lastError = 'Couldn`t reach server';
			console.log(lastError);
			console.error(err);
			$user.password = '';
		}
	}
</script>

<Form handleSubmit="{handleOnSubmit}" lastError="{lastError}" />
