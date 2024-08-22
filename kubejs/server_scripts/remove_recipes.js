// priority: 0

console.info("Loading server_scripts/remove_recipes.js");

ServerEvents.recipes(evt => {
	evt.remove({ mod: 'minecraft' });
	evt.remove({ mod: 'tconstruct' });
	evt.remove({ mod: 'quark' });
	evt.remove({ mod: 'supplementaries' });
	// remove all melting recipes from tconstruct.
	// evt.remove({ mod: 'tconstruct', type: 'tconstruct:melting'});
	// evt.remove({ mod: 'tconstruct', type: 'tconstruct:ore_melting'});

	// this will be removed entirely later
	evt.remove({ mod: 'iceandfire', item: 'minecraft:gravel' });
	evt.remove({ mod: 'unusualend', item: 'minecraft:glass' });
	evt.remove({ mod: 'infernalexp', item: 'minecraft:torch' });
});
