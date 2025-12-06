<script lang="ts">
import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: primaryPool = data.pools.at(0);
	let selectedPool = primaryPool?.id ?? '';

	const formatUsd = (value?: number) =>
		value === undefined ? '—' : `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
	const formatPct = (value?: number) =>
		value === undefined ? '—' : `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`;

	$: latestVolumes =
		data.volumes?.series !== undefined
			? Object.values(data.volumes.series).flatMap((series) => {
					const last = series.at(-1);
					return last ? [last] : [];
				})
			: [];
	$: totalVolume = latestVolumes.reduce((sum, item) => sum + (item.total_volume ?? 0), 0);
	$: derolasVolume = latestVolumes.reduce((sum, item) => sum + (item.derolas_volume ?? 0), 0);
	$: poolTvl = data.poolMetrics?.tvl_usd;
	$: poolVolumeSharePct = totalVolume > 0 ? (derolasVolume / totalVolume) * 100 : undefined;
	$: poolTvlSharePct = totalVolume > 0 ? (poolTvl ?? 0) / totalVolume * 100 : undefined;

	$: metrics = {
		currentApr: data.poolMetrics?.current_apr,
		fees24h: data.poolMetrics?.fees_24h_usd,
		totalShares: data.poolMetrics?.total_shares,
		tvlUsd: data.poolMetrics?.tvl_usd,
		currentSharePrice: data.poolMetrics?.current_share_price_usd,
		currentRoi: data.poolMetrics?.current_roi_pct,
		balancerBaseTvl: totalVolume || undefined,
		derolasPoolTvl: poolTvl,
		totalVolumeBase: totalVolume || undefined,
		derolasPoolVolume: derolasVolume || undefined,
		avgBalancerEfficiency: undefined,
		derolasPoolEfficiency: undefined,
		balTvlSharePct: poolTvlSharePct,
		balVolumeSharePct: poolVolumeSharePct
	};

onMount(() => {
	const body = document.body;
	const prevChartAccent = body.style.getPropertyValue('--chart-accent');
	body.style.setProperty('--chart-accent', '#3bea83');

	onDestroy(() => {
		if (prevChartAccent) {
			body.style.setProperty('--chart-accent', prevChartAccent);
		} else {
			body.style.removeProperty('--chart-accent');
		}
	});
});
</script>

<main class="grid gap-6 px-6 pt-15 pb-18 max-w-[1100px] mx-auto">
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
		</section>
	{/if}

	{#if data.error}
		<section class="alert">Unable to load data: {data.error}</section>
	{/if}

	<section class="chart-card">
		<div class="chart-head">
			<div>
				<p class="label">Derolas Share Price</p>
				{#if primaryPool}
					<p class="muted">{primaryPool.name}</p>
				{/if}
			</div>
		</div>

		<div class="chart-shell placeholder">
			<div class="placeholder-content">
				<p class="label">Chart coming soon</p>
				<p class="muted">Connecting to the metrics API; visuals will render once data is available.</p>
			</div>
		</div>
	</section>

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

	<section class="chart-card">
		<div class="chart-head">
			<p class="label">Cumulative ROI of Assets in Bundle</p>
		</div>
		<div class="chart-shell placeholder">
			<div class="placeholder-content">
				<p class="label">Chart coming soon</p>
				<p class="muted">ROI breakdown will display here.</p>
			</div>
		</div>
	</section>

	<section class="mini-chart-row">
		<div class="chart-card mini">
			<div class="chart-head">
				<p class="label">TVL (USD) over previous 30 Days</p>
			</div>
			<div class="chart-shell placeholder">
				<div class="placeholder-content">
					<p class="label">Chart coming soon</p>
				</div>
			</div>
		</div>
		<div class="chart-card mini">
			<div class="chart-head">
				<p class="label">Fees (USD) over previous 30 Days</p>
			</div>
			<div class="chart-shell placeholder">
				<div class="placeholder-content">
					<p class="label">Chart coming soon</p>
				</div>
			</div>
		</div>
	</section>

	<section class="chart-card">
		<div class="chart-head">
			<p class="label">Derolas LP Shares Amount</p>
		</div>
		<div class="chart-shell placeholder">
			<div class="placeholder-content">
				<p class="label">Chart coming soon</p>
				<p class="muted">LP share trends will render here.</p>
			</div>
		</div>
	</section>

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
		padding: 18px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
		min-height: 520px;
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
</style>
