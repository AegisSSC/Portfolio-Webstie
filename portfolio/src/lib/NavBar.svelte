<script>
	let headings = [
		{url: '/home', name: 'Home'},
		{url: '/about', name: 'About'},
		{url: '/projects', name: 'Projects'},
		{url: '/contact', name: 'Contact'},
	]

</script>

<!-- {#each headings as { url, name }}
<li><a href={url} class="font-mediu px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{name}</a></li>
{/each} -->
<div class="navbar bg-base-100">
	<div class="flex-1">
	  <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal p-0">
		<li><a>Item 1</a></li>
		<li tabindex="0">
		  <a>
			Parent
			<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
		  </a>
		  <ul class="p-2 bg-base-100">
			<li><a>Submenu 1</a></li>
			<li><a>Submenu 2</a></li>
		  </ul>
		</li>
		<li><a>Item 3</a></li>
	  </ul>
	</div>
  </div>

	<!-- <nav class="flex justify-center space-x-10">
		{#each headings as { url, name }}
			<a href={url} class="font-mediu px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{name}</a>
		{/each}
	</nav> -->

