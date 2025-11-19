<script lang="ts">
	import { resolve } from '$app/paths';
</script>

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
	<a
		class="m-1 inline-flex items-center justify-center self-start rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
		href={resolve('/')}>Jeg bekrefter å ha registrert meg i protokollen</a
	>
</div>
