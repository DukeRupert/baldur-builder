<script lang="ts">
	import Proficiencies from '../components/Proficiencies.svelte';
	import Feat from '../components/Feat.svelte';
	import Action from '../components/Action.svelte';
	import FightingStyle from './components/FightingStyle.svelte';
	import Subclass from './components/Subclass.svelte';
	import type { Feature } from '$lib/types';
	import type { FighterClass } from './Fighter';

	export let type: string;
	export let feature: Feature;
	export let primaryClass: FighterClass;

	const options = [
		{ type: 'proficiencies', component: Proficiencies },
		{ type: 'fightingStyle', component: FightingStyle },
		{ type: 'action', component: Action },
		{ type: 'subclass', component: Subclass },
		{ type: 'feat', component: Feat }
	];

	let component = options.find((val) => val.type === type)?.component;
</script>

<svelte:component this={component} {feature} {primaryClass} />
