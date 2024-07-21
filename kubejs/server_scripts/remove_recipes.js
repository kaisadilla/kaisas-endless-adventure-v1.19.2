// priority: 0

console.info("Loading server_scripts/remove_recipes.js");

ServerEvents.recipes(evt => {
	evt.remove({ output: 'minecraft:stone_pickaxe' });
});
