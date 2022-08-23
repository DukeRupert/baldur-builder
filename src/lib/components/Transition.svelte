<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	const duration = 300;
</script>

<div in:fade={{ duration: duration, easing: quintIn }}>
	<slot />
</div>
