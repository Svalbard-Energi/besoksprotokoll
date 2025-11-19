<script lang="ts">
	import { useZoom } from '@embedpdf/plugin-zoom/svelte';

	const zoom = useZoom();
	$inspect(zoom);
</script>

<div
	class="mt-4 mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
>
	<div class="flex items-center gap-2">
		<span class="text-xs font-medium tracking-wide text-gray-600 uppercase">Zoom</span>
		<div
			class="min-w-[60px] rounded border border-gray-200 bg-gray-50 px-2 py-1 text-center font-mono text-sm text-gray-800"
		>
			{Math.round(zoom.state.currentZoomLevel * 100)}%
		</div>
	</div>
	<div class="h-6 w-px bg-gray-200"></div>
	<div class="flex items-center gap-1">
		<button
			class="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition-colors duration-150 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100"
			onclick={() => zoom.provides?.zoomOut()}>-</button
		>
		<button
			class="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition-colors duration-150 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100"
			onclick={() => zoom.provides?.zoomIn()}>+</button
		>
		<button
			class="ml-1 flex h-8 items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors duration-150 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100"
			onclick={() => zoom.provides?.requestZoom(1.0)}>Reset</button
		>
	</div>
</div>
