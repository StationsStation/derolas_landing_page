<script lang="ts">
	import derolasLogo from '$lib/assets/derolas_logo.svg';

	const navLinks = [
		{ label: 'Services', href: '/services' },
		{ label: 'Stats', href: '/stats' },
		{ label: 'Team', href: '/team' }
	];
</script>

<div class="nav-shell">
	<nav class="nav" aria-label="Primary">
		<a class="brand" href="/">
			<img src={derolasLogo} alt="Derolas logo" class="brand-img" />
		</a>

		<div class="nav-links">
			{#each navLinks as link (link.href)}
				<a class="nav-link" href={link.href}>{link.label}</a>
			{/each}
		</div>

		<a class="ghost" href="/contact">Talk to the Team</a>
	</nav>
</div>

<style>
	.nav-shell {
		padding: 24px clamp(20px, 4vw, 56px) 0;
	}
	.nav {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto 48px;
		position: relative;
		z-index: 2;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.brand-img {
		width: 56px;
		height: 56px;
		object-fit: contain;
	}
	.nav-links {
		display: flex;
		justify-content: center;
		gap: 40px;
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

	.nav .ghost {
		justify-self: end;
	}

	@media (max-width: 820px) {
		.nav {
			grid-template-columns: 1fr 1fr;
			row-gap: 12px;
		}
		.nav-links {
			grid-column: 1 / -1;
		}
		.ghost {
			display: none;
		}
	}
</style>
