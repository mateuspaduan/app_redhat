<style>
	div {
		margin: 1rem;
		padding: 0.5rem;
	}
</style>

<script>
	import { user } from '../../stores/index';

	export let username;
	export let message;
	let myself = username == $user.username ? true : false;
	let balloonColor = myself ? 'bg-blue-500' : 'bg-red-500';
	let textAlignment = myself ? 'text-right' : 'text-left';
    let textColor = myself ? 'text-white' : 'text-white'
</script>

<div class="{balloonColor} {textAlignment} {textColor}">
	<p class="underline font-bold">{username}</p>
	<p>{message}</p>
</div>
