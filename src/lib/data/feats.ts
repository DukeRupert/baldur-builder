import type { Feats, Feat } from '$lib/types';

export const FEATS: Record<Feats, Feat> = {
	ABILITY_IMPROVEMENT: {
		name: 'ability improvement',
		description:
			'+2 Ability points to spend as the player sees fit between Strength, Dexterity, Constitution, Intelligence, Charisma and Wisdom.',
		classes: 'all'
	},
	ATHLETE: {
		name: 'athlete',
		description:
			'Increases Strength or Dexterity by 1, to a maximum of 20. When you are prone, standing uses less movement.',
		classes: 'all'
	},
	DEFENSIVE_DUELIST: {
		name: 'defensive duelist',
		description:
			'When you are attacked with a melee attack, you use your reaction to increase your Armour Class, potentially causing the attack to miss.',
		classes: 'all'
	},
	DUAL_WIELDER: {
		name: 'dual wielder',
		description:
			"Gain a +1 bonus to Armour Class while wielding a melee weapon in each hand. You can use two-weapon fighting even if your weapons aren't light.",
		classes: 'all'
	},
	GREAT_WEAPON_MASTER: {
		name: 'great weapon master',
		description:
			'When a melee attack scores a critical hit or kills a creature, you can make another melee attack as a bonus action. When attacking with Heavy Weapons you are proficient with, attack rolls take a -5 penalty, but their damage increases by 10.',
		classes: 'all'
	},
	HEAVILY_ARMOURED: {
		name: 'heavily armoured',
		description:
			'Gain proficiency with Heavy Armor and increase your Strength score by 1, to a maximum of 20.',
		classes: 'all',
		requirements: {
			armorProfs: 'medium'
		}
	},
	LIGHTLY_ARMOURED: {
		name: 'lightly armoured',
		description:
			'Gain proficiency with Light Armor and increase your Strength or Dexterity by 1, to a maximum of 20.',
		classes: 'all'
	},
	MAGIC_INITIATE_BARD: {
		name: 'magic initiate: bard',
		description:
			'Learn 2 Cantrips and a Level 1 spell from the Bard spell list. You can cast the Level 1 spell once per Long Rest. Your Spellcasting Modifier for all 3 spells is Charisma.',
		classes: 'all'
	},
	MAGIC_INITIATE_CLERIC: {
		name: 'magic initiate: cleric',
		description:
			'Gain a spell slot of Level 1 that is restored on a long rest. Learn two cantrips and one 1st-level spell from the Cleric spell list. Your spellcasting modifier for these Spells is Wisdom.',
		classes: 'all'
	},
	MAGIC_INITIATE_DRUID: {
		name: 'magic initiate: druid',
		description:
			'Learn 2 Cantrips and a 1st-level Spell from the Druid spell list. You can cast the 1st-level Spell once per Long Rest. Your Spellcasting Modifier for all three Spells is Wisdom.',
		classes: 'all'
	},
	MAGIC_INITIATE_SORCERER: {
		name: 'magic initiate: sorcerer',
		description:
			'Learn 2 Cantrips and a 1st-level Spell from the Sorcerer spell list. You can cast the 1st-level Spell once per Long Rest. Your Spellcasting Modifier for all three Spells is Charisma.',
		classes: 'all'
	},
	MAGIC_INITIATE_WARLOCK: {
		name: 'magic initiate: warlock',
		description:
			'Gain a spell slot of Level 1 that is restored on a long rest. Learn two cantrips and one 1st-level spell from the Warlock spell list. Your spellcasting modifier for these Spells is Charisma.',
		classes: 'all'
	},
	MAGIC_INITIATE_WIZARD: {
		name: 'magic initiate: wizard',
		description:
			'Gain a spell slot of Level 1 that is restored on a long rest. Learn two cantrips and one 1st-level spell from the Wizard spell list. Your spellcasting modifier for these Spells is Intelligence.',
		classes: 'all'
	},
	MARTIAL_ADEPT: {
		name: 'martial adept',
		description:
			'Learn two maneuvers from the Battle Master archetype and receive 1 (additional) superiority die to fuel them. You regain expended superiority dice after a short or long rest.',
		classes: 'all'
	},
	MOBILE: {
		name: 'mobile',
		description:
			"Your speed increases. When you use the Dash action, difficult terrain doesn't slow you down. Moreover, if you move after making a melee attack, you don't provoke an opportunity attack from your target.",
		classes: 'all'
	},
	MODERATELY_ARMOURED: {
		name: 'moderately armooured',
		description:
			'You have proficiency with Medium Armor and Shields, and your Strength or Dexterity score increases by 1, to a maximum of 20.',
		classes: 'all',
		requirements: {
			armorProfs: 'light'
		}
	},
	SHIELD_MASTER: {
		name: 'shield master',
		description:
			'Gain a +2 bonus to Dexterity saving throws when wielding a Shield. If a spell forces you to make a Dexterity saving throw, you can use your reaction to shield yourself. On a successful save, you take no damage.',
		classes: 'all'
	},
	SKILLED: {
		name: 'skilled',
		description: 'You gain proficiency in any combination of three skills of your choice.',
		classes: 'all'
	},
	TOUGH: {
		name: 'tough',
		description: 'Hit points maximum increased by 2 for each level.',
		classes: 'all'
	},
	WEAPON_MASTER: {
		name: 'weapon master',
		description:
			'Increase your Strength or Dexterity by 1, to a maximum of 20, and gain proficiency with four weapons of your choice.',
		classes: 'all'
	}
};

export default FEATS;
