<script lang="ts">
	import { primaryClass, subClass } from '$lib/stores/character';
	import Transition from './Transition.svelte';
	import type { PrimaryClasses } from '$lib/types';
	import { SubClassOptions, playableClasses } from '$lib/constants';
	import ClassInfo from './ClassInfo.svelte';

	// @ts-ignore
	function updateClass(e: MouseEvent<HTMLAnchorElement>) {
		const choice: PrimaryClasses = e.target.id;
		primaryClass.set(choice);
		// default to first subclass listed
		subClass.set(SubClassOptions[choice][0].title);
	}

	let isOpen = false;
	let activeClass;

	function openClassModal(event) {
		let name = event.target.id;
		console.log(name);
		activeClass = playableClasses.find((el) => el.name == name);
		console.log(activeClass);
		if (activeClass) {
			isOpen = true;
		}
	}
</script>

{#if isOpen}
	<Transition><ClassInfo {activeClass} on:close={() => (isOpen = false)} /></Transition>
{:else}
	<Transition
		><h2 class="text-center uppercase">Choose a class</h2>
		<div class="flex flex-col gap-y-4 w-full border-opacity-50">
			{#each playableClasses as playableClass}
				<button
					id={playableClass.name}
					on:click|preventDefault={openClassModal}
					class="grid grid-cols-3 h-18 card bg-base-100 border border-gray-300 justify-items-center items-center rounded-box capitalize"
				>
					{#if playableClass.image}
						<img class="h-16 w-16" src={playableClass.image.src} alt={playableClass.image.alt} />
					{:else}
						<svg
							class="h-16 w-16 text-primary"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" /></svg
						>
					{/if}

					{playableClass.name}
					<svg
						class="h-8 w-8 text-primary"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" /></svg
					>
				</button>
				<!-- <div class="divider" /> -->
			{/each}
		</div></Transition
	>
{/if}
