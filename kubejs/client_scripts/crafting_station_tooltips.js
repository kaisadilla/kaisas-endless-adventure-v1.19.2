// priority: 1
console.info("Loading client_scripts/crafting_station_tooltips.js");

const LIGHT_GRAY = "#aaaaaa";
const ORANGE = "#ff6000";
const GOLD = "#ffc000";

ItemEvents.tooltip(evt => {
	evt.add('minecraft:crafting_table', Text.of(
        "Allows crafting basic items."
    ).color(LIGHT_GRAY));
	evt.add('tconstruct:crafting_station', Text.of(
        "Allows crafting basic items. Offers extra functionality."
    ).color(LIGHT_GRAY));
	evt.add('tconstruct:part_builder', Text.of(
        "Allows crafting wooden parts used to create casts."
    ).color(LIGHT_GRAY));
	evt.add('tconstruct:tinker_station', Text.of(
        "Allows crafting tools and weapons."
    ).color(LIGHT_GRAY));
	evt.add('minecraft:furnace', Text.of(
        "Allows processing items that need to be heated. Cannot process metals."
    ).color(LIGHT_GRAY));
	evt.add('minecraft:stonecutter', Text.of(
        "Allows crafting variants of stone blocks."
    ).color(LIGHT_GRAY));
	evt.add('corail_woodcutter:oak_woodcutter', Text.of(
        "Allows crafting variants of woodcutter blocks."
    ).color(LIGHT_GRAY));
	evt.add('tconstruct:seared_melter', Text.of(
        "Allows melting metals."
    ).color(LIGHT_GRAY));
	evt.add('tconstruct:seared_heater', Text.of(
        "Heats some stations, such as Melters, by burning items like coal."
    ).color(LIGHT_GRAY));
	evt.add('minecraft:brewing_stand', Text.of(
        "Allows brewing potions."
    ).color(LIGHT_GRAY));
	evt.add('minecraft:loom', Text.of(
        "Allows painting banners."
    ).color(LIGHT_GRAY));
	evt.add('minecraft:composter', Text.of(
        "Generates bonemeal from organic resources."
    ).color(LIGHT_GRAY));

    //evt.addAdvanced('simplyswords:awakened_lichblade', (item, advanced, text) => {
    //    const name = text[0];
    //    text.clear();
    //    text.add(name);
    //
    //    text.add("Some text e.e.");
    //})
});
