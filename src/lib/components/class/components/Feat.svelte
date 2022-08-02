<script lang="ts">
	import type { Feature, Feat } from '$lib/types';
	import FEATS from '$lib/data/feats';
	import { firstFeat } from '$lib/stores/character';

	export let feature: Feature;
	const FeatOptions = Object.values(FEATS);

	let choice = FEATS.ABILITY_IMPROVEMENT.name;
	let description = FEATS.ABILITY_IMPROVEMENT.description;

	function handleChange() {
		let feat: Feat = FeatOptions.find((val) => val.name === choice) || FEATS.ABILITY_IMPROVEMENT;
		description = feat?.description || '';
		if (feat) {
			$firstFeat = feat;
		}
	}
</script>

<div class="card w-full bg-base-100 shadow-md">
	<div class="card-body">
		<div class="tooltip tooltip-bottom z-30" data-tip={feature.description}>
			<h2 class="card-title capitalize">{feature.name}</h2>
		</div>
		<select
			bind:value={choice}
			on:change={handleChange}
			class="select select-primary w-full max-w-xs capitalize"
		>
			{#each FeatOptions as item}
				<option class="capitalize">{item.name}</option>
			{/each}
		</select>
		{#if description}
			<p class="mt-2">{description}</p>
		{/if}
	</div>
</div>
