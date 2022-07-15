<script>
    let current = 'NONE';
    let B1 = 'HOME'
    let B2 = 'ABOUT'
    let B3 = 'PROJECTS'
    let B4 = 'CONTACT'

    
</script>

<button
	class:active="{current === B1}"
	on:click="{() => current = B1}"
>{B1}</button>

<button
	class:active="{current === B2}"
	on:click="{() => current = B2}"
>{B2}</button>

<button
	class:active="{current === B3}"
	on:click="{() => current = B3}"
>{B3}</button>

<button
	class:active="{current === B4}"
	on:click="{() => current = B4}"
>{B4}</button>



<!-- !TODO Stylize -->
<style>
	button {
		display: row;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>