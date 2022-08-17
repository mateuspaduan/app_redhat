<script >
	import Form from '../../lib/shared/components/Form.svelte';
	import { user } from '../../stores/index';
    import { goto } from '$app/navigation';
    import {doPost} from '$lib/utils/requests'
    let lastError = ""
	async function handleOnSubmit() {
		console.log("I'm the handleOnSubmit() for login");
		const res = await doPost({username: $user.username, password:$user.password}, "/login")
        if(res.status ===200){
            console.log("sign in worked")
            $user.authenticated=true
           goto('/chat')
        }else{
            lastError = "something went wrong with sign in"
            console.log(lastError)
            console.warn(lastError)

        }
	}
</script>

<Form handleSubmit={handleOnSubmit} type={"login"} lastError={lastError}>
</Form>