<script>
	let headings = [
		{url: '/home', name: 'HOME'},
		{url: '/about', name: 'ABOUT'},
		{url: '/projects', name: 'PROJECTS'},
		{url: '/contact', name: 'CONTACT'},
	]

</script>

<div class="bg-obsidian">

	<nav class="flex justify-center space-x-10">
		{#each headings as { url, name }}
			<a href={url} class="font-mediu px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{name}</a>
		{/each}
	</nav>
</div>
