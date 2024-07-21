console.info("Loading server_scripts/tool_tiers.js");

const NEEDS_TIER_FLINT = "forge:needs_wood_tool";
const NEEDS_TIER_COPPER = "minecraft:needs_stone_tool";
const NEEDS_TIER_BRONZE = "minecraft:needs_iron_tool";
const NEEDS_TIER_STEEL = "minecraft:needs_diamond_tool";
const NEEDS_TIER_TITANIUM = "forge:needs_netherite_tool";

ServerEvents.tags('block', evt => {
    evt.remove(NEEDS_TIER_COPPER, 'minecraft:copper_ore', 'minecraft:deepslate_copper_ore');
    evt.remove(NEEDS_TIER_COPPER, 'thermal:tin_ore', 'thermal:deepslate_tin_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'thermal:lead_ore', 'thermal:deepslate_lead_ore');
    evt.remove(NEEDS_TIER_COPPER, 'minecraft:iron_ore', 'minecraft:deepslate_iron_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'thermal:nickel_ore', 'thermal:deepslate_nickel_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'minecraft:gold_ore', 'minecraft:deepslate_gold_ore', 'minecraft:nether_gold_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'thermal:silver_ore', 'thermal:deepslate_silver_ore');
    evt.remove(NEEDS_TIER_BRONZE, 'minecraft:diamond_ore', 'minecraft:deepslate_diamond_ore');

    evt.add(NEEDS_TIER_FLINT, '#forge:ores/copper');
    evt.add(NEEDS_TIER_FLINT, '#forge:ores/tin');
    evt.add(NEEDS_TIER_FLINT, '#forge:ores/lead');
    evt.add(NEEDS_TIER_COPPER, '#forge:ores/coal');
    evt.add(NEEDS_TIER_BRONZE, '#forge:ores/iron');
    evt.add(NEEDS_TIER_BRONZE, '#forge:ores/nickel');
    // <-- deepslate ores -->
    evt.add(NEEDS_TIER_STEEL, '#forge:ores/gold');
    evt.add(NEEDS_TIER_STEEL, '#forge:ores/silver');
    evt.add(NEEDS_TIER_TITANIUM, '#forge:ores/diamond');
    //evt.add(NEEDS_TIER_TITANIUM, '#forge:ores/titanium');

    // <-- rocks -->
    evt.add(NEEDS_TIER_STEEL, [
        '#forge:deepslate',
        'minecraft:polished_deepslate',
        'minecraft:deepslate_bricks',
        'minecraft:cracked_deepslate_bricks',
        'minecraft:deepslate_tiles',
        'minecraft:cracked_deepslate_tiles',
        'minecraft:chiseled_deepslate',
        'minecraft:cobbled_deepslate_wall',
        'minecraft:polished_deepslate_wall',
        'minecraft:deepslate_brick_wall',
        'minecraft:deepslate_tile_wall',
        'minecraft:cobbled_deepslate_stairs',
        'minecraft:polished_deepslate_stairs',
        'minecraft:deepslate_brick_stairs',
        'minecraft:deepslate_tile_stairs',
        'minecraft:cobbled_deepslate_slab',
        'minecraft:polished_deepslate_slab',
        'minecraft:deepslate_brick_slab',
        'minecraft:deepslate_tile_slab',
        'minecraft:tuff',
        'quark:polished_tuff',
        'quark:tuff_wall',
        'quark:polished_tuff_stairs',
        'quark:tuff_stairs',
        'quark:polished_tuff_slab',
        'quark:tuff_slab',
        'quark:tuff_bricks',
        'quark:tuff_bricks_slab',
        'quark:tuff_bricks_stairs',
        'quark:tuff_bricks_wall',
        'quark:chiseled_tuff_bricks',
        'quark:tuff_pillar',
        'quark:tuff_vertical_slab',
        'quark:polished_tuff_vertical_slab',
        'quark:tuff_bricks_vertical_slab',
        'minecraft:end_stone',
        'minecraft:end_stone_bricks',
        'minecraft:end_stone_brick_wall',
        'minecraft:end_stone_brick_stairs',
        'minecraft:end_stone_brick_slab',
        'quark:end_stone_brick_vertical_slab',
    ]);
});
