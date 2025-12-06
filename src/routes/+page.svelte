<svelte:head>
	<title>Derolas | Liquidity Network</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
	<script src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js"></script>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import DiagramSection from '$lib/components/DiagramSection.svelte';
	import WhyCard from '$lib/components/WhyCard.svelte';
	import derolasLogoPile from '$lib/assets/logo_pile.svg';
	import derolasLogo from '$lib/assets/derolas_logo.svg';
	import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';
	import WhoSection from '$lib/components/WhoSection.svelte';
	import { diagramSections, stats, testimonials, whyCards, whoCards } from '$lib/data/homepage';

	const whyCardsRow1 = whyCards.slice(0, 3);
	const whyCardsRow2 = whyCards.slice(3);

	onMount(() => {
		const tryInit = () => {
			const unicorn = window.UnicornStudio;
			if (!unicorn?.init) return false;
			unicorn.init().catch((err: unknown) => console.error(err));
			return true;
		};
		if (tryInit()) return;
		const retry = setInterval(() => {
			if (tryInit()) clearInterval(retry);
		}, 250);
		return () => clearInterval(retry);
	});
</script>


<main class="page">
	<div class="halo halo-1" aria-hidden="true"></div>
	<div class="halo halo-2" aria-hidden="true"></div>
	<div class="uni-shell" aria-hidden="true">
		<div
			class="uni-bg uni-left unicorn-embed"
			aria-hidden="true"
			id="unicorn-left"
			data-us-project-src="/white-beam.json"
			data-us-lazyload="true"
		></div>
		<div
			class="uni-bg uni-right unicorn-embed"
			aria-hidden="true"
			id="unicorn-right"
			data-us-project-src="/green-beam.json"
			data-us-lazyload="true"
		></div>
		<div class="uni-mask" aria-hidden="true"></div>
		<div class="uni-mask-bottom" aria-hidden="true"></div>
		<div class="uni-mask-top" aria-hidden="true"></div>
	</div>


<section class="hero">

	<div class="copy">
		<h1>Turn Arbitrage Into Shared Liquidity</h1>
		<p class="pb-6">Derolas coordinates a decentralized network of AI agents to keep token markets tight.</p>
		<a class="ghost" href="/contact">Talk to the Team</a>
	</div>
</section>

	<section class="logo-card" aria-label="Derolas emblem">
		<img src={derolasLogoPile} alt="Derolas logo" class="logo-img" />
	</section>

	<section class="stats mt-[80px]">
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
		color: #e4f3ea;
	}

	.page {
		position: relative;
		min-height: 100vh;
		padding: 82px clamp(20px, 4vw, 56px) 72px;
	}

	.hero {
		position: relative;
		max-width: 1200px;
		margin: 0 auto 48px;
		padding: 0px 16px 32px;
		text-align: center;
		z-index: 2;
	}
	.hero h1 {
		font-size: clamp(2.4rem, 4vw, 3.5rem);
		line-height: 72px;
		font-weight: 600;
	}
	.hero p {
		color: #b5c9bf;
		line-height: 28px;
		max-width: 506px;
		margin: 0 auto;
		font-weight: 400;
		font-size: 1.1rem;
	}
	.hero .copy {
		position: relative;
		z-index: 2;
		display: grid;
		gap: 18px;
		max-width: 630px;
		margin: 0 auto;
	}

	.logo-card {
		display: grid;
		place-items: center;
		margin-bottom: 56px;
		position: relative;
		z-index: 3;
	}
	.logo-img {
		position: relative;
		width: 128px;
		height: 200px;
		opacity: 0.9;
		object-fit: contain;
		z-index: 1;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 18px;
		max-width: 720px;
		margin: 200px auto 24px;
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
	/* Scoped CTA style for the homepage actions bar (transparent pill) */
	.actions .cta {
		background: rgba(255, 255, 255, 0.04);
		color: #e4f3ea;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
		padding: 10px 16px;
		border-radius: 14px;
		transition: background 120ms ease, box-shadow 120ms ease, filter 120ms ease;
	}
	.actions .cta:hover {
		background: rgba(255, 255, 255, 0.08);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
		filter: brightness(1.05);
	}
	.hero .ghost {
		margin: 0 auto;
		width: 167px;
	}
	.uni-shell {
		position: absolute;
		top: 180px;
		left: 50%;
		width: 100vw;
		height: 580px;
		transform: translateX(-50%);
		overflow: hidden;
		z-index: 1;
		pointer-events: none;
	}
	.uni-bg {
		position: absolute;
		top: 0;
		width: 50vw;
		height: 823px;
	}
	.uni-left {
		left: 0;
		top: -141px;
		height: 906px;
	}
	.uni-right {
		right: 0;
		top: -27px;
		height: 823px;
	}
	.uni-mask {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 320px;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(0, 0, 0, 0.25) 10%,
			rgba(0, 0, 0, 0.8) 30%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 0.8) 70%,
			rgba(0, 0, 0, 0.25) 90%,
			transparent 100%
		);
		filter: blur(20px);
		pointer-events: none;
		z-index: 2;
	}
	.uni-mask-bottom {
		position: absolute;
		bottom: -40px;
		left: 50%;
		transform: translateX(-50%);
		width: 120vw;
		height: 220px;
		background: linear-gradient(
			to bottom,
			rgba(2, 9, 3, 0) 0%,
			rgba(2, 9, 3, 0.35) 25%,
			rgba(2, 9, 3, 0.6) 50%,
			rgba(2, 9, 3, 0.85) 75%,
			rgba(2, 9, 3, 1) 100%
		);
		filter: blur(24px);
		pointer-events: none;
		z-index: 2;
	}
	.uni-mask-top {
		position: absolute;
		top: -60px;
		left: 50%;
		transform: translateX(-50%);
		width: 120vw;
		height: 220px;
		background: linear-gradient(
			to top,
			rgba(7, 7, 7, 0) 0%,
			rgba(7, 7, 7, 0.35) 25%,
			rgba(7, 7, 7, 0.65) 50%,
			rgba(7, 7, 7, 0.9) 75%,
			rgba(7, 7, 7, 1) 100%
		);
		filter: blur(24px);
		pointer-events: none;
		z-index: 2;
	}

	.ghost {
		padding: 5px 10px;
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
		background: linear-gradient(140deg, #32ff7a, #24d567);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
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
	.cta-block {
		display: grid;
		place-items: center;
		text-align: center;
		gap: 12px;
		margin: 0 auto 48px;
	}

	/* Footer handled globally */

	@media (max-width: 820px) {
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
</style>
