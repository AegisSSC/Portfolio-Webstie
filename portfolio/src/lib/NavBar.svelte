<script>
	let headings = [
		{url: '/home', name: 'Home'},
		{url: '/about', name: 'About'},
		{url: '/projects', name: 'Projects'},
		{url: '/contact', name: 'Contact'},
	]

</script>

<!-- Credit: https://daisyui.com/components/navbar/ Adjusted layout to flatten menu-->
<div class="navbar bg-base-100 w-full">
	<div class="flex-1 w-full">
		<!-- !TODO REPLACE THE DASYUI ICON WITH A NEW ICON -->
	  <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal p-0">
		{#each headings as { url, name }}
			<li><a href={url} class="font-mediu px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{name}</a></li>
		{/each}
	  </ul>
	</div>
  </div>

	<!-- <nav class="flex justify-center space-x-10">
		{#each headings as { url, name }}
			<a href={url} class="font-mediu px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{name}</a>
		{/each}
	</nav> -->

