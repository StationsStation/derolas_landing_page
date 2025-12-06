<svelte:head>
	<title>Derolas | Talk to the Team</title>
</svelte:head>

<script lang="ts">
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

<main class="page grid gap-6 px-6 pt-15 pb-18 max-w-[1100px] mx-auto justify-center">
	<section class="page-hero pb-8">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center">
			Talk to the Derolas Team
		</h1>
		<p class="lede text-lg md:text-xl text-center">
			Reach out directly or drop us a note—our team will get back quickly.
		</p>
	</section>

	<section class="channel-card">
		<div class="channel-left">
			<span>Reach out directly</span>
			<span aria-hidden="true">→</span>
		</div>
		<div class="channel-actions">
			{#each channels as channel (channel.href)}
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
				></textarea>
			</label>
			<button class="cta" type="submit">Send Message</button>
		</form>
	</section>
</main>

<style>
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

	@media (max-width: 800px) {
		.channel-card {
			grid-template-columns: 1fr;
		}
		.channel-actions {
			justify-content: flex-start;
		}
	}
</style>
