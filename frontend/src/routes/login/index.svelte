<script>
	import Form from "../../lib/shared/components/Form.svelte"
	
	function handleOnSubmit() {
		console.log("I'm the handleOnSubmit() in App.svelte")
	}
</script>

<Form on:submit={handleOnSubmit} type={"login"}>
</Form>