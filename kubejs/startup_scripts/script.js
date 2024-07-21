// priority: 0

console.info("Loading startup_scripts/script.js");

ItemEvents.modification(evt => {
    evt.modify('minecraft:iron_sword', item => {
        item.maxDamage = 500;
    });
    evt.modify('simplyswords:iron_glaive', item => {
        item.maxDamage = 500;
    });
});
