<svelte:head>
	<title>Derolas | Team</title>
</svelte:head>

<script lang="ts">
	import eBallerIcon from '$lib/assets/8baller.png';
	import robotOrangeIcon from '$lib/assets/robot_orange_icon.svg';
	import XLink from '$lib/components/XLink.svelte';

	const members = [
		{
			name: '8baller',
			bio: 'Deep experience in agent based systems, 1st class masters in AI, Ex-AWS engineer with more than 10 years + of trading experience in everything from betting markets, through to crypto options.',
			handle: '@8baller11',
			link: 'https://x.com/8baller11',
			accent: 'lime',
			avatar: eBallerIcon
		},
		{
			name: 'Zarathurstra',
			bio: 'Deep experience in agent based systems, 1st class masters in AI, Ex-AWS engineer with more than 10 years + of trading experience in everything from betting markets, through to crypto options.',
			handle: '@x_handle',
			link: 'https://x.com',
			accent: 'slate',
			avatar: robotOrangeIcon
		}
	];
</script>

<main class="page grid gap-6 px-6 pt-15  pb-18 max-w-[1100px] mx-auto">
	<section class="page-hero pb-8">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center">
			Meet Derolas Team
		</h1>
	</section>

	<section class="team">
		{#each members as member, idx (member.name)}
			<article class={`member ${idx % 2 ? 'reverse' : ''}`}>
				<div class={`avatar ${member.accent}`} aria-hidden="true">
					<img src={member.avatar} alt={member.name} />
				</div>
				<div class="member-body">
					<h2>{member.name}</h2>
					<p class="pb-8 pt-8">{member.bio}</p>
					<XLink handle={member.handle} href={member.link} />
				</div>
			</article>
		{/each}
	</section>

</main>

<style>
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
	.avatar img {
		position: relative;
		z-index: 1;
		width: 100%;
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

	.ghost.small {
		padding: 10px 14px;
		font-size: 0.95rem;
		gap: 8px;
	}
	.chip-icon {
		width: 16px;
		height: 16px;
	}

	@media (max-width: 880px) {
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
