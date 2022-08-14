<script>
	import Form from '../../lib/shared/components/Form.svelte';
	import { user } from '../../stores/index';
	import { goto } from '$app/navigation';
    let lastError =""

	async function handleOnSubmit() {
		let foo = 'baz';
		let bar = 'qux';
		let result = null;
		console.log("Handling submit on SignUp");
		
		try {
            const res = await fetch('http://127.0.0.1:4000/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: $user.username,
				password: $user.password,
			}),
		});
			const json = await res.json();
			result = JSON.stringify(json);
			console.log(res.status);
			if (res.status === 200) {
				console.log('sign up worked');
				$user.authenticated = true;
				goto('/chat');
			} else {
				console.error(`Error: ${res.status} \n ${res.statusText}`);
                lastError = "something went wrong with sign up'"
				console.log(lastError);
				$user.password = '';
			}
		} catch (err) {
            lastError = "Couldn`t reach server"
            console.log(lastError);
            console.error(err)
            $user.password = '';

        }
	}
</script>

<Form handleSubmit="{handleOnSubmit}" lastError="{lastError}"/>
