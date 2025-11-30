<script lang="ts">
	export let title: string;
	export let copy: string;
	export let imageSrc: string;
</script>

<article class="why-card">
	<div class="why-visual" aria-hidden="true">
		<img src={imageSrc} alt={title} />
	</div>
	<div class="why-body">
		<h3>{title}</h3>
		<p>{copy}</p>
	</div>
</article>

<style>
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
		display: grid;
		place-items: center;
	}
	.why-visual img {
		max-width: 100%;
		height: auto;
		display: block;
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
</style>
