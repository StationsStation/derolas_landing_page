<script lang="ts">
	import { LineChart } from 'layerchart';

	export let title: string;
	export let data: { x: string | Date; y: number }[] = [];
	export let yLabel: string | undefined;
	export let className = '';
	export let height = 260;
	export let showTitle = false;

	// Helper function to safely parse dates
	const parseDate = (value: string | Date): Date | null => {
		try {
			if (!value) return null;
			const date = typeof value === 'string' ? new Date(value) : value;
			if (isNaN(date.getTime())) return null;
			return date;
		} catch {
			return null;
		}
	};

	// Helper function to validate numeric value
	const isValidNumber = (value: unknown): value is number => {
		return typeof value === 'number' && !isNaN(value) && isFinite(value);
	};

	$: chartData = (() => {
		try {
			if (!Array.isArray(data) || data.length === 0) return [];

			return data
				.map((point) => {
					if (!point) return null;

					const date = point.x instanceof Date 
						? point.x 
						: parseDate(point.x);
					const value = point.y;

					if (!date || !isValidNumber(value)) {
						return null;
					}

					return {
						x: date,
						value
					};
				})
				.filter((point): point is { x: Date; value: number } => point !== null)
				.sort((a, b) => a.x.getTime() - b.x.getTime());
		} catch (err) {
			console.error('Error processing line chart data:', err);
			return [];
		}
	})();

	$: chartSeries = [{
		key: 'value',
		label: title,
		color: '#3bea83',
		value: 'value'
	}];
</script>

<section class={`chart-surface ${className}`} role="region" aria-label={title}>
	{#if showTitle && title}
		<header class="chart-title">{title}</header>
	{/if}
	{#if chartData.length}
		<div class="chart-container" role="img" aria-label={`${title} chart showing ${chartData.length} data points`}>
			<LineChart
				data={chartData}
				x="x"
				series={chartSeries}
				axis="both"
				curve="monotoneX"
				tooltip={{ mode: 'bisect-x' }}
				height={height}
				props={{
					spline: {
						stroke: '#3bea83',
						strokeWidth: 2.5
					},
					highlight: {
						points: {
							fill: '#3bea83',
							stroke: '#ffffff',
							strokeWidth: 2,
							r: 5
						},
						lines: {
							stroke: 'rgba(255, 255, 255, 0.8)',
							strokeWidth: 1.5
						}
					},
					xAxis: {
						format: (d: Date) => new Intl.DateTimeFormat('en-US', {
							month: 'short',
							day: 'numeric'
						}).format(d)
					},
					yAxis: {
						format: (d: number) => d.toLocaleString(undefined, { maximumFractionDigits: 2 })
					},
					grid: {
						x: {
							stroke: 'rgba(155, 180, 170, 0.15)',
							strokeWidth: 1,
							strokeDasharray: '4 4'
						},
						y: {
							stroke: 'rgba(155, 180, 170, 0.15)',
							strokeWidth: 1,
							strokeDasharray: '4 4'
						}
					}
				}}
			/>
		</div>
		{#if yLabel}
			<p class="chart-label" aria-label="Y-axis label">{yLabel}</p>
		{/if}
	{:else}
		<div class="chart-empty" role="status" aria-live="polite">
			<p>No data available to display</p>
		</div>
	{/if}
</section>

<style>
	.chart-surface {
		border: none;
		border-radius: 0;
		padding: 0;
		background: transparent;
		box-shadow: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-height: 300px;
		position: relative;
		overflow: visible;
	}
	.chart-container {
		flex: 1;
		min-height: 0;
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px 24px;
		margin: 0 auto;
	}
	.chart-container :global(svg),
	.chart-container :global(.lc-root-container) {
		width: 100%;
		height: 100%;
		max-width: 100%;
		flex-shrink: 0;
	}
	/* Axis label styling - ensure Y-axis labels are visible */
	.chart-container :global(.lc-axis-tick-label),
	.chart-container :global(text[class*="axis"]),
	.chart-container :global(.lc-axis-y text),
	.chart-container :global(.lc-axis-x text),
	.chart-container :global(text[fill]) {
		fill: #9bb4aa !important;
		font-size: 12px !important;
		color: #9bb4aa !important;
	}
	/* Grid lines - horizontal dashed lines */
	.chart-container :global(.lc-grid-y-rule),
	.chart-container :global(.lc-grid-x-rule),
	.chart-container :global(line[class*="grid"]) {
		stroke: rgba(155, 180, 170, 0.15) !important;
		stroke-width: 1px !important;
		stroke-dasharray: 4 4 !important;
	}
	.chart-title {
		color: #9bb4aa;
		font-weight: 600;
		margin-bottom: 2px;
	}
	.chart-label {
		color: #8ba299;
		font-size: 0.95rem;
		margin: 0;
	}
	.chart-empty {
		color: #8ba299;
		padding: 12px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 150px;
		flex: 1;
	}
	.chart-empty p {
		margin: 0;
	}
	/* Minimal custom tooltip styling */
	.chart-container :global(.lc-tooltip),
	.chart-container :global(.lc-tooltip-root > div),
	.chart-container :global([data-tooltip]),
	.chart-container :global(div[role="tooltip"]) {
		background: rgba(20, 30, 26, 0.98) !important;
		backdrop-filter: blur(8px) !important;
		border: none !important;
		border-radius: 8px !important;
		padding: 12px 16px !important;
		color: #e4f3ea !important;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;
		min-width: 200px !important;
		font-size: 13px !important;
		line-height: 1.5 !important;
	}
	:global(.custom-tooltip) {
		background: rgba(20, 30, 26, 0.98) !important;
		backdrop-filter: blur(8px) !important;
		border: none !important;
		border-radius: 8px !important;
		padding: 12px 16px !important;
		color: #e4f3ea !important;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;
		min-width: 200px !important;
		font-size: 13px !important;
		line-height: 1.5 !important;
	}
</style>
