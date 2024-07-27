// priority: 0

console.info("Loading server_scripts/remove_recipes.js");

ServerEvents.recipes(evt => {
	evt.remove({ mod: 'minecraft' });
	// remove all melting recipes from tconstruct.
	evt.remove({ mod: 'tconstruct', type: 'tconstruct:melting'} );
	evt.remove({ mod: 'tconstruct', type: 'tconstruct:ore_melting'} );
});
