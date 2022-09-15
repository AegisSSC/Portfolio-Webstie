<script>
    import NavBar from '../lib/NavBar.svelte';
    import Footer from '../lib/Footer.svelte';
    import MainPageHero from '../lib/MainPageHero.svelte';
    import Box from '../lib/Box.svelte';
    import BioGrid from '../lib/BioGrid.svelte';
    import Longbio from '../lib/longbio.svelte';
</script>
  
<NavBar/>
<!-- !TODO INSERT A HERO ONTO THE MAIN PAGE -->
<Box>
  <MainPageHero/>
</Box>
<Box>
  <p> Here you will find a little bit more information about who I am and what I have done.
      <br> If you would like to take a copy of my resume, please click the button. 
  </p>
  <br>
  <button class = 'btn-primary text-center btn-outline'>
      <a download href="./Resume.pdf"> Resume</a>
  </button>    
</Box>

<BioGrid/>
<Longbio/>
<Footer/>


<Footer/>

  
    <style>
      /* styles go here */
    


    </style>
    