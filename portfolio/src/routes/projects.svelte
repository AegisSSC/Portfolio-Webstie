<script>
	import { onMount } from 'svelte';
    import NavBar from '../lib/NavBar.svelte';
	import Footer from '../lib/Footer.svelte';
	import ProjectDrawer from '../lib/ProjectDrawer.svelte';
	import ProjectSlotList from '../lib/ProjectSlotList.svelte';
</script>


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
		max-width: 100%;
		margin: 0 auto;
		min-height: 11vh0;
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