<svelte:head>
	<title>Derolas | Talk to the Team</title>
</svelte:head>

<script lang="ts">
	const navLinks = [
		{ label: 'Services', href: '/services' },
		{ label: 'Stats', href: '/stats' },
		{ label: 'Team', href: '/team' }
	];

	const channels = [
		{ label: 'Telegram', href: 'https://t.me', icon: '↗' },
		{ label: 'X', href: 'https://x.com', icon: '↗' }
	];

	let form = {
		email: '',
		company: '',
		message: ''
	};

	function submitForm(event: Event) {
		event.preventDefault();
		// TODO: wire to real endpoint or mailto
		alert('This is a placeholder submit. Connect to your backend or email.');
	}
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
		<h1>Talk to the Derolas Team</h1>
	</section>

	<section class="channel-card">
		<div class="channel-left">
			<span>Reach out directly</span>
			<span aria-hidden="true">→</span>
		</div>
		<div class="channel-actions">
			{#each channels as channel}
				<a class="chip" href={channel.href} target="_blank" rel="noreferrer">
					{channel.label}
					<span aria-hidden="true">{channel.icon}</span>
				</a>
			{/each}
		</div>
	</section>

	<div class="divider">
		<hr />
		<span>Or fill out the form</span>
		<hr />
	</div>

	<section class="form-shell">
		<form class="form" on:submit|preventDefault={submitForm}>
			<div class="field-pair">
				<label class="field">
					<span>Email</span>
					<input
						type="email"
						placeholder="john.doe@company.com"
						bind:value={form.email}
						required
					/>
				</label>
				<label class="field">
					<span>Company</span>
					<input type="text" placeholder="Acme Inc." bind:value={form.company} required />
				</label>
			</div>
			<label class="field">
				<span>Message</span>
				<textarea
					rows="5"
					placeholder="Tell us what you're building and how Derolas fits in."
					bind:value={form.message}
					required
				/>
			</label>
			<button class="cta" type="submit">Send Message</button>
		</form>
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
		margin: 0 auto 48px;
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
		margin-bottom: 28px;
		position: relative;
		z-index: 1;
	}
	.hero h1 {
		font-size: clamp(2.2rem, 3.8vw, 2.8rem);
		font-weight: 600;
	}

	.channel-card {
		max-width: 760px;
		margin: 0 auto 24px;
		border-radius: 14px;
		border: 1px solid #1b2f24;
		background: linear-gradient(140deg, rgba(16, 24, 20, 0.8), rgba(14, 21, 18, 0.9));
		padding: 12px 14px;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 12px;
		box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
	}
	.channel-left {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #d8e9df;
		font-weight: 600;
	}
	.channel-actions {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 10px 12px;
		border-radius: 12px;
		border: 1px solid #2c3e36;
		background: linear-gradient(140deg, rgba(24, 35, 30, 0.9), rgba(12, 19, 15, 0.9));
		color: #d7e8dd;
		text-decoration: none;
		font-weight: 600;
	}

	.divider {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 12px;
		max-width: 900px;
		margin: 0 auto 28px;
		color: #7d978b;
	}
	.divider hr {
		border: none;
		border-top: 1px dashed #24362e;
	}

	.form-shell {
		max-width: 900px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}
	.form {
		display: grid;
		gap: 16px;
	}
	.field-pair {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 12px;
	}
	.field {
		display: grid;
		gap: 6px;
	}
	.field span {
		font-weight: 600;
		color: #d8e9df;
	}
	input,
	textarea {
		width: 100%;
		border-radius: 12px;
		border: 1px solid #1f3128;
		background: linear-gradient(140deg, rgba(16, 24, 20, 0.8), rgba(14, 21, 18, 0.9));
		color: #e4f3ea;
		padding: 12px 14px;
		font-size: 1rem;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
	}
	input::placeholder,
	textarea::placeholder {
		color: #6f8379;
	}
	button.cta {
		justify-self: center;
		padding: 12px 24px;
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

	@media (max-width: 800px) {
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
		.channel-card {
			grid-template-columns: 1fr;
		}
		.channel-actions {
			justify-content: flex-start;
		}
	}
</style>
