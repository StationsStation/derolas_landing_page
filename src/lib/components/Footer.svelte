<script lang="ts">
	import xLogo from '$lib/assets/x_logo.svg';
	import telegramIcon from '$lib/assets/telegram_icon.svg';
</script>

<footer class="footer">
	<span>© Derolas 2025</span>
	<span aria-hidden="true">•</span>
	<a class="nav-link" href="/contact">Contact</a>
	<span aria-hidden="true">•</span>
	<div class="socials">
		<a href="https://x.com/derolas_xyz" target="_blank" rel="noreferrer" aria-label="X (twitter)">
			<img src={xLogo} alt="X logo" />
		</a>
		<a href="https://t.me/c/2543779960/1" target="_blank" rel="noreferrer" aria-label="Telegram">
			<img src={telegramIcon} alt="Telegram logo" />
		</a>
	</div>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding: 32px 0 24px;
		color: #7d978b;
		font-size: 0.95rem;
	}
	.footer .nav-link {
		color: #d8e9df;
		text-decoration: none;
		font-weight: 500;
		transition: color 150ms ease;
	}
	.footer .nav-link:hover {
		color: #2af270;
	}
	.footer .socials {
		display: inline-flex;
		align-items: center;
		gap: 10px;
	}
	.footer .socials img {
		width: 18px;
		height: 18px;
		object-fit: contain;
		opacity: 0.85;
		transition: opacity 120ms ease, transform 120ms ease;
	}
	.footer .socials img:hover {
		opacity: 1;
		transform: translateY(-1px);
	}
</style>
