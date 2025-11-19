<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>
<main class="h-full">
	{@render children()}
</main>
