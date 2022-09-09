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
		<div class="form-control">
			<label class="input-group">
			  <input bind:value={Fname} placeholder="Enter your First Name" class="input input-bordered" />
			</label>
		  </div>
		  <div class="form-control">

			<label class="input-group">
			  <input bind:value={Lname} placeholder="Enter your Last Name" class="input input-bordered" />
			</label>
		  </div>

	</div>
	<div class = "Contact">
		<div class="form-control">
			<label class="input-group">
			  <input bind:value={Email} placeholder="Enter your Email Address" class="input input-bordered" />
			</label>
		  </div>
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
			grid-gap: 4em
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