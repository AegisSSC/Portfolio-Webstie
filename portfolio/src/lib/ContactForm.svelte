<script>
	let Fname = '';
	let Lname = '';
	let Email = '';
	let message = '';
    import Message from './Message.svelte'
	import Box from './Box.svelte';
import CustomButton from './CustomButton.svelte';
</script>

<Box class ='align-middle'>
	<h1> Contact Me </h1>
	<p> You may also contact me directly here by submitting your information in the form and I will get back to you within 3 business days. </p>
	<div class = "Info">
		<div class="form-control w-full align-middle">
			<label class="input-group">
				<input bind:value={Fname}  placeholder="Enter your First Name" class="input input-bordered input-primary w-full max-w-xs" />
			</label>
		  </div>
		  <div class="form-control">

			<label class="input-group">
				<input bind:value={Lname}  placeholder="Enter your Last Name" class="input input-bordered input-primary w-full max-w-xs" />
			</label>
		  </div>

	</div>

	<div class = "Contact">
		<div class="flex form-control w-full">
			<label class="input-group">
				<input bind:value={Email}  placeholder="Enter your Email Address" class="input input-bordered input-primary w-full max-w-xl" />
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
			padding: 2%;
			margin: 2% 0 0 0;
			grid-template-columns: repeat(2, 13em);
			grid-template-rows: repeat(1, 2em);
			grid-gap: 10%
		}
	.Contact {
		display: grid;
		padding: 1%;
		margin: 5% 0 5% 0;
		grid-template-columns: repeat(1, 30em);
		grid-template-rows: repeat(1, 2em);
		grid-gap: 10%
	}
	input { width: 350px; height: 50px; }
	textarea { width: 97%; height: 50px; }
</style>
