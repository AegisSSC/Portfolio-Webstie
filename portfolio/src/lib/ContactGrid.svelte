<script>
	import { createEventDispatcher } from 'svelte';

	export let value = '';

	const dispatch = createEventDispatcher();

	const select = num => () => value += num;
	const clear  = () => value = '';
	const submit = () => dispatch('submit');
</script>

<div class="ContactGrid">
	<button on:click={select(1)}>
        Email
    </button>
	<button on:click={select(2)}>
        Github
    </button>
	<button on:click={select(3)}>
        LinkedIn
    </button>
	<button on:click={select(4)}>
        DotCard
    </button>

    <!-- 2nd Row 
    <button on:click={select(5)}>PlaceHolder</button>
	<button on:click={select(6)}>PlaceHolder</button>
	<button on:click={select(7)}>PlaceHolder</button>
	<button on:click={select(8)}>PlaceHolder</button> -->

</div>

<!-- !TODO Stylize -->
<style>
	.ContactGrid {
		display: grid;
		margin: 0 0 0 ;
		padding: 5%;
		grid-template-columns: repeat(4, 30%);
		grid-template-rows: repeat(1, 150%);
		grid-gap: 0.1em
	}

	button {
		margin: 0
	}
</style>