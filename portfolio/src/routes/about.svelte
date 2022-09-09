<script>
    import CustomButton from "src/lib/CustomButton.svelte";
    import NavBar from "../lib/NavBar.svelte";
    import BioGrid from "../lib/BioGrid.svelte";
    import Longbio from "../lib/longbio.svelte";
    import Footer from "../lib/Footer.svelte"
    async function download()
    {

    }
</script>

<NavBar/>
<p> Here is the About Me page. Here you will find a little bit more information about who I am and what I have done.
    <br> If you would like to take a copy of my resume, please click the button. 
</p>
<button>
    <a download href="./Resume.pdf"> Resume</a>>
</button>

<BioGrid/>
<Longbio/>
<Footer/>


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