<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { DefaultService, OpenAPI, type PoolMetricsResponse } from '$lib/api';
	import SharePriceChart from '$lib/components/charts/SharePriceChart.svelte';
	import CumulativeRoiChart from '$lib/components/charts/CumulativeRoiChart.svelte';
	import SimpleLineChart from '$lib/components/charts/SimpleLineChart.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// Safe initialization with proper null checks
	const pools = data?.pools ?? [];
	let selectedPool = pools.length > 0 ? (pools[0]?.id ?? '') : '';
	let poolMetrics: PoolMetricsResponse | null = data?.poolMetrics ?? null;
	let loading = false;
	let loadError: string | null = data?.error ?? null;

	$: primaryPool = pools.length > 0 
		? (pools.find((p) => p?.id === selectedPool) ?? pools[0] ?? null)
		: null;

	const formatUsd = (value?: number) =>
		value === undefined ? '—' : `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
	const formatPct = (value?: number) =>
		value === undefined ? '—' : `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;

	// Helper functions with error handling
	const processLatestVolumes = () => {
		try {
			return data?.volumes?.series !== undefined
				? Object.values(data.volumes.series).flatMap((series) => {
						if (!Array.isArray(series)) return [];
						const last = series.at(-1);
						return last ? [last] : [];
					})
				: [];
		} catch (err) {
			console.error('Error processing volumes:', err);
			return [];
		}
	};

	const calculateTotalVolume = (volumes: unknown[]) => {
		try {
			return volumes.reduce((sum: number, item: any) => sum + ((item?.total_volume ?? 0) || 0), 0);
		} catch (err) {
			console.error('Error calculating total volume:', err);
			return 0;
		}
	};

	const calculateDerolasVolume = (volumes: unknown[]) => {
		try {
			return volumes.reduce((sum: number, item: any) => sum + ((item?.derolas_volume ?? 0) || 0), 0);
		} catch (err) {
			console.error('Error calculating derolas volume:', err);
			return 0;
		}
	};

	const calculateVolumeSharePct = (derolasVol: number, totalVol: number) => {
		try {
			return totalVol > 0 && derolasVol >= 0 ? (derolasVol / totalVol) * 100 : undefined;
		} catch (err) {
			console.error('Error calculating pool volume share:', err);
			return undefined;
		}
	};

	const calculateTvlSharePct = (tvl: number | undefined, totalVol: number) => {
		try {
			return totalVol > 0 && tvl !== undefined ? ((tvl ?? 0) / totalVol) * 100 : undefined;
		} catch (err) {
			console.error('Error calculating pool TVL share:', err);
			return undefined;
		}
	};

	$: latestVolumes = processLatestVolumes();
	$: totalVolume = calculateTotalVolume(latestVolumes);
	$: derolasVolume = calculateDerolasVolume(latestVolumes);
	$: poolTvl = poolMetrics?.tvl_usd ?? undefined;
	$: poolVolumeSharePct = calculateVolumeSharePct(derolasVolume, totalVolume);
	$: poolTvlSharePct = calculateTvlSharePct(poolTvl, totalVolume);

	$: metrics = {
		currentApr: poolMetrics?.current_apr,
		fees24h: poolMetrics?.fees_24h_usd,
		totalShares: poolMetrics?.total_shares,
		tvlUsd: poolMetrics?.tvl_usd,
		currentSharePrice: poolMetrics?.current_share_price_usd,
		currentRoi: poolMetrics?.current_roi_pct,
		balancerBaseTvl: totalVolume || undefined,
		derolasPoolTvl: poolTvl,
		totalVolumeBase: totalVolume || undefined,
		derolasPoolVolume: derolasVolume || undefined,
		avgBalancerEfficiency: undefined,
		derolasPoolEfficiency: undefined,
		balTvlSharePct: poolTvlSharePct,
		balVolumeSharePct: poolVolumeSharePct
	};

	const LOOKBACK_DAYS = 30;

	const fetchMetrics = async (poolId: string) => {
		if (!poolId) return;
		loading = true;
		loadError = null;
		try {
			const end = new Date();
			const start = new Date(end);
			start.setDate(end.getDate() - LOOKBACK_DAYS);
			poolMetrics = await DefaultService.getPoolMetrics(
				poolId,
				start.toISOString(),
				end.toISOString(),
				'1d'
			);
		} catch (err) {
			loadError = err instanceof Error ? err.message : 'Failed to load pool metrics';
		} finally {
			loading = false;
		}
	};

	onMount(() => {
		try {
			OpenAPI.BASE = data?.apiBase ?? '';
			const body = document.body;
			if (body) {
				const prevChartAccent = body.style.getPropertyValue('--chart-accent');
				body.style.setProperty('--chart-accent', '#3bea83');

				onDestroy(() => {
					try {
						if (body) {
							if (prevChartAccent) {
								body.style.setProperty('--chart-accent', prevChartAccent);
							} else {
								body.style.removeProperty('--chart-accent');
							}
						}
					} catch (err) {
						console.error('Error restoring chart accent:', err);
					}
				});
			}
			if (!poolMetrics && selectedPool) {
				fetchMetrics(selectedPool);
			}
		} catch (err) {
			console.error('Error in onMount:', err);
			loadError = err instanceof Error ? err.message : 'Failed to initialize page';
		}
	});

	$: if (selectedPool && poolMetrics?.pool_id !== selectedPool && !loading) {
		try {
			fetchMetrics(selectedPool);
		} catch (err) {
			console.error('Error in reactive statement:', err);
			loadError = err instanceof Error ? err.message : 'Failed to fetch metrics';
		}
	}

	// Helper functions for series processing
	const getSharePriceSeries = (metrics: PoolMetricsResponse | null) => {
		try {
			const series = Array.isArray(metrics?.share_price_series) ? metrics.share_price_series : [];
			console.log('[Stats] Share price series:', series.length, 'points', series.slice(0, 3));
			return series;
		} catch (err) {
			console.error('Error processing share price series:', err);
			return [];
		}
	};

	const getRoiSeries = (metrics: PoolMetricsResponse | null) => {
		try {
			return Array.isArray(metrics?.asset_cumulative_roi_series)
				? metrics.asset_cumulative_roi_series
				: [];
		} catch (err) {
			console.error('Error processing ROI series:', err);
			return [];
		}
	};

	// Helper function to safely parse timestamp
	const parseTimestamp = (timestamp: string | number | Date | undefined): Date | null => {
		try {
			if (!timestamp) return null;
			const date = new Date(timestamp);
			if (isNaN(date.getTime())) return null;
			return date;
		} catch {
			return null;
		}
	};

	// Helper function to validate and sanitize numeric values
	const sanitizeValue = (value: unknown, min: number | null = 0): number | null => {
		if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
			return null;
		}
		// If min is null, allow any finite number (useful for ROI which can be negative)
		if (min === null) {
			return value;
		}
		return Math.max(value, min);
	};

	const getTvlSeries = (metrics: PoolMetricsResponse | null) => {
		try {
			if (!Array.isArray(metrics?.tvl_series)) {
				console.log('[Stats] TVL series not an array:', metrics?.tvl_series);
				return [];
			}

			const series = metrics.tvl_series
				.map((p) => {
					if (!p) return null;
					const date = parseTimestamp(p.timestamp);
					const value = sanitizeValue(p.tvl_usd);
					if (!date || value === null) {
						console.warn('[Stats] Invalid TVL point:', p);
						return null;
					}
					return { x: date, y: value };
				})
				.filter((point): point is { x: Date; y: number } => point !== null)
				.sort((a, b) => a.x.getTime() - b.x.getTime());
			
			console.log('[Stats] TVL series processed:', series.length, 'points');
			return series;
		} catch (err) {
			console.error('Error processing TVL series:', err);
			return [];
		}
	};

	const getFeesSeries = (metrics: PoolMetricsResponse | null) => {
		try {
			if (!Array.isArray(metrics?.fees_series)) return [];

			return metrics.fees_series
				.map((p) => {
					if (!p) return null;
					const date = parseTimestamp(p.timestamp);
					const value = sanitizeValue(p.fees_usd);
					if (!date || value === null) return null;
					return { x: date, y: value };
				})
				.filter((point): point is { x: Date; y: number } => point !== null)
				.sort((a, b) => a.x.getTime() - b.x.getTime());
		} catch (err) {
			console.error('Error processing fees series:', err);
			return [];
		}
	};

	const getLpSharesSeries = (metrics: PoolMetricsResponse | null) => {
		try {
			if (!Array.isArray(metrics?.lp_shares_series)) return [];

			return metrics.lp_shares_series
				.map((p) => {
					if (!p) return null;
					const date = parseTimestamp(p.timestamp);
					const value = sanitizeValue(p.shares);
					if (!date || value === null) return null;
					return { x: date, y: value };
				})
				.filter((point): point is { x: Date; y: number } => point !== null)
				.sort((a, b) => a.x.getTime() - b.x.getTime());
		} catch (err) {
			console.error('Error processing LP shares series:', err);
			return [];
		}
	};

	$: sharePriceSeries = getSharePriceSeries(poolMetrics);
	$: roiSeries = getRoiSeries(poolMetrics);
	$: tvlSeries = getTvlSeries(poolMetrics);
	$: feesSeries = getFeesSeries(poolMetrics);
	$: lpSharesSeries = getLpSharesSeries(poolMetrics);

	// Debug: Log when poolMetrics changes
	$: if (poolMetrics) {
		console.log('[Stats] PoolMetrics received:', {
			pool_id: poolMetrics.pool_id,
			share_price_series_length: poolMetrics.share_price_series?.length,
			tvl_series_length: poolMetrics.tvl_series?.length,
			fees_series_length: poolMetrics.fees_series?.length,
			lp_shares_series_length: poolMetrics.lp_shares_series?.length,
			roi_series_length: poolMetrics.asset_cumulative_roi_series?.length,
		});
	}
</script>

<main class="mx-auto grid max-w-[1100px] gap-6 px-6 pt-15 pb-18">
	<section class="page-hero pb-8">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center">
			Derolas Performance
		</h1>
		<p class="lede text-lg md:text-xl text-center text-[#b5c9bf] font-normal">
			The Balancer pool is the heart of the Derolas ecosystem, providing liquidity and capturing value
			for holders.
		</p>
	</section>

	{#if data.pools.length}
		<section class="pool-select">
			<label for="pool-select">Select Balancer pool</label>
			<div class="select-shell">
				<select
					id="pool-select"
					bind:value={selectedPool}
					aria-label="Select Balancer pool"
					class="select"
				>
					{#each data.pools as pool (pool.id)}
						<option value={pool.id}>{pool.name}</option>
					{/each}
				</select>
			</div>
			{#if loading}
				<p class="muted text-sm">Loading metrics…</p>
			{/if}
		</section>
	{/if}

	{#if loadError}
		<section class="alert">Unable to load data: {loadError}</section>
	{/if}

	{#if loading && !poolMetrics}
		<section class="chart-card">
			<div class="chart-head">
				<div>
					<p class="label">Derolas Share Price</p>
					{#if primaryPool}
						<p class="muted">{primaryPool.name}</p>
					{/if}
				</div>
			</div>
			<div class="chart-skeleton" aria-label="Loading chart data">
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
			</div>
		</section>
	{:else if poolMetrics}
		<section class="chart-card">
			<div class="chart-head">
				<div>
					<p class="label">Derolas Share Price</p>
					{#if primaryPool}
						<p class="muted">{primaryPool.name}</p>
					{/if}
				</div>
			</div>
			<SharePriceChart data={sharePriceSeries} />
		</section>
	{/if}

	<section class="metrics-grid">
		<div class="metric-card">
			<p class="muted">Current APR</p>
			<p class="metric-value">{formatPct(metrics.currentApr)}</p>
		</div>
		<div class="metric-card">
			<p class="muted">Fees 24h</p>
			<p class="metric-value">{formatUsd(metrics.fees24h)}</p>
		</div>
		<div class="metric-card">
			<p class="muted">Total Shares</p>
			<p class="metric-value">{metrics.totalShares ?? '—'}</p>
		</div>
		<div class="metric-card">
			<p class="muted">Total Value Locked (TVL)</p>
			<p class="metric-value">{formatUsd(metrics.tvlUsd)}</p>
		</div>
		<div class="metric-card">
			<p class="muted">Current Share Price</p>
			<p class="metric-value">{formatUsd(metrics.currentSharePrice)}</p>
		</div>
		<div class="metric-card">
			<p class="muted">Current ROI</p>
			<p class="metric-value">{formatPct(metrics.currentRoi)}</p>
		</div>
	</section>

	{#if loading && !poolMetrics}
		<section class="chart-card">
			<div class="chart-head">
				<p class="label">Cumulative ROI of Assets in Bundle</p>
			</div>
			<div class="chart-skeleton" aria-label="Loading chart data">
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
			</div>
		</section>

		<section class="mini-chart-row">
			<div class="chart-card mini">
				<div class="chart-head">
					<p class="label">TVL (USD) over previous 30 Days</p>
				</div>
				<div class="chart-skeleton" aria-label="Loading chart data">
					<div class="skeleton-bar"></div>
					<div class="skeleton-bar"></div>
					<div class="skeleton-bar"></div>
				</div>
			</div>
			<div class="chart-card mini">
				<div class="chart-head">
					<p class="label">Fees (USD) over previous 30 Days</p>
				</div>
				<div class="chart-skeleton" aria-label="Loading chart data">
					<div class="skeleton-bar"></div>
					<div class="skeleton-bar"></div>
					<div class="skeleton-bar"></div>
				</div>
			</div>
		</section>

		<section class="chart-card">
			<div class="chart-head">
				<p class="label">Derolas LP Shares Amount</p>
			</div>
			<div class="chart-skeleton" aria-label="Loading chart data">
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
				<div class="skeleton-bar"></div>
			</div>
		</section>
	{:else if poolMetrics}
		<section class="chart-card">
			<div class="chart-head">
				<p class="label">Cumulative ROI of Assets in Bundle</p>
			</div>
			<CumulativeRoiChart data={roiSeries} />
		</section>

		<section class="mini-chart-row">
			<div class="chart-card mini">
				<div class="chart-head">
					<p class="label">TVL (USD) over previous 30 Days</p>
				</div>
				<SimpleLineChart title="TVL (USD)" data={tvlSeries} yLabel="TVL (USD)" />
			</div>
			<div class="chart-card mini">
				<div class="chart-head">
					<p class="label">Fees (USD) over previous 30 Days</p>
				</div>
				<SimpleLineChart title="Fees (USD)" data={feesSeries} yLabel="Fees (USD)" />
			</div>
		</section>

		<section class="chart-card">
			<div class="chart-head">
				<p class="label">Derolas LP Shares Amount</p>
			</div>
			<SimpleLineChart title="LP Shares" data={lpSharesSeries} yLabel="Shares" />
		</section>
	{/if}

	<section class="exchange-section">
		<h2>Derolas Exchange Share Metrics</h2>
		<p class="exchange-subtitle">
			Insights into the share of the Derolas pool relative to total Balancer volume.
		</p>
		<div class="metrics-grid wide">
			<div class="metric-card">
				<p class="muted">Balancer Base TVL</p>
				<p class="metric-value">{formatUsd(metrics.balancerBaseTvl)}</p>
			</div>
			<div class="metric-card">
				<p class="muted">Derolas Pool TVL</p>
				<p class="metric-value">{formatUsd(metrics.derolasPoolTvl)}</p>
			</div>
			<div class="metric-card">
				<p class="muted">Total Volume on Balancer Base</p>
				<p class="metric-value">{formatUsd(metrics.totalVolumeBase)}</p>
			</div>
			<div class="metric-card">
				<p class="muted">Volume from Derolas Pool</p>
				<p class="metric-value">{formatUsd(metrics.derolasPoolVolume)}</p>
			</div>
			<div class="metric-card">
				<p class="muted">Average Balancer Capital Efficiency Ratio</p>
				<p class="metric-value">{metrics.avgBalancerEfficiency ?? '—'}</p>
			</div>
			<div class="metric-card">
				<p class="muted">Derolas Pool Capital Efficiency Ratio</p>
				<p class="metric-value">{metrics.derolasPoolEfficiency ?? '—'}</p>
			</div>
			<div class="metric-card">
				<p class="muted">Total % of Bal TVL on Base is Derolas</p>
				<p class="metric-value">{formatPct(metrics.balTvlSharePct)}</p>
			</div>
			<div class="metric-card">
				<p class="muted">Total % of Bal Volume on Base is Derolas</p>
				<p class="metric-value">{formatPct(metrics.balVolumeSharePct)}</p>
			</div>
		</div>
	</section>
</main>

<style>
	.chart-card {
		border: 1px solid #1e2a26;
		background: linear-gradient(160deg, rgba(17, 26, 22, 0.9), rgba(11, 17, 15, 0.95));
		border-radius: 18px;
		padding: 24px 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
	}
	.chart-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.label {
		color: #9bb4aa;
		font-weight: 600;
	}
	.muted {
		color: #8ba299;
	}
	.alert {
		border: 1px solid #3b2a2a;
		background: #1a1212;
		color: #f3b0a0;
		padding: 12px 16px;
		border-radius: 12px;
	}
	.chart-shell {
		width: 100%;
		flex: 1;
		min-height: 460px;
		display: flex;
		align-items: stretch;
		justify-content: stretch;
	}
	.placeholder {
		border: 1px dashed rgba(159, 214, 185, 0.25);
		border-radius: 14px;
		display: grid;
		place-items: center;
		background: radial-gradient(circle at 30% 20%, rgba(63, 234, 131, 0.08), transparent 40%),
			linear-gradient(145deg, rgba(15, 23, 19, 0.6), rgba(12, 18, 16, 0.9));
	}
	.placeholder-content {
		text-align: center;
		display: grid;
		gap: 6px;
	}
	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
	}
	.metrics-grid.wide {
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}
	.metric-card {
		border: 1px solid #1e2a26;
		background: linear-gradient(150deg, rgba(14, 22, 19, 0.82), rgba(11, 17, 15, 0.94));
		border-radius: 14px;
		padding: 18px;
		display: grid;
		gap: 6px;
		text-align: center;
	}
	.metric-value {
		font-size: 1.6rem;
		font-weight: 650;
		color: #e8f7ef;
	}
	.mini-chart-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 14px;
	}
	.chart-card.mini {
		min-height: 360px;
		padding: 24px 44px;
	}
	.exchange-section {
		display: grid;
		gap: 14px;
		text-align: center;
		margin-top: 10px;
	}
	.exchange-section h2 {
		font-size: 1.4rem;
		font-weight: 650;
	}
	.exchange-subtitle {
		color: #8ea9a0;
		max-width: 720px;
		margin: 0 auto;
		line-height: 1.6;
	}
	.pool-select {
		display: grid;
		gap: 6px;
		max-width: 860px;
		width: 100%;
		margin: 0 auto;
	}
	.pool-select label {
		color: #9bb4aa;
		font-size: 0.95rem;
	}
	.select-shell {
		border: 1px solid #1e2a26;
		border-radius: 12px;
		background: linear-gradient(135deg, rgba(16, 24, 21, 0.9), rgba(11, 17, 15, 0.92));
		padding: 6px 10px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
	}
	.select {
		width: 100%;
		background: transparent;
		color: #e5f6ed;
		border: none;
		outline: none;
		padding: 10px 8px;
		font-size: 1rem;
		appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2.5L7 7.5L12 2.5' stroke='%239bb4aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 12px center;
		padding-right: 34px;
	}
	.select option {
		background: #0f1513;
		color: #e5f6ed;
	}
	.chart-skeleton {
		display: flex;
		align-items: flex-end;
		justify-content: space-around;
		gap: 8px;
		height: 320px;
		padding: 20px 0;
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
	.chart-card.mini .chart-skeleton {
		height: 240px;
	}
	.skeleton-bar {
		flex: 1;
		background: linear-gradient(
			180deg,
			rgba(59, 234, 131, 0.15) 0%,
			rgba(59, 234, 131, 0.08) 50%,
			rgba(59, 234, 131, 0.15) 100%
		);
		border-radius: 4px 4px 0 0;
		min-height: 20px;
		max-height: 90%;
		animation: skeleton-wave 1.5s ease-in-out infinite;
	}
	.skeleton-bar:nth-child(1) {
		height: 45%;
		animation-delay: 0s;
	}
	.skeleton-bar:nth-child(2) {
		height: 70%;
		animation-delay: 0.1s;
	}
	.skeleton-bar:nth-child(3) {
		height: 55%;
		animation-delay: 0.2s;
	}
	.skeleton-bar:nth-child(4) {
		height: 85%;
		animation-delay: 0.3s;
	}
	.skeleton-bar:nth-child(5) {
		height: 60%;
		animation-delay: 0.4s;
	}
	@keyframes skeleton-wave {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.8;
		}
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.95;
		}
	}
</style>
