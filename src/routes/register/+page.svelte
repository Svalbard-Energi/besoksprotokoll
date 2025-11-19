<script lang="ts">
	import { goto } from '$app/navigation';
	import { confetti } from '@neoconfetti/svelte';
	import { tick } from 'svelte';
	import { resolve } from '$app/paths';

	const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

	let isVisible = $state(false);

	async function onClick() {
		isVisible = false;
		await tick();
		isVisible = true;
		await wait(5000);
		goto(resolve('/'));
	}
</script>

{#if isVisible}
	<div>
		<div use:confetti></div>
	</div>
{/if}

<div class="flex h-full flex-col">
	<h1 class="pl-1 text-lg font-bold">2. Registrer deg i protokollen</h1>
	<iframe
		class="h-full"
		title="Besøksprotokoll"
		src="https://forms.office.com/Pages/ResponsePage.aspx?id=kAfOvZoOMk6H46LhSGvhwbXCj2A_N6ROpHGpez2MNg1UNVRWSDNXUUlLNEVDTVlCWE4wUElGRDg4WSQlQCN0PWcu&embed=true"
		frameborder="0"
		marginwidth="0"
		marginheight="0"
		allowfullscreen
	>
	</iframe>
	<button
		onclick={onClick}
		class="mt-1 mb-3 inline-flex items-center justify-center self-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
		>Jeg bekrefter å ha registrert meg i protokollen</button
	>
</div>

<style>
	:global(body) {
		overflow: hidden;
	}

	div {
		display: flex;
		justify-content: center;
	}
</style>
