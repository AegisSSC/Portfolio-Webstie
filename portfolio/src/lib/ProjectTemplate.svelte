<script>
import DoxBox from "./DoxBox.svelte"
import RefBox from "./RefBox.svelte"

    export let title = "Title"
    export let ShDes = "Short Description"
    let Summary = "Summary"
</script>

<h1> {title} </h1>
<h3> {ShDes}</h3>

<p> {Summary} </p>

<DoxBox/>
<RefBox/>

<!-- !TODO STYLE-IZE -->
<style>
    
</style>