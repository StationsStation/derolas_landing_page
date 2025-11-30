<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Chart from '$lib/components/ui/chart/index.js';
	import { scaleBand } from 'd3-scale';
	import { BarChart, Highlight, type ChartContextValue } from 'layerchart';
	import { cubicInOut } from 'svelte/easing';

	const chartData = [
		{ coin: 'USDC', base: 186, derive: 80 },
		{ coin: 'OLAS', base: 286, derive: 211 }
	];

	const chartConfig = {
		base: { label: 'Base', color: 'var(--chart-3)' },
		derive: { label: 'Derive', color: 'var(--chart-2)' }
	} satisfies Chart.ChartConfig;

	let context = $state<ChartContextValue>();

	function getTotalCoinBalance(coin: string) {
		const entry = chartData.find((d) => d.coin === coin);
		return entry ? entry.base + entry.derive : 0;
	}
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Available Balances</Card.Title>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<BarChart
				bind:context
				data={chartData}
				xScale={scaleBand().padding(0.25)}
				x="coin"
				axis="x"
				rule={false}
				series={[
					{
						key: 'base',
						label: 'Base',
						color: chartConfig.base.color,
						props: { rounded: 'bottom' }
					},
					{
						key: 'derive',
						label: 'Derive',
						color: chartConfig.derive.color
					}
				]}
				seriesLayout="stack"
				props={{
					bars: {
						stroke: 'none',
						initialY: context?.height,
						initialHeight: 0,
						motion: {
							y: { type: 'tween', duration: 500, easing: cubicInOut },
							height: { type: 'tween', duration: 500, easing: cubicInOut }
						}
					},
					highlight: { area: false },
					xAxis: { format: (d) => d.slice(0, 4) }
				}}
				legend
			>
				{#snippet tooltip()}
					<Chart.Tooltip />
				{/snippet}
				{#snippet belowMarks()}
					<Highlight area={{ class: 'fill-muted' }} />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				{#each chartData as item (item.coin)}
					<div class="flex items-center gap-2 leading-none font-medium">
						Total {item.coin} Value in USD
						<div class="ml-1 rounded text-xs font-semibold text-green-800">
							$ {getTotalCoinBalance(item.coin)}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Card.Footer>
</Card.Root>
