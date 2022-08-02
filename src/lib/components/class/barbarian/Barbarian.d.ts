// Barbarian.ts
import type { Feature, playerClass } from '$lib/types';

interface BarbarianClass extends playerClass {
	subClass: Record<BarbarianSubClasses, BerserkerClass>;
}

export type BarbarianSubClasses = 'berserker' | 'wildheart';

interface BerserkerClass {
	name: string;
	description: string;
	features: Feature[];
}
