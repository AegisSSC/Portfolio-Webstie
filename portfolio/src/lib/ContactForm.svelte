<script>
	let Fname = '';
	let Lname = '';
	let Company = '';
	let Email = '';
	let message = '';
    import Message from './Message.svelte'
</script>

<input bind:value={Fname} placeholder="enter your First Name">
<input bind:value={Lname} placeholder="enter your Last Name">
<input bind:value={Company} placeholder="enter your Company">

<input bind:value={Email} placeholder="enter your Email Address">
<Message/>

<!-- !TODO: Figure out Stylizing -->
<style>

</style>