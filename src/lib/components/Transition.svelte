<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';
	const duration = 300;
</script>

<div
	in:fly={{ delay: duration, duration: duration, x: 1200, opacity: 0.5, easing: quintOut }}
	out:fly={{ duration: duration, x: -1200, opacity: 0.5, easing: quintIn }}
>
	<slot />
</div>
