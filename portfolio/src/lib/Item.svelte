<script>
	import Comment from "./Comment.svelte";

	export let item;
	export let returnTo;

	$: url = !item.domain ? `https://news.ycombinator.com/${item.url}` : item.url;
</script>

<a href={returnTo}>&laquo; back</a>

<article>
	<a href="{url}">
		<h1>{item.title}</h1>
		{#if item.domain}
			<small>{item.domain}</small>
		{/if}
	</a>

	<p class="meta">submitted by {item.user} {item.time_ago}
</article>

<div class="comments">
	{#each item.comments as comment}
		<Comment {comment}/>
	{/each}
</div>


<!-- !TODO Stylize -->
<style>
	article {
		margin: 0 0 1em 0;
	}

	a {
		display: block;
		margin: 0 0 1em 0;
	}

	h1 {
		font-size: 1.4em;
		margin: 0;
	}
</style>