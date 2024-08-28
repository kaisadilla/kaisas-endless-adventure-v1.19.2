// priority: 0

console.info("Loading server_scripts/remove_recipes.js");

ServerEvents.recipes(evt => {
	// remove all recipes from mod
	evt.remove({ mod: 'minecraft' });
	evt.remove({ mod: 'tconstruct' });
	evt.remove({ mod: 'quark' });
	evt.remove({ mod: 'supplementaries' });
	evt.remove({ mod: 'storagedrawers' });

	// remove specific recipes
	evt.remove({ mod: 'gravestone', output: [
		'gravestone:gravestone',
	]});

	evt.remove({ mod: 'iceandfire', output: [
		'minecraft:gravel',
	]});

	evt.remove({ mod: 'infernalexp', output: [
		'minecraft:torch',
	]});

	evt.remove({ mod: 'thermal', output: [
		'minecraft:prismarine_shard',
	]});

	evt.remove({ mod: 'unusualend', output: [
		'minecraft:glass',
	]});

	// remove all melting recipes from tconstruct.
	// evt.remove({ mod: 'tconstruct', type: 'tconstruct:melting'});
	// evt.remove({ mod: 'tconstruct', type: 'tconstruct:ore_melting'});
});