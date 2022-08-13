<script >
	import Form from '../../lib/shared/components/Form.svelte';
	import { user } from '../../stores/index';
    import { goto } from '$app/navigation';

	async function handleOnSubmit() {
		let foo = 'baz';
		let bar = 'qux';
		let result = null;
		console.log("I'm the handleOnSubmit() in App.svelte");
		const res = await fetch('http://127.0.0.1:4000/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username:$user.username,
				password:$user.password,
			}), 
		});

		const json = await res.json();
		result = JSON.stringify(json);
        console.log(res.status)
        if(res.status ===200){
            console.log("sign up worked")
            $user.authenticated=true
           goto('/chat')
        }else{
            console.log("something went wrong with sign up")

        }
	}
</script>

<Form handleSubmit="{handleOnSubmit}" />
