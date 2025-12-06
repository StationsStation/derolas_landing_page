<script lang="ts">
	import leftArrow from '$lib/assets/left_arrow_icon.svg';
	import rightArrow from '$lib/assets/right_arrow_logo.svg';

	export type Testimonial = {
		quote: string;
		author: string;
		role: string;
		icon?: string;
	};

	export let items: Testimonial[] = [];

	let index = 0;
	$: total = items.length;
	$: current = items[index] ?? items[0];

	function next() {
		if (!total) return;
		index = (index + 1) % total;
	}

	function prev() {
		if (!total) return;
		index = (index - 1 + total) % total;
	}
</script>

<section class="quote-card pt-[80px]">
	<div class="quote-mark">“</div>
	{#if current}
		<p class="quote-text">{current.quote}</p>
		<div class="quote-meta">
			{#if current.icon}
				<div class="who-icon" aria-hidden="true">
					<img src={current.icon} alt="" />
				</div>
			{/if}
			<div>
				<div class="quote-author">{current.author}</div>
				<div class="quote-role">{current.role}</div>
			</div>
		</div>
	{/if}

	{#if total > 1}
		<div class="quote-nav">
			<button type="button" class="nav-btn" on:click={prev} aria-label="Previous testimonial">
				<img src={leftArrow} alt="" />
			</button>
			<div class="nav-count">
				{index + 1} / {total}
			</div>
			<button type="button" class="nav-btn" on:click={next} aria-label="Next testimonial">
				<img src={rightArrow} alt="" />
			</button>
		</div>
	{/if}
</section>

<style>
	.quote-card {
		width: 80%;
		margin: 0 auto;
		border-radius: 18px;
		padding: clamp(16px, 2vw, 24px);
		display: grid;
		gap: 16px;
		max-width: 800px;
	}
	.quote-mark {
		color: #3bea83;
		font-size: 4.5rem;
		line-height: 4px;
	}
	.quote-text {
		font-size: clamp(1rem, 2vw, 1.1rem);
		line-height: 32px;
		color: #dfeee7;
		font-weight: 400;
		min-height: 250px;
		padding-bottom: 24px;
	}
	.quote-meta {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.who-icon {
		width: 48px;
		height: 48px;
		border-radius: 9px;
		background: #111a16;
		display: grid;
		place-items: center;
	}
	.who-icon img {
		max-width: 36px;
		max-height: 36px;
	}
	.quote-author {
		font-weight: 650;
		color: #e5f6ed;
	}
	.quote-role {
		color: #8daaa0;
		font-size: 0.95rem;
	}
	.quote-nav {
		display: flex;
		align-items: center;
		gap: 10px;
		justify-content: center;
	}
	.nav-btn {
		width: 38px;
		height: 38px;
		border-radius: 12px;
		border: 1px solid #223029;
		background: #111814;
		display: grid;
		place-items: center;
		cursor: pointer;
		transition: border-color 0.15s ease, background 0.15s ease;
	}
	.nav-btn:hover {
		border-color: #3bea83;
	}
	.nav-btn img {
		width: 16px;
		height: 16px;
	}
	.nav-count {
		color: #9bb4aa;
		font-weight: 600;
	}
	@media (max-width: 640px) {
		.quote-card {
			gap: 12px;
			width: 100%;
		}
		.quote-nav {
			justify-content: space-between;
		}
	}
</style>
