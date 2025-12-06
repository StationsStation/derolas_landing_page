<script lang="ts">
	import groupIcon from '$lib/assets/group_icon.svg';

	export type WhoCard = { title: string; copy: string; icon?: string };

	export let title = 'Who Derolas is for';
	export let description = 'Possible short description.';
	export let items: WhoCard[] = [];
</script>

<section class="who">
	<h2>{title}</h2>
	<p class="who-desc">{description}</p>
	<div class="who-grid">
		{#each items as card (card.title)}
			<article class="who-card">
				<div class="who-icon" aria-hidden="true">
					<img src={card.icon ?? groupIcon} alt="" />
				</div>
				<div class="who-body">
					<h3>{card.title}</h3>
					<p>{card.copy}</p>
				</div>
				<div class="actions justify-start">
					<a class="cta" href="/contact">Learn More</a>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.who {
		max-width: 1100px;
		margin: 80px auto;
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
	.who-body {
		text-align: left;
	}
	.who-body h3 {
		font-size: 1.1rem;
	}
	.who-body p {
		color: #a8bdb2;
		line-height: 1.5;
		text-align: left;
	}
</style>
