<script>
    // import Box from "./Box.svelte";
    let downloads = [
        { id: 'J---aiyznGQ', name: 'Download Link 1 ' },
        { id: 'z_AbfPXTKms', name: 'Download Link 2' },
        { id: 'OUtn3pvWmpg', name: 'Download Link 3' }
    ];
</script>

<h1>Downloads</h1>
<ul>
    {#each downloads as { id, name }, i}
        <li>
            <a target="_blank" href="https://www.youtube.com/watch?v={id}">
                {i + 1}: {name}
            </a>
        </li>
    {/each}
</ul>

<!-- !TODO STYLE-IZE -->
<style>
    
</style>