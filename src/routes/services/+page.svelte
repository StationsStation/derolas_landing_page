<svelte:head>
	<title>Derolas | Services</title>
</svelte:head>

<script lang="ts">
	const navLinks = [
		{ label: 'Services', href: '/services' },
		{ label: 'Stats', href: '/stats' },
		{ label: 'Team', href: '/team' }
	];

	const highlightServices = [
		{
			title: 'Market Making as a System',
			copy: 'Use Derolas to coordinate agents around your token instead of negotiating one-off MM agreements.'
		},
		{
			title: 'Cross-chain and Venue Alignment',
			copy: 'Incentivize agents to keep prices tighter across CEXs, DEXs, and chains where your token is active.'
		},
		{
			title: 'Liquidity and Incentives You Can Audit',
			copy: 'Incentive flows, pools, and agent rewards all live on-chain, backed by an open source codebase.'
		}
	];

	const serviceTiles = [
		{ title: 'Market Making', copy: 'Description.' },
		{ title: 'Cross-chain Price Equalization', copy: 'Description.' },
		{ title: 'Pool & Liquidity Consultation', copy: 'Description.' },
		{ title: 'Token Incentivization Mechanisms', copy: 'Description.' },
		{ title: 'Buyback and Burn from Price Equalization Profits', copy: 'Description.' },
		{ title: 'Title', copy: 'Description.' }
	];
</script>

<main class="page">
	<div class="halo halo-1" aria-hidden="true" />
	<div class="halo halo-2" aria-hidden="true" />

	<header class="nav">
		<div class="brand">
			<div class="brand-mark">
				<div class="brand-icon" />
			</div>
			<span class="brand-name">Derolas</span>
		</div>

		<nav class="nav-links" aria-label="Primary">
			{#each navLinks as link}
				<a class="nav-link" href={link.href}>{link.label}</a>
			{/each}
		</nav>

		<a class="cta" href="/contact">Talk to the Team</a>
	</header>

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
		<div class="hero-visual" aria-hidden="true" />
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
				<div class="highlight-visual" aria-hidden="true" />
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
					<div class="service-icon" aria-hidden="true" />
					<div>
						<h3>{tile.title}</h3>
						<p>{tile.copy}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<footer class="footer">
		<span>© Derolas 2025</span>
		<span aria-hidden="true">•</span>
		<a class="nav-link" href="/contact">Contact</a>
	</footer>
</main>

<style>
	:global(body) {
		background: #0b1210;
		color: #e4f3ea;
	}

	.page {
		min-height: 100vh;
		position: relative;
		padding: 32px clamp(20px, 4vw, 56px) 80px;
		background: radial-gradient(circle at 20% 20%, rgba(42, 242, 112, 0.08), transparent 25%),
			radial-gradient(circle at 80% 10%, rgba(42, 242, 112, 0.08), transparent 20%),
			radial-gradient(circle at 50% 50%, rgba(42, 242, 112, 0.05), rgba(11, 18, 16, 0.7)),
			#0b1210;
		overflow: hidden;
	}
	.halo {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle, rgba(42, 242, 112, 0.05) 0%, transparent 45%);
		filter: blur(60px);
		pointer-events: none;
	}
	.halo-1 {
		top: -30%;
		left: -10%;
	}
	.halo-2 {
		bottom: -40%;
		right: -10%;
	}

	.nav {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto 64px;
		position: relative;
		z-index: 1;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.brand-mark {
		width: 44px;
		height: 44px;
		border-radius: 14px;
		background: linear-gradient(140deg, #11221b, #0b1712);
		border: 1px solid #193025;
		display: grid;
		place-items: center;
		box-shadow: 0 0 0 1px rgba(42, 242, 112, 0.08), 0 18px 40px rgba(0, 0, 0, 0.45);
	}
	.brand-icon {
		width: 20px;
		height: 24px;
		border: 2px solid #2af270;
		border-radius: 6px 16px 10px 10px;
		position: relative;
	}
	.brand-icon::after {
		content: '';
		position: absolute;
		width: 14px;
		height: 10px;
		border: 2px solid #2af270;
		border-radius: 10px;
		top: 8px;
		left: -4px;
	}
	.brand-name {
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #9deab7;
	}

	.nav-links {
		display: flex;
		justify-content: center;
		gap: 28px;
	}
	.nav-link {
		color: #d8e9df;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.97rem;
		transition: color 150ms ease;
	}
	.nav-link:hover {
		color: #2af270;
	}

	.cta {
		justify-self: end;
		padding: 10px 18px;
		border-radius: 999px;
		background: linear-gradient(90deg, #38ff81, #2af270);
		color: #0b1210;
		font-weight: 700;
		text-decoration: none;
		border: 1px solid #193025;
		box-shadow: 0 12px 24px rgba(42, 242, 112, 0.28);
		transition: transform 120ms ease, box-shadow 120ms ease;
	}
	.cta:hover {
		transform: translateY(-1px);
		box-shadow: 0 16px 32px rgba(42, 242, 112, 0.36);
	}

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
	}
	.service-card h3 {
		font-size: 1rem;
		font-weight: 700;
	}
	.service-card p {
		color: #a8bdb2;
	}

	.ghost {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 20px;
		border-radius: 12px;
		border: 1px solid #2c3e36;
		background: linear-gradient(140deg, rgba(23, 34, 29, 0.65), rgba(18, 26, 22, 0.9));
		color: #d7e8dd;
		text-decoration: none;
		font-weight: 600;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
		transition: border-color 120ms ease, transform 120ms ease;
	}
	.ghost:hover {
		border-color: #2af270;
		transform: translateY(-1px);
	}

	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding: 40px 0 12px;
		color: #7d978b;
		font-size: 0.95rem;
	}

	@media (max-width: 880px) {
		.nav {
			grid-template-columns: 1fr 1fr;
			row-gap: 12px;
		}
		.nav-links {
			grid-column: 1 / -1;
		}
		.cta {
			justify-self: start;
		}
	}
</style>
