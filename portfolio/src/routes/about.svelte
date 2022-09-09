<script>
    import CustomButton from "src/lib/CustomButton.svelte";
    import NavBar from "../lib/NavBar.svelte";
    import BioGrid from "../lib/BioGrid.svelte";
    import Longbio from "../lib/longbio.svelte";

    async function download()
    {

    }
</script>

<NavBar/>
<button>
    <a download href="./Resume.pdf"> Click here to Download my Resume</a>>
</button>

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