<script>
    import NavBar from '../lib/NavBar.svelte'
    import ContactForm from '../lib/ContactForm.svelte';
    import ContactGrid from '../lib/ContactGrid.svelte';
    import Footer from '../lib/Footer.svelte';
    import Box from '../lib/Box.svelte';
  </script>

<NavBar/>

<h1>CONTACT </h1>
<Box>
  <p> Want to get in touch? Click any of the links below to be redirected to my contact information.</p>
  <ContactGrid/>
</Box>
<p> You may also contact me directly here by submitting your information in the form and I will get back to you within 3 business days. </p>
<ContactForm/>

<Footer/>
