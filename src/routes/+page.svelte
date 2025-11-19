<script lang="ts">
	import { resolve } from '$app/paths';
	import PDFViewer from '$lib/PDFViewer.svelte';
</script>

<div class="flex h-full flex-col">
	<h1 class="text-lg font-bold">1. Les HMS introduksjonen</h1>
	<PDFViewer></PDFViewer>
	<a
		class="m-1 inline-flex items-center justify-center self-start rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
		href={resolve('/register')}>Jeg bekrefter å ha lest og forstått informasjonen over</a
	>
</div>
