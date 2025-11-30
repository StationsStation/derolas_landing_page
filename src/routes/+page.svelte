<svelte:head>
	<title>Derolas | Liquidity Network</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<script lang="ts">
	const navLinks = [
		{ label: 'Services', href: '/services' },
		{ label: 'Stats', href: '/stats' },
		{ label: 'Team', href: '/team' }
	];

	const stats = [
		{ label: 'Derolas Pool TVL', value: '$101,560' },
		{ label: 'Derolas Pool Volume', value: '$22,469' }
	];

	const tokens = [
		{ label: 'TOKEN', bid: '$1.05', ask: '$1.02', cross: '$1.00' },
		{ label: 'TOKEN', bid: '$0.99', ask: '$0.93', cross: '$1.01' }
	];

	const cexes = ['C', 'B', 'K', 'M'];
	const dexs = ['A', 'S', 'U', 'R'];

	const whyCards = [
		{
			title: 'AI Agent-first, Decentralized Network',
			copy: 'Many independent operators can plug in AI agents and compete for rewards.'
		},
		{
			title: 'Transparent Incentives On-chain',
			copy: 'Liquidity funding, agent rewards, and auctions all run on-chain, visible to everyone.'
		},
		{
			title: 'Liquidity Compounds into Balancer',
			copy: 'A portion of profits is routed into Balancer pools so liquidity deepens over time.'
		},
		{
			title: 'Pluggable for New Tokens and AI Agents',
			copy: 'New tokens can add incentives. New agents can join the auctions. The system is extendable.'
		},
		{
			title: 'Aligned Outcomes for Issuers, LPs, and Agents',
			copy: 'Agents close spreads, LPs see value stream into pools, and issuers gain healthier markets.'
		}
	];

	const whoCards = [
		{
			title: 'Token Issuers',
			copy: 'Fund on-chain incentives that attract competing agents to your token.'
		},
		{
			title: 'Liquidity Providers',
			copy: 'Deposit into a Balancer pool that is plugged into an agent economy.'
		},
		{
			title: 'Agent Operators',
			copy: 'Plug your arbitrage or MM agents into Derolas and compete for on-chain rewards.'
		},
		{
			title: 'Exchanges & Venues',
			copy: 'Encourage agents to trade across your venue and other markets whenever mispricings appear.'
		}
	];

	const testimonial = {
		quote:
			'Derolas brings a level of technical rigor to agentic trading that is rare. Transparent methodology and open code contributions make them an exceptional partner.',
		author: 'Derive Labs',
		role: 'Derive.xyz'
	};
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
		<h1>Turn Arbitrage Into Shared Liquidity</h1>
		<p>Derolas coordinates a decentralized network of AI agents to keep token markets tight.</p>
		<a class="cta" href="/contact">Talk to the Team</a>
	</section>

	<section class="logo-card" aria-label="Derolas emblem">
		<div class="logo-frame">
			<div class="logo-glow" />
			<div class="logo-mark" />
		</div>
	</section>

	<section class="stats">
		{#each stats as stat}
			<div class="stat-card">
				<span class="stat-label">{stat.label}</span>
				<span class="stat-value">{stat.value}</span>
			</div>
		{/each}
	</section>

	<div class="actions">
		<a class="ghost" href="/stats">More Derolas Performance</a>
	</div>

	<section class="section">
		<div class="section-copy">
			<h2>Markets Create the Opportunity</h2>
			<p>
				The token trades across CEXs and DEXs. Natural order flow creates small price gaps between
				venues. Derolas treats those gaps as fuel for agents to compete over.
			</p>
		</div>
		<div class="section-card">
			<div class="buckets">
				<div>
					<div class="bucket-label">CEXs</div>
					<div class="icon-row">
						{#each cexes as exchange}
							<div class="pill">{exchange}</div>
						{/each}
					</div>
				</div>
				<div>
					<div class="bucket-label">DEXs</div>
					<div class="icon-row">
						{#each dexs as exchange}
							<div class="pill">{exchange}</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="token-table" role="table" aria-label="Token spreads">
				{#each tokens as token}
					<div class="token-row" role="row">
						<div class="token-pill" role="cell">{token.label}</div>
						<div class="token-price" role="cell">{token.bid}</div>
						<div class="token-price" role="cell">{token.cross}</div>
						<div class="token-price" role="cell">{token.ask}</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="section reverse">
		<div class="section-copy">
			<h2>Agents Race to Close the Spread</h2>
			<p>
				Arbitrage and MM agents scan prices across venues and trade when they see profitable gaps.
				They route volume, capture the spread, and keep prices more aligned as a side effect.
			</p>
		</div>
		<div class="diagram">
			<div class="diagram-row">
				<div class="pill">CEX</div>
				<div class="pill">DEX</div>
			</div>
			<div class="spread">
				<span class="spread-price">$1.05</span>
				<span class="spread-price">$0.96</span>
			</div>
			<div class="agents-grid">
				{#each Array(9) as _, idx}
					<div class="agent" aria-label={`Agent ${idx + 1}`} />
				{/each}
			</div>
			<div class="diagram-caption">AI Agents coordinate liquidity providers across venues.</div>
		</div>
	</section>

	<section class="section">
		<div class="section-copy">
			<h2>Profits Stream into Derolas</h2>
			<p>
				To access more rewards, agents donate a portion of their profits back into Derolas. The
				better they trade, the more they can commit, and the stronger their position in future
				auctions.
			</p>
		</div>
		<div class="flow-diagram">
			<div class="flow-label">AI Agents</div>
			<div class="node-grid">
				{#each Array(9) as _, idx}
					<div class="node" aria-label={`Agent ${idx + 1}`} />
				{/each}
			</div>
			<div class="flow-path">Donated profits</div>
			<div class="logo-frame compact">
				<div class="logo-glow" />
				<div class="logo-mark" />
			</div>
			<div class="flow-caption">Derolas Protocol</div>
		</div>
	</section>

	<section class="section">
		<div class="section-copy">
			<h2>Token Issuers Fund Incentives, Auctions Choose Agents</h2>
			<p>
				Token issuers add incentive funding into Derolas so agents care about their markets. On-chain
				auctions combine issuer incentives with agent donations to reward the best performers.
			</p>
		</div>
		<div class="flow-diagram dual">
			<div class="flow-columns">
				<div>
					<div class="flow-label">AI Agents</div>
					<div class="node-grid">
						{#each Array(6) as _, idx}
							<div class="node" aria-label={`Agent ${idx + 1}`} />
						{/each}
					</div>
					<div class="flow-path">Donated profits</div>
				</div>
				<div>
					<div class="flow-label">Token Issuers</div>
					<div class="node-grid muted">
						{#each Array(6) as _, idx}
							<div class="node issuer" aria-label={`Issuer ${idx + 1}`} />
						{/each}
					</div>
					<div class="flow-path">Funded incentives</div>
				</div>
			</div>
			<div class="logo-frame compact center">
				<div class="logo-glow" />
				<div class="logo-mark" />
			</div>
			<div class="flow-path">On-chain auctions</div>
			<div class="flow-winners">
				<div class="node winner" />
				<div class="node winner" />
				<div class="node winner" />
			</div>
			<div class="flow-caption">Best performers</div>
		</div>
	</section>

	<section class="section">
		<div class="section-copy">
			<h2>Liquidity Deepens as Markets Stay Tight</h2>
			<p>
				A share of the value flowing through Derolas goes into the Balancer pool. Liquidity providers
				and token markets benefit as spreads tighten and the pool grows.
			</p>
		</div>
		<div class="flow-diagram pool">
			<div class="flow-path">Donation flow</div>
			<div class="flow-pool">
				<div class="logo-frame micro">
					<div class="logo-glow" />
					<div class="logo-mark" />
				</div>
				<div class="pool-arrow" />
				<div class="pill">LPs</div>
			</div>
			<div class="price-row">
				<div class="pill price">$1.00</div>
				<div class="pill price">$1.01</div>
			</div>
		</div>
	</section>

	<section class="why">
		<h2>Why Derolas</h2>
		<div class="why-grid">
			{#each whyCards as card}
				<article class="why-card">
					<div class="why-visual" aria-hidden="true" />
					<div class="why-body">
						<h3>{card.title}</h3>
						<p>{card.copy}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="who">
		<h2>Who Derolas is for</h2>
		<p class="who-desc">Possible short description.</p>
		<div class="who-grid">
			{#each whoCards as card}
				<article class="who-card">
					<div class="who-icon" aria-hidden="true" />
					<div class="who-body">
						<h3>{card.title}</h3>
						<p>{card.copy}</p>
					</div>
					<a class="ghost small" href="/contact">Learn More</a>
				</article>
			{/each}
		</div>
	</section>

	<section class="quote">
		<div class="quote-mark">“</div>
		<p class="quote-text">{testimonial.quote}</p>
		<div class="quote-meta">
			<div class="who-icon" aria-hidden="true" />
			<div>
				<div class="quote-author">{testimonial.author}</div>
				<div class="quote-role">{testimonial.role}</div>
			</div>
		</div>
	</section>

	<section class="cta-block">
		<div class="logo-frame compact">
			<div class="logo-glow" />
			<div class="logo-mark" />
		</div>
		<h2>Get in Touch</h2>
		<p>Some description.</p>
		<a class="cta" href="/contact">Talk to the Team</a>
	</section>

	<footer class="footer">
		<span>© Derolas 2025</span>
		<span aria-hidden="true">•</span>
		<a class="nav-link" href="/contact">Contact</a>
	</footer>
</main>

<style>
	:global(body) {
		font-family: 'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: #0b1210;
		color: #e4f3ea;
	}

	.page {
		position: relative;
		min-height: 100vh;
		background: radial-gradient(circle at 20% 20%, rgba(42, 242, 112, 0.08), transparent 25%),
			radial-gradient(circle at 80% 10%, rgba(42, 242, 112, 0.08), transparent 20%),
			radial-gradient(circle at 50% 50%, rgba(42, 242, 112, 0.05), rgba(11, 18, 16, 0.7)),
			#0b1210;
		padding: 32px clamp(20px, 4vw, 56px) 72px;
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
		max-width: 780px;
		margin: 0 auto 48px;
		text-align: center;
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.hero h1 {
		font-size: clamp(2.4rem, 4vw, 3rem);
		line-height: 1.1;
		font-weight: 600;
	}
	.hero p {
		color: #b5c9bf;
		line-height: 1.6;
		max-width: 640px;
		margin: 0 auto;
		font-weight: 500;
	}

	.logo-card {
		display: grid;
		place-items: center;
		margin-bottom: 56px;
	}
	.logo-frame {
		position: relative;
		width: 120px;
		height: 120px;
		border-radius: 22px;
		background: linear-gradient(140deg, #101a16, #0e1a15);
		border: 1px solid #1a2f23;
		box-shadow: 0 18px 48px rgba(0, 0, 0, 0.48), 0 0 0 1px rgba(42, 242, 112, 0.08);
		display: grid;
		place-items: center;
		overflow: hidden;
	}
	.logo-glow {
		position: absolute;
		width: 240px;
		height: 240px;
		background: radial-gradient(circle, rgba(42, 242, 112, 0.18), transparent 55%);
		filter: blur(18px);
	}
	.logo-mark {
		position: relative;
		width: 62px;
		height: 74px;
		border: 3px solid #2af270;
		border-radius: 14px 26px 16px 16px;
	}
	.logo-mark::after {
		content: '';
		position: absolute;
		width: 38px;
		height: 18px;
		border: 3px solid #2af270;
		border-radius: 18px;
		top: 28px;
		left: -10px;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 18px;
		max-width: 720px;
		margin: 0 auto 24px;
		position: relative;
		z-index: 1;
	}
	.stat-card {
		background: linear-gradient(180deg, rgba(30, 45, 37, 0.5), rgba(17, 28, 24, 0.9));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		padding: 18px 20px;
		box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);
	}
	.stat-label {
		display: block;
		color: #95aba1;
		font-size: 0.95rem;
		margin-bottom: 10px;
	}
	.stat-value {
		font-size: 2.2rem;
		font-weight: 600;
	}

	.actions {
		display: flex;
		justify-content: center;
		margin-bottom: 72px;
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

	.section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
		align-items: center;
		max-width: 1100px;
		margin: 0 auto 80px;
		position: relative;
		z-index: 1;
	}

	.section-copy h2 {
		font-size: 1.8rem;
		margin-bottom: 10px;
	}
	.section-copy p {
		color: #b5c9bf;
		line-height: 1.7;
		max-width: 520px;
	}

	.section-card {
		background: linear-gradient(160deg, rgba(18, 26, 22, 0.85), rgba(16, 24, 20, 0.65));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		padding: 18px;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
		display: grid;
		gap: 16px;
	}

	.buckets {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 12px;
	}
	.bucket-label {
		color: #89a398;
		font-weight: 600;
		margin-bottom: 8px;
	}
	.icon-row {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	.pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 10px 12px;
		border-radius: 12px;
		background: linear-gradient(140deg, rgba(24, 35, 30, 0.9), rgba(15, 24, 20, 0.9));
		border: 1px solid #23382c;
		color: #e4f3ea;
		font-weight: 700;
		font-size: 0.95rem;
		min-width: 46px;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.token-table {
		display: grid;
		gap: 10px;
	}
	.token-row {
		display: grid;
		grid-template-columns: 1fr repeat(3, minmax(80px, auto));
		gap: 10px;
		align-items: center;
		padding: 10px 12px;
		border-radius: 12px;
		background: linear-gradient(120deg, rgba(16, 24, 20, 0.9), rgba(20, 32, 26, 0.75));
		border: 1px solid #23382c;
	}
	.token-pill {
		justify-self: start;
		padding: 8px 12px;
		border-radius: 10px;
		border: 1px dashed #2af270;
		color: #9deab7;
		font-weight: 700;
	}
	.token-price {
		color: #e4f3ea;
		font-weight: 600;
		text-align: right;
	}

	.reverse {
		align-items: start;
	}
	.diagram {
		background: linear-gradient(160deg, rgba(16, 24, 20, 0.85), rgba(18, 26, 22, 0.65));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		padding: 18px;
		display: grid;
		gap: 14px;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
	}
	.diagram-row {
		display: flex;
		justify-content: space-between;
	}
	.spread {
		display: flex;
		justify-content: space-between;
		padding: 10px 12px;
		border-radius: 12px;
		background: linear-gradient(140deg, rgba(24, 35, 30, 0.8), rgba(15, 24, 20, 0.85));
		border: 1px dashed #2af270;
	}
	.spread-price {
		color: #e4f3ea;
		font-weight: 700;
	}
	.agents-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
	}
	.agent {
		height: 46px;
		border-radius: 12px;
		background: linear-gradient(140deg, rgba(24, 35, 30, 0.9), rgba(12, 19, 15, 0.9));
		border: 1px solid #23382c;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.22);
		position: relative;
	}
	.agent::before {
		content: '';
		position: absolute;
		inset: 10px;
		border-radius: 8px;
		border: 1px dashed #2af270;
		opacity: 0.6;
	}
	.diagram-caption {
		color: #9bb6a8;
		font-size: 0.95rem;
	}

	.flow-diagram {
		background: linear-gradient(160deg, rgba(16, 24, 20, 0.85), rgba(18, 26, 22, 0.65));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		padding: 16px 18px;
		display: grid;
		gap: 12px;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
		justify-items: center;
	}
	.flow-label {
		color: #9bb6a8;
		font-weight: 600;
	}
	.node-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 10px;
		width: 100%;
	}
	.node {
		height: 42px;
		border-radius: 12px;
		background: linear-gradient(140deg, rgba(24, 35, 30, 0.9), rgba(12, 19, 15, 0.9));
		border: 1px solid #23382c;
		position: relative;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.22);
	}
	.node::after {
		content: '';
		position: absolute;
		inset: 12px;
		border-radius: 8px;
		border: 1px dashed #2af270;
		opacity: 0.6;
	}
	.node.issuer::after {
		border-color: #8fb3ff;
	}
	.node.winner {
		border-color: #2af270;
		box-shadow: 0 12px 24px rgba(42, 242, 112, 0.2);
	}
	.node.winner::after {
		border-color: #2af270;
	}
	.node-grid.muted .node {
		opacity: 0.8;
	}
	.flow-path {
		color: #7d978b;
		font-weight: 600;
	}
	.flow-caption {
		color: #a8bdb2;
		font-size: 0.95rem;
	}
	.logo-frame.compact {
		width: 96px;
		height: 96px;
	}
	.logo-frame.compact .logo-mark {
		transform: scale(0.8);
	}
	.logo-frame.micro {
		width: 70px;
		height: 70px;
	}
	.logo-frame.micro .logo-mark {
		transform: scale(0.65);
	}
	.logo-frame.center {
		margin: 0 auto;
	}
	.flow-columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 16px;
		width: 100%;
	}
	.flow-winners {
		display: flex;
		gap: 10px;
		justify-content: center;
	}
	.flow-pool {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 12px;
		width: 100%;
	}
	.pool-arrow {
		height: 1px;
		background: linear-gradient(90deg, #2af270, transparent);
	}
	.price-row {
		display: flex;
		gap: 12px;
		justify-content: center;
	}
	.pill.price {
		min-width: 70px;
	}

	.why {
		max-width: 1120px;
		margin: 0 auto 80px;
		text-align: center;
		position: relative;
		z-index: 1;
	}
	.why h2 {
		font-size: 2rem;
		margin-bottom: 24px;
	}
	.why-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 16px;
	}
	.why-card {
		background: linear-gradient(160deg, rgba(16, 24, 20, 0.85), rgba(18, 26, 22, 0.65));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		display: grid;
		grid-template-rows: 1fr auto;
	}
	.why-visual {
		background: radial-gradient(circle, rgba(42, 242, 112, 0.06), transparent 60%),
			linear-gradient(160deg, rgba(18, 26, 22, 0.8), rgba(14, 21, 18, 0.9));
		min-height: 160px;
	}
	.why-body {
		padding: 14px 16px 16px;
		text-align: left;
		display: grid;
		gap: 8px;
		background: linear-gradient(180deg, rgba(20, 30, 25, 0.95), rgba(12, 18, 16, 0.95));
	}
	.why-body h3 {
		font-size: 1.05rem;
	}
	.why-body p {
		color: #a8bdb2;
		line-height: 1.5;
	}

	.who {
		max-width: 1100px;
		margin: 0 auto 80px;
		text-align: center;
	}
	.who h2 {
		font-size: 2rem;
		margin-bottom: 10px;
	}
	.who-desc {
		color: #a8bdb2;
		margin-bottom: 24px;
	}
	.who-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 16px;
	}
	.who-card {
		background: linear-gradient(160deg, rgba(16, 24, 20, 0.85), rgba(18, 26, 22, 0.65));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		padding: 16px;
		display: grid;
		gap: 10px;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
		align-content: start;
	}
	.who-icon {
		width: 42px;
		height: 42px;
		border-radius: 12px;
		background: linear-gradient(140deg, rgba(24, 35, 30, 0.9), rgba(12, 19, 15, 0.9));
		border: 1px solid #23382c;
	}
	.who-body h3 {
		font-size: 1.1rem;
	}
	.who-body p {
		color: #a8bdb2;
		line-height: 1.5;
		text-align: left;
	}
	.ghost.small {
		padding: 10px 14px;
		font-size: 0.95rem;
		justify-self: start;
	}

	.quote {
		max-width: 900px;
		margin: 0 auto 80px;
		text-align: left;
		display: grid;
		gap: 12px;
	}
	.quote-mark {
		font-size: 2.4rem;
		color: #2af270;
	}
	.quote-text {
		font-size: 1.1rem;
		line-height: 1.7;
		color: #d8e9df;
	}
	.quote-meta {
		display: flex;
		gap: 12px;
		align-items: center;
	}
	.quote-author {
		font-weight: 700;
	}
	.quote-role {
		color: #9bb6a8;
	}

	.cta-block {
		display: grid;
		place-items: center;
		text-align: center;
		gap: 12px;
		margin: 0 auto 48px;
	}
	.cta-block p {
		color: #a8bdb2;
	}

	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding: 24px 0 12px;
		color: #7d978b;
		font-size: 0.95rem;
	}

	@media (max-width: 820px) {
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
		.section {
			grid-template-columns: 1fr;
		}
		.token-row {
			grid-template-columns: 1fr;
			text-align: left;
		}
		.token-price {
			text-align: left;
		}
		.node-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.flow-pool {
			grid-template-columns: 1fr;
		}
	}
</style>
