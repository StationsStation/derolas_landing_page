<script lang="ts">
	import { onMount } from 'svelte';

	export type DiagramItem = { title: string; copy: string; diagramSrc: string };

	export let items: DiagramItem[] = [];

	let activeIndex = 0;
	let copyRefs: Array<HTMLElement | null> = [];
	let sectionEl: HTMLElement | null = null;

	$: activeItem = items[activeIndex];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const idx = Number(entry.target.getAttribute('data-index') ?? 0);
						activeIndex = idx;
					}
				}
			},
			{ threshold: 0.6 }
		);

		copyRefs.forEach((node) => node && observer.observe(node));

		const updateProgress = () => {
			if (!sectionEl) return;
			const rect = sectionEl.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const total = rect.height - viewportHeight;
			if (total <= 0) {
				sectionEl.style.setProperty('--progress', '0');
				sectionEl.style.setProperty('--diagram-shift', '0px');
				return;
			}
			const scrolled = Math.min(Math.max(-rect.top, 0), total);
			const progress = scrolled / total;
			sectionEl.style.setProperty('--progress', progress.toString());
			const shift = 20 * progress - 40 * progress * progress; // small down then up curve
			sectionEl.style.setProperty('--diagram-shift', `${shift}px`);
		};

		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(() => {
					updateProgress();
					ticking = false;
				});
			}
		};

		updateProgress();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', updateProgress);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', updateProgress);
		};
	});
</script>

<section class="diagram-section" bind:this={sectionEl}>
	<div class="copy-column">
		{#each items as item, i (item.title)}
			<article
				class:active={i === activeIndex}
				class="copy-card step"
				bind:this={copyRefs[i]}
				data-index={i}
			>
				<h3 class="mb-4">{item.title}</h3>
				<p>{item.copy}</p>
			</article>
		{/each}
	</div>

	<div class="diagram-column" aria-live="polite">
		{#if activeItem}
			<div class="feature-figure">
				<div class="figure-stack">
					{#each items as item, i (item.title)}
						<div class={`figure-state ${i === activeIndex ? 'is-active' : ''}`}>
							<div class="diagram-card">
								<img src={item.diagramSrc} alt={`${item.title} diagram`} />
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.diagram-section {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		gap: clamp(20px, 2vw, 40px);
		align-items: stretch;
		max-width: 920px;
		margin: 150px auto 80px;
		position: relative;
		z-index: 1;
	}
	.copy-column {
		display: grid;
		gap: 220px;
		position: relative;
		max-width: 520px;
		padding-right: 40px;
		padding-left: 40px;
	}
	.copy-card {
		position: relative;
		padding: 10px 0;
		color: #cfe2d8;
		text-align: left;
		transition: transform 160ms ease, opacity 160ms ease, color 160ms ease;
	}
	.copy-card.active {
		transform: translateX(2px);
		opacity: 1;
		color: #e7f4ed;
	}
	.copy-card h3 {
		font-size: 1.6rem;
		margin-bottom: 24px;
		font-weight: 600;
		line-height: 1.25;
		max-width: 275px;
	}
	.copy-card p {
		color: #a7b7b0;
		line-height: 1.6;
		max-width: 620px;
	}
	.diagram-column {
		position: relative;
		min-height: 100vh;
	}
	.feature-figure {
		position: sticky;
		top: 160px;
		height: 70vh;
		display: grid;
		place-items: start center;
		width: 100%;
		transform: translateY(var(--diagram-shift, 0px))
			scale(calc(1 - 0.1 * var(--progress, 0)));
		transition: transform 80ms linear;
	}
	.figure-stack {
		position: relative;
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
	}
	.figure-state {
		grid-area: 1 / 1;
		opacity: 0;
		transform: translateY(20px) scale(0.98);
		filter: blur(4px);
		transition: opacity 250ms ease, transform 250ms ease, filter 250ms ease;
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
	}
	.figure-state.is-active {
		opacity: 1;
		transform: translateY(0) scale(1);
		filter: blur(0);
	}
	.diagram-card {
		position: relative;
		width: 100%;
		height: 100%;
		display: grid;
		top: 55px;
		overflow: visible;
		z-index: 111;
	}
	.diagram-card img {
		max-width: 140%;
		transform: translateX(12%) translateY(-10%);
		height: auto;
		display: block;
	}
	@media (max-width: 900px) {
		.diagram-section {
			grid-template-columns: 1fr;
			gap: 32px;
		}
		.copy-column {
			margin: 0 auto;
			padding-right: 0;
			gap: 48px;
		}
		.copy-card {
			text-align: left;
		}
		.diagram-column {
			top: unset;
			align-items: stretch;
			display: grid;
			place-items: center;
			min-height: auto;
			margin-top: 12px;
		}
		.feature-figure {
			height: auto;
			position: relative;
			top: unset;
			transform: none;
			width: 100%;
		}
		.figure-stack {
			width: 100%;
		}
		.diagram-card img {
			max-width: 110%;
			transform: translateX(0) translateY(-6%);
		}
	}
</style>
