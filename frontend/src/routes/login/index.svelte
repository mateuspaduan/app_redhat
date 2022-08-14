<script >
	import Form from '../../lib/shared/components/Form.svelte';
	import { user } from '../../stores/index';
    import { goto } from '$app/navigation';
    import {doPost} from '$lib/utils/requests'
	async function handleOnSubmit() {
		let foo = 'baz';
		let bar = 'qux';
		let result = null;
		console.log("I'm the handleOnSubmit() in App.svelte");
		const res = await doPost({username: $user.username, password:$user.password})
        if(res.status ===200){
            console.log("sign up worked")
            $user.authenticated=true
           goto('/chat')
        }else{
            console.log("something went wrong with sign up")

        }
	}
</script>

<Form handleSubmit={handleOnSubmit} type={"login"}>
</Form>