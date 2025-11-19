<script lang="ts">
	import { usePdfiumEngine } from '@embedpdf/engines/svelte';
	import { EmbedPDF } from '@embedpdf/core/svelte';
	import { createPluginRegistration } from '@embedpdf/core';

	// Import the essential plugins and their components
	import { ViewportPluginPackage, Viewport } from '@embedpdf/plugin-viewport/svelte';
	import {
		Scroller,
		ScrollPluginPackage,
		type RenderPageProps
	} from '@embedpdf/plugin-scroll/svelte';
	import { LoaderPluginPackage } from '@embedpdf/plugin-loader/svelte';
	import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/svelte';
	import { base } from '$app/paths';
	import { ZoomPluginPackage, ZoomMode } from '@embedpdf/plugin-zoom/svelte';

	// 1. Initialize the engine with the Svelte store
	const pdfEngine = usePdfiumEngine();

	// 2. Register the plugins you need
	const plugins = [
		createPluginRegistration(LoaderPluginPackage, {
			loadingOptions: {
				type: 'url',
				pdfFile: {
					id: 'HMS-pdf',
					url: `${window.location.origin}${base}/test.pdf`
				}
			}
		}),
		createPluginRegistration(ViewportPluginPackage),
		createPluginRegistration(ScrollPluginPackage),
		createPluginRegistration(RenderPluginPackage),
		createPluginRegistration(ZoomPluginPackage, {
			// Set the initial zoom level when a document loads
			defaultZoomLevel: ZoomMode.FitPage
		})
	];
</script>

{#snippet RenderPageSnippet(page: RenderPageProps)}
	<div style:width="{page.width}px" style:height="{page.height}px" style:position="relative">
		<RenderLayer pageIndex={page.pageIndex} />
	</div>
{/snippet}

<div class="pdf-container" style="border: 1px solid black;">
	{#if pdfEngine.isLoading || !pdfEngine.engine}
		<div class="loading-pane">Loading PDF Engine...</div>
	{:else}
		<EmbedPDF engine={pdfEngine.engine} {plugins}>
			<Viewport class="viewport-class">
				<Scroller {RenderPageSnippet} />
			</Viewport>
		</EmbedPDF>
	{/if}
</div>

<style>
	.loading-pane {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.viewport-class {
		background-color: #f1f3f5;
	}
	.pdf-container {
		flex: 1;
		min-height: 0; /* super important for scrollable children in flex layouts */
		border: 1px solid black;
		display: flex; /* so children can do height:100% inside */
		flex-direction: column;
	}
</style>
