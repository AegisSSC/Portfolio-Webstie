<script>
	let projects = [
		{url: '/home', name: 'Project 1', text: 'This is Project 1. More Text will be inserted at a later time.', image: 'https://placeimg.com/260/400/arch'},
		{url: '/about', name: 'Project 2' , text: 'This is Project 2. More Text will be inserted at a later time.', image: 'https://placeimg.com/260/400/arch'},
		{url: '/projects', name: 'Project 3', text: 'This is Project 3. More Text will be inserted at a later time.',image: 'https://placeimg.com/260/400/arch'},
		{url: '/contact', name: 'Project 4', text: 'This is Project 4. More Text will be inserted at a later time.', image: 'https://placeimg.com/260/400/arch'},
	]

</script>

{#each projects as { url, name, text, image }}
    <slot>
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src= {image} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">
                        <a href={url} class="font-mediu px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">{name}</a></h1>
                    <p class="py-6">{text}</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    </slot>

{/each}