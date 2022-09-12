<script>
    export let text = "Default Text";
</script>

<button on:click class="btn btn-wide btn-primary">
	{text}
</button>


<!-- !TODO Stylize -->
<style>
	button {
		border-color: #f1c40f;
		color: #f1c40f;
		font-size: 1.25rem;
		background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
		transition: background 400ms ease-in-out;
	}
	button:hover {
		background-position: 0;
		color: #aaa;
	}
</style>