<script>
    import CustomButton from "src/lib/CustomButton.svelte";
    import NavBar from "src/lib/NavBar.svelte";
    import BioGrid from "src/lib/BioGrid.svelte";
    import Longbio from "src/lib/longbio.svelte";;

    async function download()
    {

    }
</script>

<NavBar/>

<div class="button-container">
    <button on:click={download}>Resume</button>
</div>

<BioGrid/>
<Longbio/>
<!-- !TODO STYLE-IZE -->
<style>
     .button-container > button {
        width: 128px;
        height: 48px;
        background-color: black;
        color: white;
        font-weight: bold;
        border: none;
    }

    .button-container > button:hover {
        background-color: white;
        color: black;
        outline: black solid 2px;
    }
    
</style>