<script>
    import Box from "./Box.svelte";
    let dox = [
        { id: 'J---aiyznGQ', name: 'Paper 1' },
        { id: 'z_AbfPXTKms', name: 'Paper 2' },
        { id: 'OUtn3pvWmpg', name: 'Paper 3' }
    ];
</script>




<Box>
    <h1>Documentation</h1>
    <ul>
        {#each dox as { id, name }, i}
            <li>
                <a target="_blank" href="https://www.youtube.com/watch?v={id}">
                    {i + 1}: {name}
                </a>
            </li>
        {/each}
    </ul>
</Box>