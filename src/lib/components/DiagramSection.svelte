<script lang="ts">
	export let title: string;
	export let copy: string;
	export let diagramSrc: string;
</script>

<section class="diagram-section">
	<div class="section-copy">
		<h2>{title}</h2>
		<p>{copy}</p>
	</div>
	<div class="diagram-card">
		<img src={diagramSrc} alt={`${title} diagram`} />
	</div>
</section>

<style>
	.diagram-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
		align-items: start;
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
	.diagram-card {
		display: grid;
		place-items: center;
	}
	.diagram-card img {
		max-width: 100%;
		height: auto;
		display: block;
	}
	@media (max-width: 820px) {
		.diagram-section {
			grid-template-columns: 1fr;
		}
	}
</style>
