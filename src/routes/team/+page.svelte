<svelte:head>
	<title>Derolas | Team</title>
</svelte:head>

<script lang="ts">
	const navLinks = [
		{ label: 'Services', href: '/services' },
		{ label: 'Stats', href: '/stats' },
		{ label: 'Team', href: '/team' }
	];

	const members = [
		{
			name: '8baller',
			bio: 'Deep experience in agent based systems, 1st class masters in AI, Ex-AWS engineer with more than 10 years + of trading experience in everything from betting markets, through to crypto options.',
			handle: '@8baller11',
			link: 'https://x.com/8baller11',
			accent: 'lime'
		},
		{
			name: 'Zarathurstra',
			bio: 'Deep experience in agent based systems, 1st class masters in AI, Ex-AWS engineer with more than 10 years + of trading experience in everything from betting markets, through to crypto options.',
			handle: '@x_handle',
			link: 'https://x.com',
			accent: 'slate'
		}
	];
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
		<h1>Meet Derolas Team</h1>
	</section>

	<section class="team">
		{#each members as member, idx (member.name)}
			<article class={`member ${idx % 2 ? 'reverse' : ''}`}>
				<div class={`avatar ${member.accent}`} aria-hidden="true">
					<span class="avatar-initial">{member.name.slice(0, 1)}</span>
				</div>
				<div class="member-body">
					<h2>{member.name}</h2>
					<p>{member.bio}</p>
					<a class="ghost small" href={member.link} rel="noreferrer" target="_blank">
						{member.handle}
					</a>
				</div>
			</article>
		{/each}
	</section>

	<footer class="footer">
		<span>© Derolas 2025</span>
		<span aria-hidden="true">•</span>
		<a class="nav-link" href="/contact">Contact</a>
	</footer>
</main>

<style>
	:global(body) {
		background: #0b1210;
		color: #e4f3ea;
	}

	.page {
		min-height: 100vh;
		position: relative;
		padding: 32px clamp(20px, 4vw, 56px) 80px;
		background: radial-gradient(circle at 20% 20%, rgba(42, 242, 112, 0.08), transparent 25%),
			radial-gradient(circle at 80% 10%, rgba(42, 242, 112, 0.08), transparent 20%),
			radial-gradient(circle at 50% 50%, rgba(42, 242, 112, 0.05), rgba(11, 18, 16, 0.7)),
			#0b1210;
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
		text-align: center;
		margin-bottom: 48px;
		position: relative;
		z-index: 1;
	}
	.hero h1 {
		font-size: clamp(2.2rem, 3.8vw, 2.8rem);
		font-weight: 600;
	}

	.team {
		display: grid;
		gap: 64px;
		max-width: 1000px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}
	.member {
		display: grid;
		grid-template-columns: minmax(240px, 320px) 1fr;
		gap: 32px;
		align-items: center;
	}
	.member.reverse {
		grid-template-columns: 1fr minmax(240px, 320px);
	}
	.member.reverse .avatar {
		order: 2;
		justify-self: end;
	}
	.member.reverse .member-body {
		order: 1;
		text-align: left;
	}

	.avatar {
		width: 260px;
		max-width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 20px;
		border: 1px solid #1a2f23;
		box-shadow: 0 18px 48px rgba(0, 0, 0, 0.48), 0 0 0 1px rgba(42, 242, 112, 0.08);
		display: grid;
		place-items: center;
		position: relative;
		overflow: hidden;
		background: linear-gradient(140deg, #101a16, #0e1a15);
	}
	.avatar::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle, rgba(42, 242, 112, 0.15), transparent 55%);
		filter: blur(16px);
	}
	.avatar.lime {
		background: linear-gradient(140deg, #13271f, #0f1f19);
	}
	.avatar.slate {
		background: linear-gradient(140deg, #1d2422, #0f1613);
	}
	.avatar-initial {
		position: relative;
		font-size: 2.6rem;
		font-weight: 700;
		color: #9deab7;
		z-index: 1;
	}

	.member-body {
		display: grid;
		gap: 10px;
		text-align: left;
	}
	.member-body h2 {
		font-size: 1.4rem;
		font-weight: 700;
	}
	.member-body p {
		color: #b5c9bf;
		line-height: 1.6;
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
	.ghost.small {
		padding: 10px 14px;
		font-size: 0.95rem;
	}

	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding: 60px 0 12px;
		color: #7d978b;
		font-size: 0.95rem;
	}

	@media (max-width: 880px) {
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
		.member,
		.member.reverse {
			grid-template-columns: 1fr;
			text-align: center;
		}
		.member.reverse .avatar {
			order: 1;
			justify-self: center;
		}
		.member-body {
			text-align: center;
		}
	}
</style>
