<script lang="ts">
	import { totalAllocatedPoints, abilityPoints } from '$lib/stores/character';
	import { AbilityOptions } from '$lib/constants';
	import { activeTab } from '$lib/stores/app';
	import Bar from '$lib/components/navigation/Bar.svelte';
	import Transition from '$lib/components/Transition.svelte';
	import ClassPicker from '$lib/components/ClassPicker.svelte';
	import RacePicker from '$lib/components/RacePicker.svelte';
	import BackgroundPicker from '$lib/components/BackgroundPicker.svelte';
	import AbilityPicker from '$lib/components/AbilityPicker.svelte';
	let tab = 0;
	$: tab = $activeTab;
	$: console.log(tab);
</script>

<Bar />
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="flex flex-col gap-y-4 px-4 py-8">
		{#if tab == 0}
			<Transition
				><div>
					<h1>Baldur Builder</h1>
				</div></Transition
			>
		{:else if tab == 1}
			<Transition><ClassPicker /></Transition>
		{:else if tab == 2}
			<Transition><RacePicker /></Transition>
		{:else if tab == 3}
			<Transition
				><h2>Ability Points {$totalAllocatedPoints} / {$abilityPoints}</h2>
				<div class="flex flex-col w-full max-w-sm gap-y-6 border-opacity-50">
					{#each Object.values(AbilityOptions) as attribute}
						<AbilityPicker {attribute} />
					{/each}
				</div></Transition
			>
		{:else if tab == 4}
			<Transition><BackgroundPicker /></Transition>
		{/if}
	</div>
</div>
