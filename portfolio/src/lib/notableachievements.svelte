<script>
    import Box from "src/lib/Box.svelte";

    let achievements = [
            { text: 'Achievement 1' },
            { text: 'Achievement 2' },
            { text: 'Achievement 3' },
        ];
</script>

<div class = AchieveBox > 
    <Box>
        {#each achievements as { name }, i}
        <li>
                {i + 1}: {name}
        </li>
        {/each}
    </Box>
</div> 


<!-- !TODO Stylize -->
<style>
    .AchieveBox{
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
    }
</style>