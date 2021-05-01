<script>
	import Router from 'svelte-spa-routes';

	import Home from './Landing.svelte';
	import NotFound from './NotFound.svelte';
	import ContactsHome from './ContactsGUI/Home.svelte';
	import ContactEdit from './ContactsGUI/ContactEdit.svelte';

	const routes = {
		"/": Home,
		"/contacts": ContactsHome,
		"/contacts/:contactName": ContactEdit,
		"*": NotFound
	}
</script>

<main>
	<h1>Contacts App</h1>
	<Router {routes}/>
	

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>