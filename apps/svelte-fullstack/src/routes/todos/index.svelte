<script lang="ts">
	export let items: Todo[];
	console.log(items);
</script>

<div>
	{#each items as item}
		<p>{item.text}</p>
	{/each}
</div>
