<script lang="ts">
	import type { Feature } from '$lib/types';
	import { BARBARIAN, BERSERKER } from './constants';
	import { level, subClass } from '$lib/stores/character';
	import Features from './Features.svelte';
	import type { BarbarianSubClasses } from './Barbarian';

	const primaryClass = BARBARIAN;
	$: features = updateFeatures($level, $subClass as BarbarianSubClasses);
	function updateFeatures(level: number, choice: BarbarianSubClasses): Feature[] {
		const primary = BARBARIAN.features.filter((v) => v.level <= level);
		const sub = BARBARIAN.subClass[choice].features.filter((v) => v.level <= level);
		return primary.concat(sub);
	}

	const handleClick = () => {
		$level++;
	};
</script>

<div class="flex flex-col w-full max-w-md p-4 space-y-6">
	<h2 class="text-lg md:text-2xl pl-2">Class Features</h2>

	{#each features as feature}
		<Features type={feature.type} {feature} {primaryClass} />
	{/each}

	<button on:click={handleClick} class="btn btn-primary">+</button>
</div>
