<script>
    import Box from "./Box.svelte";
    import DLBox from "./DLBox.svelte";
    let ref = [
        { id: 'J---aiyznGQ', name: 'Paper 1' },
        { id: 'z_AbfPXTKms', name: 'Paper 2' },
        { id: 'OUtn3pvWmpg', name: 'Paper 3' }
    ];
</script>




<Box>
    <h1>References</h1>
    <ul>
        {#each ref as { id, name }, i}
            <li>
                <a target="_blank" href="https://www.youtube.com/watch?v={id}">
                    {i + 1}: {name}
                </a>
            </li>
        {/each}
    </ul>
    <DLBox/>
</Box>

<!-- !TODO STYLE-IZE -->
<style>
    
</style>