<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	let count = 0;
</script>

<p class="mt-4">Count: {count}</p>
<Button onclick={() => count++} variant="secondary">Increment</Button>
