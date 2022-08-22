<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Features from './Features.svelte';

	export let activeClass;

	const dispatch = createEventDispatcher();
</script>

<div class="gap-y-4 px-4 py-8">
	<button on:click|preventDefault={() => dispatch('close')}>x</button>
	<div class="flex items-center">
		<h4 class="text-lg font-bold capitalize">{activeClass.name}</h4>
		<div class="mr-4 flex-shrink-0 ml-auto">
			{#if activeClass.image}
				<img
					class="h-24 w-24 bg-white text-gray-300"
					src={activeClass.image.src}
					alt={activeClass.image.alt}
				/>
			{:else}
				<svg
					class="h-16 w-16 border border-gray-300 bg-white text-gray-300"
					preserveAspectRatio="none"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 200 200"
					aria-hidden="true"
				>
					<path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
				</svg>
			{/if}
		</div>
	</div>
	<div>
		<p class="mt-1 text-base">{activeClass.description}</p>
		<br />
		<p class="mt-1 text-sm"><span class="font-bold">Hit Dice:</span> d{activeClass.hp}</p>
		<p class="mt-1 text-sm capitalize">
			<span class="font-bold">Saves:</span>
			{activeClass.savingThrows[0]}, {activeClass.savingThrows[1]}
		</p>
	</div>
	<div class="mt-4 flex flex-col gap-y-4">
		{#each activeClass.features as feature}
			<Features type={feature.type} {feature} primaryClass={activeClass} />
		{/each}
	</div>
</div>
