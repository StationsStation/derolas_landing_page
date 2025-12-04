<svelte:head>
	<title>Derolas | Liquidity Network</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
	<script src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js"></script>
</svelte:head>

<script lang="ts">
	import DiagramSection from '$lib/components/DiagramSection.svelte';
	import WhyCard from '$lib/components/WhyCard.svelte';
	import derolasLogo from '$lib/assets/derolas_logo.svg';
	import binanceLogo from '$lib/assets/binance_logo.svg';
	import coinbaseLogo from '$lib/assets/coinbase_logo.svg';
	import krakenLogo from '$lib/assets/kraken_logo.svg';
	import coinledgerLogo from '$lib/assets/coinledger_logo.svg';
	import uniswapLogo from '$lib/assets/uniswap_logo.svg';
	import pancakeSwapLogo from '$lib/assets/pancake_swap_logo.svg';
	import tokenIcon from '$lib/assets/token_icon.svg';
	import robotIcon from '$lib/assets/robot_icon.svg';
	import robotOrangeIcon from '$lib/assets/robot_orange_icon.svg';
	import markIcon from '$lib/assets/mark_icon.svg';
	import groupIcon from '$lib/assets/group_icon.svg';
	import deriveLogo from '$lib/assets/derive_logo.svg';
	import section1 from '$lib/assets/section_1_graph.svg';
	import section2 from '$lib/assets/section_2_graph.svg';
	import section3 from '$lib/assets/section_3_graph.svg';
	import section4 from '$lib/assets/section_4_graph.svg';
	import section5 from '$lib/assets/section_5_graph.svg';
	import why1 from '$lib/assets/why_card_1.svg';
	import why2 from '$lib/assets/why_card_2.svg';
	import why3 from '$lib/assets/why_card_3.svg';
	import why4 from '$lib/assets/why_card_4.svg';
	import why5 from '$lib/assets/why_card_5.svg';

	const stats = [
		{ label: 'Derolas Pool TVL', value: '$101,560' },
		{ label: 'Derolas Pool Volume', value: '$22,469' }
	];

	const tokens = [
		{ label: 'TOKEN', bid: '$1.05', ask: '$1.02', cross: '$1.00', icon: tokenIcon },
		{ label: 'TOKEN', bid: '$0.99', ask: '$0.93', cross: '$1.01', icon: tokenIcon }
	];

	const cexes = [
		{ label: 'Binance', icon: binanceLogo },
		{ label: 'Coinbase', icon: coinbaseLogo },
		{ label: 'Kraken', icon: krakenLogo },
		{ label: 'Coinledger', icon: coinledgerLogo }
	];
	const dexs = [
		{ label: 'Uniswap', icon: uniswapLogo },
		{ label: 'PancakeSwap', icon: pancakeSwapLogo },
		{ label: 'Token', icon: tokenIcon },
		{ label: 'Token', icon: tokenIcon }
	];

	const whyCards = [
		{
			title: 'AI Agent-first, Decentralized Network',
			copy: 'Many independent operators can plug in AI agents and compete for rewards.',
			icon: robotIcon,
			image: why1
		},
		{
			title: 'Transparent Incentives On-chain',
			copy: 'Liquidity funding, agent rewards, and auctions all run on-chain, visible to everyone.',
			icon: markIcon,
			image: why2
		},
		{
			title: 'Liquidity Compounds into Balancer',
			copy: 'A portion of profits is routed into Balancer pools so liquidity deepens over time.',
			icon: tokenIcon,
			image: why3
		},
		{
			title: 'Pluggable for New Tokens and AI Agents',
			copy: 'New tokens can add incentives. New agents can join the auctions. The system is extendable.',
			icon: robotOrangeIcon,
			image: why4
		},
		{
			title: 'Aligned Outcomes for Issuers, LPs, and Agents',
			copy: 'Agents close spreads, LPs see value stream into pools, and issuers gain healthier markets.',
			icon: robotIcon,
			image: why5
		}
	];

	const whoCards = [
		{
			title: 'Token Issuers',
			copy: 'Fund on-chain incentives that attract competing agents to your token.',
			icon: markIcon
		},
		{
			title: 'Liquidity Providers',
			copy: 'Deposit into a Balancer pool that is plugged into an agent economy.',
			icon: tokenIcon
		},
		{
			title: 'Agent Operators',
			copy: 'Plug your arbitrage or MM agents into Derolas and compete for on-chain rewards.',
			icon: robotIcon
		},
		{
			title: 'Exchanges & Venues',
			copy: 'Encourage agents to trade across your venue and other markets whenever mispricings appear.',
			icon: groupIcon
		}
	];

	const testimonial = {
		quote:
			'Derolas brings a level of technical rigor to agentic trading that is rare. Transparent methodology and open code contributions make them an exceptional partner.',
		author: 'Derive Labs',
		role: 'Derive.xyz',
		icon: deriveLogo
	};

	const diagramSections = [
		{
			title: 'Markets Create the Opportunity',
			copy: 'The token trades across CEXs and DEXs. Natural order flow creates small price gaps between venues. Derolas treats those gaps as fuel for agents to compete over.',
			diagramSrc: section1
		},
		{
			title: 'Agents Race to Close the Spread',
			copy: 'Arbitrage and MM agents scan prices across venues and trade when they see profitable gaps. They route volume, capture the spread, and keep prices more aligned as a side effect.',
			diagramSrc: section2
		},
		{
			title: 'Profits Stream into Derolas',
			copy: 'To access more rewards, agents donate a portion of their profits back into Derolas. The better they trade, the more they can commit, and the stronger their position in future auctions.',
			diagramSrc: section3
		},
		{
			title: 'Token Issuers Fund Incentives, Auctions Choose Agents',
			copy: 'Token issuers add incentive funding into Derolas so agents care about their markets. On-chain auctions combine issuer incentives with agent donations to reward the best performers.',
			diagramSrc: section4
		},
		{
			title: 'Liquidity Deepens as Markets Stay Tight',
			copy: 'A share of the value flowing through Derolas goes into the Balancer pool. Liquidity providers and token markets benefit as spreads tighten and the pool grows.',
			diagramSrc: section5
		}
	];
</script>


<main class="page">

	<!-- <div
	  class="unicorn-embed"
	  data-us-project-src="/green-beam.json"
	  data-us-scale="1"
	  data-us-dpi="1.5"
	  data-us-lazyload="true"
	  data-us-alttext="Welcome to Unicorn Studio"
	  data-us-arialabel="This is a canvas scene"
	></div> -->
	<div class="halo halo-1" aria-hidden="true"></div>
	<div class="halo halo-2" aria-hidden="true"></div>
<section class="hero">
	<div class="graphics">
		<div
			class="uni"
			id="unicorn-left"
			data-us-project-src="/white-beam.json"
			data-us-lazyload="true"
		></div>

		<div
			class="uni"
			id="unicorn-right"
			data-us-project-src="/green-beam.json"
			data-us-lazyload="true"
		></div>
	</div>

	<div class="copy">
		<h1>Turn Arbitrage Into Shared Liquidity</h1>
		<p>Derolas coordinates a decentralized network of AI agents to keep token markets tight.</p>
		<a class="cta" href="/contact">Talk to the Team</a>
	</div>

	<script>
		UnicornStudio.init()
			.then((scenes) => {
				console.log('Unicorn Studio scenes initialized:', scenes);
			})
			.catch((err) => {
				console.error(err);
			});
	</script>
</section>

	<section class="logo-card" aria-label="Derolas emblem">
		<div class="logo-frame">
			<div class="logo-glow"></div>
			<img src={derolasLogo} alt="Derolas logo" class="logo-img" />
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

	{#each diagramSections as section}
		<DiagramSection title={section.title} copy={section.copy} diagramSrc={section.diagramSrc} />
	{/each}

	<section class="why">
		<h2>Why Derolas</h2>
		<div class="why-grid">
			{#each whyCards as card}
				<WhyCard title={card.title} copy={card.copy} imageSrc={card.image} />
			{/each}
		</div>
	</section>

	<section class="who">
		<h2>Who Derolas is for</h2>
		<p class="who-desc">Possible short description.</p>
		<div class="who-grid">
			{#each whoCards as card}
				<article class="who-card">
					<div class="who-icon" aria-hidden="true">
						<img src={card.icon ?? groupIcon} alt="" />
					</div>
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
			<div class="who-icon" aria-hidden="true">
				<img src={testimonial.icon} alt="" />
			</div>
			<div>
				<div class="quote-author">{testimonial.author}</div>
				<div class="quote-role">{testimonial.role}</div>
			</div>
		</div>
	</section>

	<section class="cta-block">
		<div class="logo-frame compact">
			<div class="logo-glow"></div>
			<img src={derolasLogo} alt="Derolas logo" class="logo-img" />
		</div>
		<h2>Get in Touch</h2>
		<p>Some description.</p>
		<a class="cta" href="/contact">Talk to the Team</a>
	</section>
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
		padding: 32px clamp(20px, 4vw, 56px) 72px;
		overflow: hidden;
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
	.logo-img {
		position: relative;
		width: 70px;
		height: 70px;
		object-fit: contain;
		z-index: 1;
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
	.icon-pill img {
		width: 26px;
		height: 26px;
		object-fit: contain;
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
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}
	.token-price {
		color: #e4f3ea;
		font-weight: 600;
		text-align: right;
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
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
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
		display: grid;
		place-items: center;
	}
	.who-icon img {
		width: 22px;
		height: 22px;
		object-fit: contain;
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

	/* Footer handled globally */

	@media (max-width: 820px) {
		.section {
			grid-template-columns: 1fr;
		}
		.why-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.token-row {
			grid-template-columns: 1fr;
			text-align: left;
		}
		.token-price {
			text-align: left;
		}
	}
	@media (max-width: 620px) {
		.why-grid {
			grid-template-columns: 1fr;
		}
	}
.hero {
	position: relative;
	min-height: 100vh;
	overflow: hidden;
}

.graphics {
	position: absolute;
	inset: 0;
	display: flex;
	justify-content: space-between;
	pointer-events: none;
	z-index: 1;

	-webkit-mask-image: linear-gradient(
		to right,
		transparent 0%,
		black 15%,
		black 45%,
		transparent 100%
	);
	mask-image: linear-gradient(
		to right,
		transparent 0%,
		black 15%,
		black 85%,
		transparent 100%
	);
}

.uni {
	width: 48%;
	height: 100%;
}

.copy {
	position: relative;
	z-index: 2;
	max-width: 600px;
	margin: 0 auto;
	padding-top: 15vh;
	text-align: center;
}

</style>
