/<script>
	import { onMount } from 'svelte';
    import NavBar from '../lib/NavBar.svelte';
	import Footer from 'src/lib/Footer.svelte';
	import ProjectDrawer from 'src/lib/ProjectDrawer.svelte';
	import ProjectSlotList from 'src/lib/ProjectSlotList.svelte';

	let item;
	let page;

	async function hashchange() {
		// the poor man's router!
		const path = window.location.hash.slice(1);

		if (path.startsWith('/item')) {
			const id = path.slice(6);
			item = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`).then(r => r.json());

			window.scrollTo(0,0);
		} else if (path.startsWith('/top')) {
			page = +path.slice(5);
			item = null;
		} else {
			window.location.hash = '/top/1';
		}
	}

	onMount(hashchange);
</script>

<svelte:window on:hashchange={hashchange}/>

<main>
    <NavBar/>
	<p> Here you will find a collection of all of the active and current projects that I am working on. 
		<br> If there is a specific project that you are wanting to learn more about, please select it from the Project List.
	</p>
	<ProjectDrawer/>
	<ProjectSlotList/>
	<Footer/>
</main>

<style>
	main {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
		min-height: 101vh;
		padding: 1em;
	}

	main :global(.meta) {
		color: #999;
		font-size: 12px;
		margin: 0 0 1em 0;
	}

	main :global(a) {
		color: rgb(0,0,150);
	}
</style>