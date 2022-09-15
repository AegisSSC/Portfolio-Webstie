<script>
    import NavBar from '../lib/NavBar.svelte'
    import ContactForm from '../lib/ContactForm.svelte';
    import ContactGrid from '../lib/ContactGrid.svelte';
    import Footer from '../lib/Footer.svelte';
    import Box from '../lib/Box.svelte';
  </script>

<NavBar/>

<h1>CONTACT </h1>
<Box class = 'align-middle'>
  <p> Want to get in touch? Click any of the links below to be redirected to my contact information.</p>
  <ContactGrid/>
</Box>

<ContactForm/>

<Footer/>
