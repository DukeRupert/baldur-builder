<script lang="ts">
	import { activeTab } from '$lib/stores/app';
	const links = ['home', 'class', 'race', 'abilities', 'skills', 'equipment'];

	let active = 0;
	$: $activeTab = active;
	function handleClick(event) {
		active = event.target.id;
		const offset = -56 - 112 * active;
		const position = `translateX(${offset}px)`;
		const el = document.getElementById('tab-bar');
		el.style.transform = position;
	}
</script>

<nav class="bar bg-gray-800">
	<div class="max-w-7xl mx-auto">
		<div class="relative flex items-center justify-between h-16">
			<div
				id="tab-bar"
				class="absolute left-1/2 translate-x-[-56px] flex items-center overflow-x-auto transform-gpu duration-200 ease-out"
			>
				{#each links as link, i}
					<a
						on:click|preventDefault={handleClick}
						id={i.toString()}
						href="#"
						class="block bg-gray-800 w-28 flex-shrink-0 capitalize text-white text-center px-3 py-2 rounded-md text-base font-medium underline-offset-8 {active ==
						i
							? 'underline'
							: ''}">{link}</a
					>
				{/each}
			</div>
		</div>
	</div>
</nav>

<style>
	/* hide scrollbar but allow scrolling */
	.bar {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
		overflow-y: scroll;
	}

	.bar::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

	.clicked {
		transform: translateX(-200px);
	}
</style>
