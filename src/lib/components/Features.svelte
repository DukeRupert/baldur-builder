<script lang="ts">
	import Proficiencies from '$lib/components/class/components/Proficiencies.svelte';
	import Action from '$lib/components/class/components/Action.svelte';
	import Feat from '$lib/components/class/components/Feat.svelte';

	import type { Feature, playerClass } from '$lib/types';

	export let type: string;
	export let feature: Feature;
	export let primaryClass: playerClass;

	const options = [
		{ type: 'proficiencies', component: Proficiencies },
		{ type: 'action', component: Action },
		{ type: 'feat', component: Feat }
	];

	let component = options.find((val) => val.type === type)?.component;
</script>

<svelte:component this={component} {feature} {primaryClass} />
