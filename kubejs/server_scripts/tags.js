console.info("Loading server_scripts/tags.js");

const CRAFTING_METAL_INGOTS = [
    "#forge:ingots/iron",
    "#forge:ingots/copper",
];
const CRAFTING_METAL_GEARS = [
    "#forge:gears/iron",
    "#forge:gears/copper",
];

ServerEvents.tags('item', evt => {
    evt.add('kaisascore:crafting_metal_ingot', CRAFTING_METAL_INGOTS);
    evt.add('kaisascore:crafting_metal_gear', CRAFTING_METAL_GEARS);

    // copper only drops one raw stone in this modpack.
    evt.remove('forge:ore_rates/dense', [
        "minecraft:copper_ore",
        "minecraft:deepslate_copper_ore",
    ]);
    evt.add('forge:ore_rates/singular', [
        "minecraft:copper_ore",
        "minecraft:deepslate_copper_ore",
    ]);
})

ServerEvents.tags('block', evt => {
    // copper only drops one raw stone in this modpack.
    evt.remove('forge:ore_rates/dense', [
        "minecraft:copper_ore",
        "minecraft:deepslate_copper_ore",
    ]);
    evt.add('forge:ore_rates/singular', [
        "minecraft:copper_ore",
        "minecraft:deepslate_copper_ore",
    ]);
})