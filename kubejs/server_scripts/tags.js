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

    evt.add('minecraft:sculk_replaceable', [
        "kaisascore:marble",
    ]);
    evt.add('minecraft:sculk_replaceable_world_gen', [
        "kaisascore:marble",
    ]);
})