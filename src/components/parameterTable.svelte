<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import Card from '$lib/components/ui/card/card.svelte';
	import { OpenAPI, DefaultService } from '$lib/api';
	import type { Parameter } from '$lib/api/models/Parameter';
	import { onMount } from 'svelte';

	let data: Parameter[] = [];

	onMount(async () => {
		OpenAPI.BASE = 'http://localhost:8000';
		data = await DefaultService.getParameters();
	});

	// post an update to a parameter
	async function updateParameter(param: Parameter, newValue: string) {
		let result = await DefaultService.postParameters(param);
		if (!result) {
			alert(`Failed to update parameter ${param.key}`);
			return;
		}
		data = await DefaultService.getParameters();
		alert(`Parameter ${param.key} updated to ${newValue}`);
	}
</script>

<!-- Add a new line -->

<Card>
	<h1 class="mb-4 px-2 text-lg font-medium">Parameter Table</h1>
	<Table.Root class="p-6">
		<Table.Header class="bg-slate-800/70">
			<Table.Row>
				<Table.Head>Parameter Name</Table.Head>
				<Table.Head>Type</Table.Head>
				<Table.Head>Description</Table.Head>
				<Table.Head class="text-center">Update Parameter</Table.Head>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			{#each data as parameter, i (parameter.key ?? i)}
				<Table.Row>
					<Table.Cell class="font-mono text-xs">{parameter.key}</Table.Cell>
					<Table.Cell>{parameter.type}</Table.Cell>
					<Table.Cell>{parameter.description}</Table.Cell>
					<Table.Cell>
						<div class="parameter-input-wrapper">
							<input
								type="text"
								bind:value={parameter.value}
								class="w-28 rounded-md border border-slate-500 bg-slate-800 px-2 py-1 text-xs text-slate-100 focus:border-sky-400 focus:ring-2 focus:ring-sky-500 focus:outline-none"
							/>
							<Button
								variant="secondary"
								onclick={() => updateParameter(parameter, parameter.value)}
							>
								Update
							</Button>
						</div>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</Card>
