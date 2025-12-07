<script lang="ts">
	import { LineChart } from 'layerchart';
	import type { AssetRoiSeries } from '$lib/api';

	export let data: AssetRoiSeries[] = [];
	export let title = 'Cumulative ROI';
	export let className = '';
	export let height = 320;
	export let showTitle = false;

	// Helper function to safely parse dates
	const parseDate = (timestamp: string | number | Date): Date | null => {
		try {
			if (!timestamp) return null;
			const date = new Date(timestamp);
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

			const rows = new Map<string, Record<string, unknown>>();

			for (const asset of data) {
				if (!asset || !asset.asset_symbol || !Array.isArray(asset.series)) {
					continue;
				}

				for (const point of asset.series) {
					if (!point || !point.timestamp) continue;

					const date = parseDate(point.timestamp);
					if (!date) continue;

					const roi = point.cumulative_roi_pct;
					if (!isValidNumber(roi)) continue;

					const key = date.toISOString();
					if (!rows.has(key)) {
						rows.set(key, { x: date });
					}
					rows.get(key)![asset.asset_symbol] = roi;
				}
			}

			return Array.from(rows.values()).sort((a, b) => {
				const aDate = a.x as Date;
				const bDate = b.x as Date;
				return aDate.getTime() - bDate.getTime();
			});
		} catch (err) {
			console.error('Error processing cumulative ROI chart data:', err);
			return [];
		}
	})();

	$: seriesDefs = (() => {
		try {
			if (!Array.isArray(data)) return [];
			const colors = ['#3bea83', '#60a5fa', '#f472b6', '#fbbf24', '#a78bfa', '#34d399'];
			return data
				.filter((asset) => asset && asset.asset_symbol)
				.map((asset, index) => ({
					key: asset.asset_symbol,
					label: asset.asset_name ?? asset.asset_symbol,
					color: colors[index % colors.length]
				}));
		} catch (err) {
			console.error('Error processing series definitions:', err);
			return [];
		}
	})();
</script>

<section class={`chart-surface ${className}`} role="region" aria-label={title}>
	{#if showTitle && title}
		<header class="chart-title">{title}</header>
	{/if}
	{#if chartData.length}
		<div class="chart-container" role="img" aria-label={`${title} chart showing ${chartData.length} data points across ${seriesDefs.length} series`}>
			<LineChart
				data={chartData}
				x="x"
				series={seriesDefs}
				axis="both"
				curve="monotoneX"
				tooltip={{ mode: 'bisect-x' }}
				height={height}
				props={{
					spline: {
						strokeWidth: 2.5
					},
					area: {
						opacity: 0.3
					},
					highlight: {
						points: {
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
		min-height: 360px;
		display: flex;
		flex-direction: column;
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
		margin-bottom: 10px;
	}
	.chart-empty {
		color: #8ba299;
		padding: 12px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 200px;
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
		min-width: 220px !important;
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
		min-width: 220px !important;
		font-size: 13px !important;
		line-height: 1.5 !important;
	}
</style>
