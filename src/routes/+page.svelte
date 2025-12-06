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
	import derolasLogoPile from '$lib/assets/logo_pile.svg';
	import derolasLogo from '$lib/assets/derolas_logo.svg';
	import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';
	import WhoSection from '$lib/components/WhoSection.svelte';
	import { diagramSections, stats, testimonials, whyCards, whoCards } from '$lib/data/homepage';

	const whyCardsRow1 = whyCards.slice(0, 3);
	const whyCardsRow2 = whyCards.slice(3);
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
		<a class="ghost" href="/contact">Talk to the Team</a>
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
		<img src={derolasLogoPile} alt="Derolas logo" class="logo-img" />
	</section>

	<section class="stats">
		{#each stats as stat (stat.label)}
			<div class="stat-card">
				<span class="stat-label">{stat.label}</span>
				<span class="stat-value">{stat.value}</span>
			</div>
		{/each}
	</section>

	<div class="actions justify-center">
		<a class="cta" href="/stats">More Derolas Performance</a>
	</div>

	<DiagramSection items={diagramSections} />

	<section class="why">
		<h2>Why Derolas</h2>
		<div class="why-grid why-grid--row1">
			{#each whyCardsRow1 as card (card.title)}
				<WhyCard title={card.title} copy={card.copy} imageSrc={card.image} />
			{/each}
		</div>
		<div class="why-grid why-grid--row2">
			{#each whyCardsRow2 as card (card.title)}
				<WhyCard title={card.title} copy={card.copy} imageSrc={card.image} />
			{/each}
		</div>
	</section>

	<WhoSection items={whoCards} />

	<TestimonialCarousel items={testimonials} />

	<section class="cta-block">
		<div class="logo-frame compact">
			<div class="logo-glow"></div>
			<img src={derolasLogo} alt="Derolas logo" class="logo-img" />
		</div>
		<a class="ghost" href="/contact">Talk to the Team</a>
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
	}

	.hero {
		max-width: 580px;
		margin: 0 auto 48px;
		text-align: center;
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
	.hero h1 {
		font-size: clamp(2.4rem, 4vw, 3.5rem);
		line-height: 72px;
		font-weight: 600;
	}
	.hero p {
		color: #b5c9bf;
		line-height: 28px;
		max-width: 456px;
		margin: 0 auto;
		font-weight: 400;
		font-size: 1.1rem;
	}

	.logo-card {
		display: grid;
		place-items: center;
		margin-bottom: 56px;
	}
	.logo-img {
		position: relative;
		width: 128px;
		height: 200px;
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
		background: transparent;
		border: none;
		border-radius: 18px;
		padding: 18px 20px;
		box-shadow: none;
		text-align: center;
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
	}
	.actions.justify-center {
		justify-content: center;
	}
	.actions.justify-start {
		justify-content: flex-start;
	}
	.actions .cta {
		background: rgba(255, 255, 255, 0.04);
		color: #e4f3ea;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
		padding: 10px 16px;
		border-radius: 14px;
	}
	.actions .cta:hover {
		transform: translateY(-1px);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
		filter: brightness(1.02);
	}
	.hero .ghost {
		margin: 0 auto;
		width: 167px;
	}

	.ghost {
		padding: 5px;
		border-radius: 12px;
		border: 1px solid #26e05f;
		background: linear-gradient(140deg, #2af270, #1fc85d);
		color: #0c150f;
		text-decoration: none;
		font-weight: 600;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
		transition: border-color 120ms ease, transform 120ms ease;
	}
	.ghost:hover {
		border-color: #30ff7a;
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
		max-width: 1200px;
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
		gap: 16px;
	}
	.why-grid--row1 {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	.why-grid--row2 {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
		margin-top: 12px;
		justify-items: center;
	}
	.why-card {
		background: linear-gradient(160deg, rgba(16, 24, 20, 0.85), rgba(18, 26, 22, 0.65));
		border: 1px solid #1b2f24;
		border-radius: 18px;
		padding: 16px;
		display: grid;
		gap: 10px;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
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
		.why-grid--row1 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.why-grid--row2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 620px) {
		.why-grid--row1,
		.why-grid--row2 {
			grid-template-columns: 1fr;
			justify-items: stretch;
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
