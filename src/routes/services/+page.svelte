<svelte:head>
	<title>Derolas | Services</title>
</svelte:head>

<script lang="ts">
	import tokenIcon from '$lib/assets/token_icon.svg';
	import markIcon from '$lib/assets/mark_icon.svg';
	import robotIcon from '$lib/assets/robot_icon.svg';
	import groupIcon from '$lib/assets/group_icon.svg';
	import xLogo from '$lib/assets/x_logo.svg';
	import telegramIcon from '$lib/assets/telegram_icon.svg';

	const highlightServices = [
		{
			title: 'Market Making as a System',
			copy: 'Use Derolas to coordinate agents around your token instead of negotiating one-off MM agreements.',
			icon: robotIcon
		},
		{
			title: 'Cross-chain and Venue Alignment',
			copy: 'Incentivize agents to keep prices tighter across CEXs, DEXs, and chains where your token is active.',
			icon: groupIcon
		},
		{
			title: 'Liquidity and Incentives You Can Audit',
			copy: 'Incentive flows, pools, and agent rewards all live on-chain, backed by an open source codebase.',
			icon: markIcon
		}
	];

	const serviceTiles = [
		{ title: 'Market Making', copy: 'Description.', icon: robotIcon },
		{ title: 'Cross-chain Price Equalization', copy: 'Description.', icon: groupIcon },
		{ title: 'Pool & Liquidity Consultation', copy: 'Description.', icon: tokenIcon },
		{ title: 'Token Incentivization Mechanisms', copy: 'Description.', icon: markIcon },
		{ title: 'Buyback and Burn from Price Equalization Profits', copy: 'Description.', icon: tokenIcon },
		{ title: 'Title', copy: 'Description.', icon: robotIcon }
	];
</script>

<main class="page">
	<div class="halo halo-1" aria-hidden="true"></div>
	<div class="halo halo-2" aria-hidden="true"></div>

	<section class="hero">
		<div class="hero-copy">
			<h1>Liquidity Incentives for Token Teams</h1>
			<p>
				Derolas helps token teams design and run market making, cross-chain price equalization, and
				liquidity programs, with clear on-chain incentives and open source infrastructure.
			</p>
			<div class="hero-actions">
				<a class="cta" href="/contact">Talk to the Team</a>
				<a class="ghost" href="/stats">See How Derolas Works</a>
			</div>
		</div>
		<div class="hero-visual" aria-hidden="true">
			<img src={tokenIcon} alt="Token" />
		</div>
	</section>

	<section class="section intro">
		<div class="section-copy centered">
			<h2>Built for Teams that Care about Liquidity</h2>
			<p>
				If your token trades across several venues and chains, Derolas gives you a structured way to
				improve liquidity and price alignment without locking yourself into a single market-making
				firm.
			</p>
		</div>
	</section>

	<section class="highlight-grid">
		{#each highlightServices as service}
			<article class="highlight-card">
				<div class="highlight-visual" aria-hidden="true">
					<img src={service.icon} alt={service.title} />
				</div>
				<div class="highlight-body">
					<h3>{service.title}</h3>
					<p>{service.copy}</p>
				</div>
			</article>
		{/each}
	</section>

	<section class="section">
		<div class="section-copy centered">
			<h2>Services for Token Teams</h2>
		</div>
		<div class="service-grid">
			{#each serviceTiles as tile}
				<article class="service-card">
					<div class="service-icon" aria-hidden="true">
						<img src={tile.icon} alt="" />
					</div>
					<div>
						<h3>{tile.title}</h3>
						<p>{tile.copy}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

</main>

<style>
	.hero {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 32px;
		align-items: center;
		max-width: 1100px;
		margin: 0 auto 64px;
		position: relative;
		z-index: 1;
	}
	.hero-copy h1 {
		font-size: clamp(2.2rem, 4vw, 2.8rem);
		font-weight: 600;
		margin-bottom: 12px;
	}
	.hero-copy p {
		color: #b5c9bf;
		line-height: 1.6;
		margin-bottom: 16px;
	}
	.hero-actions {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
	}
	.hero-visual {
		min-height: 260px;
		border-radius: 18px;
		border: 1px solid #1b2f24;
		background: linear-gradient(140deg, rgba(18, 26, 22, 0.85), rgba(16, 24, 20, 0.65));
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
		display: grid;
		place-items: center;
	}
	.hero-visual img {
		width: 120px;
		height: 120px;
		object-fit: contain;
		opacity: 0.9;
	}

	.section {
		max-width: 1100px;
		margin: 0 auto 64px;
		position: relative;
		z-index: 1;
	}
	.section-copy {
		display: grid;
		gap: 10px;
	}
	.section-copy h2 {
		font-size: 2rem;
	}
	.section-copy p {
		color: #b5c9bf;
		line-height: 1.6;
		max-width: 720px;
	}
	.centered {
		text-align: center;
		justify-items: center;
	}

	.highlight-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 16px;
		max-width: 1100px;
		margin: 0 auto 64px;
		position: relative;
		z-index: 1;
	}
	.highlight-card {
		background: linear-gradient(160deg, rgba(16, 24, 20, 0.85), rgba(18, 26, 22, 0.65));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 280px;
	}
	.highlight-visual {
		background: radial-gradient(circle, rgba(42, 242, 112, 0.06), transparent 60%),
			linear-gradient(160deg, rgba(18, 26, 22, 0.8), rgba(14, 21, 18, 0.9));
		display: grid;
		place-items: center;
	}
	.highlight-visual img {
		width: 90px;
		height: 90px;
		object-fit: contain;
	}
	.highlight-body {
		padding: 14px 16px 16px;
		display: grid;
		gap: 8px;
		background: linear-gradient(180deg, rgba(20, 30, 25, 0.95), rgba(12, 18, 16, 0.95));
	}
	.highlight-body h3 {
		font-size: 1.05rem;
	}
	.highlight-body p {
		color: #a8bdb2;
		line-height: 1.5;
	}

	.service-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 12px;
		margin-top: 24px;
	}
	.service-card {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 12px;
		align-items: start;
		padding: 14px;
		border-radius: 12px;
		border: 1px solid #1b2f24;
		background: linear-gradient(140deg, rgba(16, 24, 20, 0.8), rgba(14, 21, 18, 0.9));
		box-shadow: 0 10px 22px rgba(0, 0, 0, 0.26);
	}
	.service-icon {
		width: 34px;
		height: 34px;
		border-radius: 10px;
		background: linear-gradient(140deg, rgba(24, 35, 30, 0.9), rgba(12, 19, 15, 0.9));
		border: 1px solid #23382c;
		display: grid;
		place-items: center;
	}
	.service-icon img {
		width: 18px;
		height: 18px;
		object-fit: contain;
	}
	.service-card h3 {
		font-size: 1rem;
		font-weight: 700;
	}
	.service-card p {
		color: #a8bdb2;
	}

	/* Footer handled globally */
</style>
