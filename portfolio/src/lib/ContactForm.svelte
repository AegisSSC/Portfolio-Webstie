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
		<div class="form-control w-full">
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
		<div class="flex form-control w-full">
			<label class="input-group">
			  <input bind:value={Email} placeholder="Enter your Email Address" class="input input-bordered min-w-max" />
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
			grid-template-columns: repeat(2, 9em);
			grid-template-rows: repeat(1, 2em);
			grid-gap: 10%
		}
	.Contact {
		display: grid;
		padding: 1%;
		margin: 5% 0 5% 0;
		grid-template-columns: repeat(1, 12em);
		grid-template-rows: repeat(1, 3em);
		grid-gap: 10%
	}

</style>
