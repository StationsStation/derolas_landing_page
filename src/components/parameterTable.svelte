<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import Card from '$lib/components/ui/card/card.svelte';
	import { onMount } from 'svelte';

	type Parameter = { key?: string; type?: string; description?: string; value?: string };

	let data: Parameter[] = [];

	onMount(async () => {
		// TODO: wire to real API; placeholder keeps type-check happy
		data = [];
	});

	async function updateParameter(param: Parameter, newValue: string) {
		console.warn('Connect updateParameter to API', param, newValue);
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
