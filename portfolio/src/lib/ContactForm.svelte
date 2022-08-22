<script>
	let Fname = '';
	let Lname = '';
	let Company = '';
	let Email = '';
	let message = '';
    import Message from './Message.svelte'
	import Box from './Box.svelte';
import CustomButton from './CustomButton.svelte';
</script>
<Box>
	<h2> Contact Me </h2>
	<div class = "Info">
		<input bind:value={Fname} placeholder="Enter your First Name">
		<input bind:value={Lname} placeholder="Enter your Last Name">
	</div>
	<div class = "Contact">
		<input bind:value={Company} placeholder="Enter your Company">
		<input bind:value={Email} placeholder="Enter your Email Address">
	</div>

	<Message/>

	<CustomButton text="Submit"/>
</Box>

<!-- !TODO: Figure out Stylizing -->
<style>
	.Info {
			display: grid;
			grid-template-columns: repeat(2, 9em);
			grid-template-rows: repeat(1, 2em);
			grid-gap: 0.5em
		}
	.Contact{
			display:grid;
			grid-template-columns: repeat(1, 18.5em);
			grid-template-rows: repeat(2,2em);
			grid-gap: 0.1em;
	}
</style>


<div class="form-control">
	<label class="label">
	  <span class="label-text">Your Email</span>
	</label>
	<label class="input-group">
	  <span>Email</span>
	  <input type="text" placeholder="info@site.com" class="input input-bordered" />
	</label>
  </div>