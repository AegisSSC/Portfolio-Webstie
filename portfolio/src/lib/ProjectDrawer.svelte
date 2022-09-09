<script>
    // !TODO FIX ALL OF THE URLS TO LINK TO THE PROJECTS
	let projects = [
		{url: '/home', name: 'Project 1', text: 'This is Project 1. More Text will be inserted at a later time.'},
		{url: '/about', name: 'Project 2' , text: 'This is Project 2. More Text will be inserted at a later time.'},
		{url: '/projects', name: 'Project 3', text: 'This is Project 3. More Text will be inserted at a later time.'},
		{url: '/contact', name: 'Project 4', text: 'This is Project 4. More Text will be inserted at a later time.'},
	]

</script>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-primary drawer-button">Project List</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      {#each projects as { url, name, text }}
        <a href={url} class="font-mediu px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{name}</a>
      {/each}
    </ul>
  </div>
</div>