<script>
    import Box from "../lib/Box.svelte";
	let src = "src/assets/static/longbio.txt"
    let name = "Long Bio"
</script>

<div class = BioBox>
    <Box>
		<text> 
			{src} alt = "{name}"
		</text> 
    </Box>
</div>


<!-- !TODO Stylize -->
<style>
  	.BioBox {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}
</style>